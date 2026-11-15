const fs = require('fs');
const assert = require('assert/strict');
const { JSDOM } = require('jsdom');
const routes = ['/hire-angular-developers-pakistan', '/legacy-system-modernization-services', '/projects/inventory-management-system', '/projects/logistics-fleet-management-system'];
const results = routes.map(route => {
  const d = new JSDOM(fs.readFileSync(`build${route}/index.html`, 'utf8')).window.document;
  const result = { route, titles: d.querySelectorAll('title').length, descriptions: d.querySelectorAll('meta[name="description"]').length, canonicals: [...d.querySelectorAll('link[rel="canonical"]')].map(n => n.href), h1: d.querySelectorAll('main h1').length, textLength: d.querySelector('main').textContent.length };
  assert.equal(result.titles, 1); assert.equal(result.descriptions, 1); assert.equal(result.h1, 1);
  assert.deepEqual(result.canonicals, [`https://qllmsoft.com${route}`]); assert.ok(result.textLength > 1500);
  assert.ok(fs.readFileSync('public/sitemap.xml', 'utf8').includes(`https://qllmsoft.com${route}</loc>`));
  return result;
});
const xml = new JSDOM(fs.readFileSync('seo-proposed-iis-rules.xml', 'utf8'), { contentType: 'text/xml' }).window.document;
const active = new JSDOM(fs.readFileSync('public/web.config', 'utf8'), { contentType: 'text/xml' }).window.document;
assert.equal(active.querySelectorAll('parsererror').length, 0);
const activeRules = [...active.querySelectorAll('rewrite > rules > rule')];
for (const rule of xml.querySelectorAll('rule')) {
  const applied = activeRules.filter(n => n.getAttribute('name') === rule.getAttribute('name'));
  assert.equal(applied.length, 1);
  assert.equal(applied[0].querySelector('match').getAttribute('url'), rule.querySelector('match').getAttribute('url'));
  assert.equal(applied[0].querySelector('action').outerHTML, rule.querySelector('action').outerHTML);
}
assert.ok(activeRules.findIndex(n => n.getAttribute('name') === 'Alias contact-us to contact') > activeRules.findIndex(n => n.getAttribute('name') === 'Canonical HTTPS and Non-WWW'));
const approvedRules = [...xml.querySelectorAll('rule')];
for (const [input, expected] of [['contact-us', 'https://qllmsoft.com/contact'], ['digital-marketing-seo-services/', 'https://qllmsoft.com/digital-marketing-services'], ['index', 'https://qllmsoft.com/'], ['qllmdocs/', 'https://qllmsoft.com/ai-document-management-software'], ['custom-', '404'], ['search?q={search_term_string}', '404']]) {
  const matches = approvedRules.filter(n => new RegExp(n.querySelector('match').getAttribute('url')).test(input.split('?')[0]));
  assert.equal(matches.length, 1);
  const action = matches[0].querySelector('action');
  assert.equal(action.getAttribute('url') || action.getAttribute('statusCode'), expected);
}
assert.equal(xml.querySelectorAll('parsererror').length, 0);
assert.equal(xml.querySelectorAll('rule').length, 6);
for (const match of xml.querySelectorAll('match')) {
  const regex = new RegExp(match.getAttribute('url'));
  assert.equal(regex.test('custom-software-development-services'), false);
  assert.equal(regex.test('contact'), false);
}
fs.writeFileSync('seo-indexing-prerender-validation.json', JSON.stringify({ results, proposedXmlParsed: true }, null, 2));
console.log(JSON.stringify(results, null, 2));
