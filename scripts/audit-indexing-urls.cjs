const fs = require('fs');
const { JSDOM } = require('jsdom');
const groups = {
  crawledNotIndexed: ['/hire-angular-developers-pakistan', '/projects/inventory-management-system', '/projects/logistics-fleet-management-system', '/legacy-system-modernization-services'],
  duplicate: ['/contact-us', '/digital-marketing-seo-services', '/custom-', '/search?q={search_term_string}', '/index', '/blog-post/legacy-system-modernization-cost-in-2026', '/blog-post/role-based-access-ecommerce-operations', '/outsource-web-development-to-pakistan', '/blog-post/pakistani-businesses-go-global-tech-strategy', '/blog-post/security-challenges-scalable-ecommerce-smbs'],
  redirect: ['/blog/outsource-software-development-to-pakistan', '/blog-post/custom-software-business-growth-2026', '/blog-post/why-custom-software-is-the-future', '/document-control-software', '/blog-post/legacy-system-modernization-vs-rebuilding', '/blog-post/top-5-tools-for-agile-teams', '/scalable-ecommerce-development-for-smbs', '/mobile-app-development-cost-in-pakistan', '/projects/sticker-smash-photo-editor-app', '/resources', '/website-development-cost-in-pakistan', '/best-software-house-in-pakistan', '/top-software-house-in-pakistan', '/blog-post/website-development-cost-in-pakistan', '/qllmdocs', '/blog/ai-powered-software-solutions', '/document-control-software?ref=producthunt', '/csharp-desktop-application-development', '/asp-net-core-development', '/blog-post/mobile-app-devsecops'],
};
async function inspect(group, route) {
  const result = { group, route, hops: [] };
  let url = `https://qllmsoft.com${route}`;
  try {
    for (let i = 0; i < 7; i++) {
      const response = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(20000) });
      const location = response.headers.get('location');
      result.hops.push({ url, status: response.status, location });
      if (response.status >= 300 && response.status < 400 && location) { url = new URL(location, url).href; await response.body.cancel(); continue; }
      const html = await response.text();
      const d = new JSDOM(html).window.document;
      result.finalUrl = url;
      result.title = d.title;
      result.canonicals = [...d.querySelectorAll('link[rel="canonical"]')].map(n => n.getAttribute('href'));
      result.robots = [...d.querySelectorAll('meta[name="robots"]')].map(n => n.content);
      result.xRobotsTag = response.headers.get('x-robots-tag');
      result.h1 = [...d.querySelectorAll('h1')].map(n => n.textContent.trim());
      result.bodyTextLength = d.body?.textContent.trim().length || 0;
      result.htmlBytes = Buffer.byteLength(html);
      result.wordpress = /wp-content|wp-includes/.test(html);
      result.reactShell = !!d.querySelector('#root') && !d.querySelector('#root')?.textContent.trim();
      break;
    }
  } catch (e) { result.error = e.message; }
  return result;
}
(async () => {
  const jobs = Object.entries(groups).flatMap(([group, routes]) => routes.map(route => [group, route]));
  const results = [];
  for (let i = 0; i < jobs.length; i += 4) {
    const batch = await Promise.all(jobs.slice(i, i + 4).map(args => inspect(...args)));
    results.push(...batch);
    for (const r of batch) console.log(JSON.stringify({ route: r.route, statuses: r.hops.map(h => h.status), final: r.finalUrl, canonical: r.canonicals, wordpress: r.wordpress, shell: r.reactShell, error: r.error }));
  }
  fs.writeFileSync('seo-indexing-live-audit.json', JSON.stringify({ checkedAt: new Date().toISOString(), note: 'Direct HTTP observations, not cached search results. HTML inspected without executing JavaScript.', results }, null, 2));
})().catch(e => { console.error(e); process.exitCode = 1; });
