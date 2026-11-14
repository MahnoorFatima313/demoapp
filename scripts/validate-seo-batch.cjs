// Local build/browser checks for the first two commercial pages. No external writes.
const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const { execFileSync } = require('child_process');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const root = path.resolve(__dirname, '..');
const batch2 = process.argv.includes('--batch-2');
const batch3 = process.argv.includes('--batch-3');
const review = process.argv.includes('--review');
const navigationOnly = process.argv.includes('--navigation-only');
const apiOnly = process.argv.includes('--api-only');
const pages = apiOnly ? ['ApiDevelopmentServices'] : review ? ['Home', 'CustomSoftwareDevelopment', 'ApiDevelopmentServices', 'WebAppDevelopment', 'WebsiteDevelopmentServices', 'MobileAppDevelopment', 'EcommerceDevelopmentServices'] : batch3 ? ['MobileAppDevelopment', 'EcommerceDevelopmentServices'] : batch2 ? ['WebAppDevelopment', 'WebsiteDevelopmentServices'] : ['CustomSoftwareDevelopment', 'ApiDevelopmentServices'];
const routes = apiOnly ? ['/api-development-services'] : review ? ['/', '/custom-software-development-services', '/api-development-services', '/web-application-development-services', '/website-development-services', '/mobile-app-development', '/ecommerce-development-services'] : batch3 ? ['/mobile-app-development', '/ecommerce-development-services'] : batch2 ? ['/web-application-development-services', '/website-development-services'] : ['/custom-software-development-services', '/api-development-services'];
const output = path.join(root, 'build', apiOnly ? 'seo-api-image-check' : review ? 'seo-final-review' : batch3 ? 'seo-validation-batch3' : batch2 ? 'seo-validation-batch2' : 'seo-validation');
fs.mkdirSync(output, { recursive: true });
function presentation(source) {
  const values = [];
  traverse(parser.parse(source, { sourceType: 'module', plugins: ['jsx'] }), { JSXAttribute(p) {
    if (['className', 'style'].includes(p.node.name.name)) values.push(generate(p.node, { compact: true }).code);
  } });
  return values;
}
for (const page of pages) {
  const file = `src/pages/${page}.jsx`;
  const before = execFileSync('git', ['show', `HEAD:${file}`], { cwd: root, encoding: 'utf8' });
  assert.deepEqual(presentation(fs.readFileSync(path.join(root, file), 'utf8')), presentation(before), `${page}: presentation attributes changed`);
}
const mime = { '.js': 'application/javascript', '.css': 'text/css', '.html': 'text/html', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  let target = path.resolve(root, 'build', '.' + pathname);
  if (!target.startsWith(path.join(root, 'build') + path.sep)) target = path.join(root, 'build', 'index.html');
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html');
  if (!fs.existsSync(target)) {
    if (path.extname(target)) { res.writeHead(404); res.end(); return; }
    target = path.join(root, 'build', 'index.html');
  }
  res.setHeader('Content-Type', mime[path.extname(target)] || 'application/octet-stream');
  fs.createReadStream(target).pipe(res);
});
(async () => {
  const { default: puppeteer } = await import('puppeteer-core');
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser;
  const results = [];
  try {
    browser = await puppeteer.launch({ executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', headless: true, userDataDir: path.join(output, 'browser-profile') });
    const page = await browser.newPage();
    await page.setCacheEnabled(false);
    await page.setRequestInterception(true);
    page.on('request', request => {
      if (request.url().startsWith('http://127.0.0.1:') || request.url().startsWith('data:')) return request.continue();
      // A blocked external @import can fail the entire local CSS chunk.
      // Stub remote stylesheets explicitly; these checks use local CSS and fallback fonts.
      if (request.resourceType() === 'stylesheet') return request.respond({ status: 200, contentType: 'text/css', body: '' });
      return request.abort();
    });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const route of (navigationOnly ? [] : routes)) {
      for (const width of [1440, 768, 390]) {
        await page.setViewport({ width, height: 900 });
        await page.goto(`http://127.0.0.1:${server.address().port}${route}`, { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('main h1');
        await page.waitForFunction(() => document.querySelector('main h1')?.dataset.prerenderReady !== 'false');
        // Exercise intersection-triggered content without altering animation styles.
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 700) {
            scrollTo(0, y); await new Promise(r => setTimeout(r, 25));
          }
          scrollTo(0, 0);
        });
        await new Promise(r => setTimeout(r, 1000));
        const details = await page.evaluate(() => ({
          title: document.title,
          titles: [...document.querySelectorAll('title')].map(n => n.textContent),
          description: [...document.querySelectorAll('meta[name="description"]')].map(n => n.content),
          canonical: [...document.querySelectorAll('link[rel="canonical"]')].map(n => n.href),
          h1: [...document.querySelectorAll('main h1')].map(n => n.textContent.trim()),
          jsonLdTypes: [...document.querySelectorAll('script[type="application/ld+json"]')].map(n => JSON.parse(n.textContent)['@type']),
          duplicateIds: [...new Set([...document.querySelectorAll('[id]')].map(n => n.id).filter((id, i, ids) => ids.indexOf(id) !== i))],
          faqMicrodataCount: document.querySelectorAll('[itemtype="https://schema.org/FAQPage"]').length,
          internalLinks: [...document.querySelectorAll('main a[href], .related-reading a[href]')].map(n => ({ href: n.getAttribute('href'), anchor: n.textContent.trim() })).filter(l => l.href.startsWith('/')),
          overflow: document.documentElement.scrollWidth > innerWidth,
          brokenImages: [...document.querySelectorAll('main img')].filter(n => n.complete && !n.naturalWidth).map(n => n.getAttribute('src')),
        }));
        assert.equal(details.h1.length, 1, `${route}: H1 count`);
        details.metadataValid = details.titles.length === 1 && details.description.length === 1 && details.canonical.length === 1 && details.canonical[0] === `https://qllmsoft.com${route}`;
        assert.ok(details.jsonLdTypes.includes('Service'), `${route}: Service JSON-LD`);
        assert.deepEqual(details.duplicateIds, [], `${route}: duplicate element IDs`);
        assert.equal(details.faqMicrodataCount, 0, `${route}: duplicate FAQ representation`);
        const screenshot = `${route === '/' ? 'home' : route.slice(1)}-${width}.png`;
        await page.screenshot({ path: path.join(output, screenshot), fullPage: true });
        await page.screenshot({ path: path.join(output, screenshot.replace('.png', '-hero.png')) });
        results.push({ route, width, ...details, screenshot });
      }
    }
    const linkTargets = [];
    for (const route of (navigationOnly || apiOnly ? [] : review ? ['/about', '/contact', '/blog', '/asp-net-core-development-services', '/blog/mobile-app-development-cost-in-pakistan', '/software-project-requirements-checklist', '/ai-document-management-software', '/blog/web-application-planning-and-architecture-guide'] : batch3 ? ['/blog/mobile-app-development-cost-in-pakistan', '/software-project-requirements-checklist', '/blog/custom-vs-saas-ecommerce-for-growing-smbs', '/api-development-services'] : batch2 ? ['/asp-net-core-development-services', '/blog/web-application-planning-and-architecture-guide'] : ['/web-application-development-services', '/api-development-services', '/blog/custom-vs-saas-ecommerce-for-growing-smbs', '/blog/asp-net-core-development'])) {
      try {
      await page.goto(`http://127.0.0.1:${server.address().port}${route}`, { waitUntil: 'domcontentloaded' });
      await page.waitForSelector('h1', { timeout: 10000 });
      const actual = await page.evaluate(() => ({ path: location.pathname, h1: document.querySelector('h1')?.textContent.trim(), canonical: document.querySelector('link[rel="canonical"]')?.href }));
      assert.equal(actual.path, route, 'Link destination redirected');
      assert.equal(actual.canonical, `https://qllmsoft.com${route}`, 'Link destination canonical');
      linkTargets.push(actual);
      } catch (error) {
        linkTargets.push({ route, error: error.message });
      }
    }
    const navigation = [];
    const legalTitles = [];
    if (apiOnly) {
      for (const [route, title] of [['/privacy-policy', 'Privacy Policy | QllmSoft'], ['/terms-of-services', 'Terms of Services | QllmSoft']]) {
        await page.goto(`http://127.0.0.1:${server.address().port}${route}`, { waitUntil: 'domcontentloaded' });
        await page.waitForFunction(title => document.title === title, {}, title);
        const count = await page.evaluate(() => document.querySelectorAll('title').length);
        assert.equal(count, 1, `${route}: title count`);
        legalTitles.push({ route, title, count });
      }
      assert.ok(results.every(r => r.brokenImages.length === 0), 'API local images must load');
    }
    fs.writeFileSync(path.join(output, 'results.json'), JSON.stringify({ presentationAttributesUnchanged: true, pageErrors: errors, linkTargets, navigation, legalTitles, results }, null, 2));
    if (review) {
      await page.goto(`http://127.0.0.1:${server.address().port}/`, { waitUntil: 'domcontentloaded' });
      await page.waitForFunction(() => document.querySelector('main h1')?.dataset.prerenderReady === 'true');
      for (const route of routes.slice(1)) {
        // Click the actual rendered link, preserving client-side routing.
        await page.evaluate(route => {
          // Carousel side cards intentionally focus before navigating. Use the
          // homepage's contextual service links for this navigation check.
          const link = document.querySelector(`main .csd-about a[href="${route}"]`) || document.querySelector(`a[href="${route}"]`);
          if (!link) throw new Error(`Missing navigation link: ${route}`);
          link.click();
        }, route);
        await page.waitForFunction(route => location.pathname === route && document.querySelector('link[rel="canonical"]')?.href === `https://qllmsoft.com${route}`, {}, route);
        const metadata = await page.evaluate(() => ({ titles: document.querySelectorAll('title').length, descriptions: document.querySelectorAll('meta[name="description"]').length, canonicals: document.querySelectorAll('link[rel="canonical"]').length }));
        assert.deepEqual(metadata, { titles: 1, descriptions: 1, canonicals: 1 }, `Navigation metadata: ${route}`);
        navigation.push({ route, ...metadata });
        await page.evaluate(() => document.querySelector('a[href="/"]').click());
        await page.waitForFunction(() => location.pathname === '/' && document.querySelector('link[rel="canonical"]')?.href === 'https://qllmsoft.com/');
      }
    }
    fs.writeFileSync(path.join(output, 'results.json'), JSON.stringify({ presentationAttributesUnchanged: true, pageErrors: errors, linkTargets, navigation, legalTitles, results }, null, 2));
    console.log(JSON.stringify({ presentationAttributesUnchanged: true, pageErrors: errors, linkTargets, legalTitles, checks: results.map(r => ({ route: r.route, width: r.width, metadataValid: r.metadataValid, descriptionCount: r.description.length, titleCount: r.titles.length, overflow: r.overflow, brokenImages: r.brokenImages, title: r.title })) }, null, 2));
    assert.equal(errors.length, 0, 'Browser JavaScript errors');
    assert.ok(linkTargets.every(r => !r.error), 'A link target did not render; see results.json');
    assert.ok(results.every(r => r.metadataValid), `Rendered metadata has duplicates; see ${path.relative(root, output)}/results.json`);
  } finally {
    if (browser) await browser.close();
    server.close();
  }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
