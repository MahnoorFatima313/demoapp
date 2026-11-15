const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const root = path.resolve(__dirname, '..', 'build');
const route = '/blog/how-to-choose-an-ai-healthcare';
const server = http.createServer((req, res) => {
  let file = path.join(root, decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) file = path.join(root, 'index.html');
  res.setHeader('Content-Type', ({'.js':'application/javascript','.css':'text/css','.html':'text/html','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'})[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
(async () => {
  const {default: puppeteer} = await import('puppeteer-core');
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const browser = await puppeteer.launch({executablePath:'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', headless:true});
  const errors = [], results = [];
  try {
    const page = await browser.newPage();
    page.on('pageerror', e => errors.push(e.message));
    await page.setRequestInterception(true);
    page.on('request', r => r.url().startsWith('http://127.0.0.1:') || r.url().startsWith('data:') ? r.continue() : r.resourceType() === 'stylesheet' ? r.respond({status:200,contentType:'text/css',body:''}) : r.abort());
    for (const width of [1440,390]) {
      await page.setViewport({width,height:900});
      await page.goto(`http://127.0.0.1:${server.address().port}/blog`, {waitUntil:'domcontentloaded'});
      await page.waitForSelector(`.blog-card a[href="${route}"]`);
      const listing = await page.evaluate(route => {
        const cards = [...document.querySelectorAll('.blog-card')];
        const card = cards.find(n => n.querySelector(`a[href="${route}"]`));
        return {count:cards.length, position:cards.indexOf(card)+1, title:card.querySelector('h3').textContent.trim()};
      }, route);
      await page.click(`.blog-card h3 a[href="${route}"]`);
      await page.waitForFunction(route => location.pathname === route && document.querySelector('h1')?.textContent.includes('Healthcare'), {}, route);
      const article = await page.evaluate(() => ({title:document.title,titles:document.querySelectorAll('title').length,descriptions:document.querySelectorAll('meta[name="description"]').length,canonical:[...document.querySelectorAll('link[rel="canonical"]')].map(n=>n.href),h1:document.querySelectorAll('main h1').length,author:document.querySelector('main').textContent.includes('Mahnoor'),references:[...document.querySelectorAll('main a[href^="https:"]')].map(n=>n.href),internal:[...document.querySelectorAll('main a[href^="/"]')].map(n=>n.getAttribute('href')),schema:[...document.querySelectorAll('script[type="application/ld+json"]')].map(n=>JSON.parse(n.textContent)),overflow:document.documentElement.scrollWidth>innerWidth}));
      assert.equal(article.titles,1); assert.equal(article.descriptions,1); assert.equal(article.h1,1);
      assert.deepEqual(article.canonical,[`https://qllmsoft.com${route}`]); assert.ok(article.author);
      assert.ok(article.references.some(n=>n.includes('hhs.gov'))); assert.ok(article.references.some(n=>n.includes('hl7.org'))); assert.ok(article.references.some(n=>n.includes('nist.gov')));
      assert.ok(article.internal.includes('/healthcare-software-development-pakistan')); assert.ok(article.internal.includes('/api-development-services'));
      assert.equal(article.overflow,false);
      results.push({width,listing,article});
    }
    assert.deepEqual(errors,[]);
    fs.writeFileSync('seo-healthcare-post-validation.json',JSON.stringify({errors,results},null,2));
    console.log(JSON.stringify(results.map(({width,listing,article})=>({width,listing,title:article.title,overflow:article.overflow})),null,2));
  } finally { await browser.close(); server.close(); }
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
