// Inspect saved HTML without executing JavaScript.
const fs = require('fs');
const path = require('path');
const assert = require('assert/strict');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');
const routes = ['/', '/custom-software-development-services', '/api-development-services', '/web-application-development-services', '/website-development-services', '/mobile-app-development', '/ecommerce-development-services'];
const results = routes.map(route => {
  const file = path.join(root, 'build', route, 'index.html');
  const document = new JSDOM(fs.readFileSync(file, 'utf8')).window.document;
  const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].map(n => JSON.parse(n.textContent));
  const result = {
    route,
    titles: [...document.querySelectorAll('title')].map(n => n.textContent),
    descriptions: [...document.querySelectorAll('meta[name="description"]')].map(n => n.content),
    canonicals: [...document.querySelectorAll('link[rel="canonical"]')].map(n => n.href),
    h1: [...document.querySelectorAll('main h1')].map(n => n.textContent.trim()),
    schemaTypes: schemas.map(n => n['@type']),
    faqMicrodata: document.querySelectorAll('[itemtype="https://schema.org/FAQPage"]').length,
    // Whitespace-normalized body text must contain meaningful commercial content.
    textLength: document.querySelector('main')?.textContent.replace(/\s+/g, ' ').trim().length || 0,
  };
  assert.equal(result.titles.length, 1, `${route}: title count`);
  assert.equal(result.descriptions.length, 1, `${route}: description count`);
  assert.deepEqual(result.canonicals, [`https://qllmsoft.com${route}`]);
  assert.equal(result.h1.length, 1, `${route}: H1 count`);
  assert.ok(result.h1[0].length > 10, `${route}: meaningful H1`);
  assert.ok(result.textLength > 1000, `${route}: meaningful HTML`);
  assert.equal(result.schemaTypes.filter(n => n === 'FAQPage').length, 1, `${route}: FAQ JSON-LD count`);
  assert.equal(result.faqMicrodata, 0, `${route}: duplicate FAQ representation`);
  assert.ok(result.schemaTypes.includes('Service'), `${route}: Service schema`);
  assert.ok(result.schemaTypes.includes('WebPage'), `${route}: WebPage schema`);
  assert.ok(document.querySelector('meta[charset]'), `${route}: charset retained`);
  assert.ok(document.querySelector('link[rel="stylesheet"]'), `${route}: styles retained`);
  const ids = schemas.map(n => n['@id']).filter(Boolean);
  assert.equal(new Set(ids).size, ids.length, `${route}: duplicate JSON-LD entity IDs`);
  if (route === '/') assert.equal(document.querySelector('main h1').dataset.prerenderReady, 'true', 'Homepage heading animation must finish before capture');
  return result;
});
fs.writeFileSync(path.join(root, 'seo-prerender-validation.json'), JSON.stringify({ javascriptExecuted: false, results }, null, 2));
console.log(`Passed static HTML checks for ${results.length} routes.`);
