// Read-only source audit. Run: node scripts/audit-seo.cjs
// Uses the project's existing Babel parser; never regenerates the sitemap.
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const parse = file => parser.parse(read(file), { sourceType: 'module', plugins: ['jsx'] });
const key = node => node?.name || node?.value;
let bindings = new Map();
function useBindings(ast) {
  bindings = new Map();
  traverse(ast, { VariableDeclarator(p) {
    if (p.node.id.type === 'Identifier' && ['StringLiteral', 'TemplateLiteral'].includes(p.node.init?.type)) bindings.set(p.node.id.name, p.node.init);
  } });
}
const text = node => {
  if (!node) return '';
  if (node.type === 'StringLiteral' || node.type === 'JSXText') return node.value;
  if (node.type === 'Identifier') return bindings.has(node.name) ? text(bindings.get(node.name)) : '{expression}';
  if (['MemberExpression', 'CallExpression', 'LogicalExpression', 'ConditionalExpression', 'BinaryExpression'].includes(node.type)) return '{expression}';
  if (node.type === 'TemplateLiteral') return node.quasis.map((x, i) => x.value.cooked + (node.expressions[i] ? text(node.expressions[i]) : '')).join('');
  if (node.type === 'JSXExpressionContainer') return text(node.expression);
  return (node.children || []).map(text).join(' ');
};
const clean = value => value.replace(/\s+/g, ' ').trim();
function variable(ast, name) {
  let value;
  traverse(ast, { VariableDeclarator(p) { if (p.node.id.name === name) value = p.node.init; } });
  return value;
}
function property(node, name) {
  return node?.properties?.find(p => key(p.key) === name)?.value;
}
function classify(route) {
  if (route === '/') return 'Homepage';
  if (/^\/blog\//.test(route)) return 'Informational blog article';
  if (/document-management/.test(route)) return 'Product page';
  if (/healthcare|education|real-estate|finance-management|school-management/.test(route)) return 'Industry-specific landing page';
  if (/hire-|outsource-/.test(route)) return 'Supporting commercial landing page';
  if (/asp-net|wordpress/.test(route)) return 'Technology-specific landing page';
  if (/development|modernization|ai-powered|automation|digital-marketing/.test(route)) return 'Core commercial service page';
  return 'Utility or legal page';
}
const app = read('src/App.js');
const imports = new Map();
for (const m of app.matchAll(/import\s+(\w+)\s+from\s+["'](.+?)["']/g)) imports.set(m[1], m[2]);
for (const m of app.matchAll(/const\s+(\w+)\s*=\s*lazy\([\s\S]*?import\(["'](.+?)["']\)/g)) imports.set(m[1], m[2]);
const routes = [];
traverse(parse('src/App.js'), { JSXElement(p) {
  const opening = p.node.openingElement;
  if (opening.name.name !== 'Route') return;
  const route = opening.attributes.find(a => a.name?.name === 'path')?.value?.value;
  if (!route) return;
  const element = opening.attributes.find(a => a.name?.name === 'element');
  const children = [];
  const visit = node => {
    if (!node || typeof node !== 'object') return;
    if (node.type === 'JSXOpeningElement') children.push(node);
    for (const [k, v] of Object.entries(node)) {
      if (['loc', 'start', 'end'].includes(k)) continue;
      if (Array.isArray(v)) v.forEach(visit);
      else if (v && typeof v === 'object') visit(v);
    }
  };
  visit(element?.value?.expression);
  const redirect = children.find(n => n.name.name === 'Navigate');
  const component = children.map(n => n.name.name).find(n => imports.has(n));
  const imported = imports.get(component);
  let file = imported ? path.posix.normalize('src/' + imported) : null;
  if (file && !path.extname(file)) file += fs.existsSync(path.join(root, file + '.jsx')) ? '.jsx' : '.js';
  const entry = { route, classification: redirect ? 'Redirected or retired URL' : classify(route), component, file };
  if (redirect) entry.redirectTarget = redirect.attributes.find(a => a.name?.name === 'to')?.value?.value;
  if (file) {
    const ast = parse(file);
    useBindings(ast);
    entry.title = ''; entry.description = ''; entry.h1 = []; entry.internalLinks = [];
    entry.canonical = clean(text(variable(ast, 'PAGE_URL')));
    const ids = [];
    traverse(ast, { JSXElement(q) {
      const node = q.node, name = node.openingElement.name.name;
      const attrs = Object.fromEntries(node.openingElement.attributes.filter(a => a.type === 'JSXAttribute').map(a => [a.name.name, clean(text(a.value))]));
      if (name === 'title') entry.title = clean(text(node));
      if (name === 'h1') entry.h1.push(clean(text(node)));
      if (name === 'meta' && attrs.name === 'description') entry.description = attrs.content;
      if (name === 'SEO') { entry.title = attrs.title; entry.description = attrs.description; entry.canonical ||= attrs.url; }
      if (name === 'Link' && attrs.to?.startsWith('/')) entry.internalLinks.push({ destination: attrs.to, anchor: clean(text(node)) });
      if (name === 'link' && attrs.rel === 'canonical') entry.canonical ||= attrs.href;
      if (attrs.id) ids.push(attrs.id);
    } });
    entry.duplicateIds = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
    entry.sourceWords = read(file).split(/\s+/).length; // Source-size indicator, not visible word count.
  }
  routes.push(entry);
} });
const blogAst = parse('src/data/blogPostsData.js');
useBindings(blogAst);
const posts = variable(blogAst, 'blogPostsData').properties.map(p => ({
  slug: key(p.key), route: '/blog/' + key(p.key), classification: 'Informational blog article',
  title: clean(text(property(p.value, 'seoTitle') || property(p.value, 'title'))),
  description: clean(text(property(p.value, 'description'))),
  canonicalSource: clean(text(property(p.value, 'canonicalUrl'))),
  category: clean(text(property(p.value, 'category'))),
  author: clean(text(property(p.value, 'author'))),
  date: clean(text(property(p.value, 'date'))),
}));
const sitemap = [...read('public/sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1]).pathname);
const include = JSON.parse(read('package.json')).reactSnap.include;
const rules = [...read('public/web.config').replace(/<!--[\s\S]*?-->/g, '').matchAll(/<rule\b[\s\S]*?<\/rule>/g)].map(m => ({
  name: m[0].match(/name="([^"]+)"/)?.[1], pattern: m[0].match(/<match\s+url="([^"]+)"/)?.[1],
  action: m[0].match(/<action[\s\S]*?type="([^"]+)"/)?.[1],
  target: m[0].match(/<action[\s\S]*?url="([^"]+)"/)?.[1],
  status: m[0].match(/statusCode="([^"]+)"/)?.[1],
}));
const redirectRules = rules.filter(r => r.action === 'Redirect' && !/Canonical|Trailing|Extension/.test(r.name));
const redirects = route => redirectRules.find(r => new RegExp(r.pattern).test(route.replace(/^\//, '')));
const valid = new Set([...routes.filter(r => !r.route.includes(':')).map(r => r.route), ...posts.map(p => p.route)]);
const links = routes.flatMap(r => (r.internalLinks || []).map(l => ({ source: r.route, ...l })));
const readings = variable(parse('src/components/RelatedReading.jsx'), 'RELATED_READING').properties.flatMap(p => p.value.elements.map(e => ({ source: key(p.key), destination: '/blog/' + text(property(e, 'slug')), anchor: text(property(e, 'anchor')) })));
const report = {
  generatedDate: '2026-11-14', scope: 'Local source audit; HTTP status, rankings, and visible content depth require separate checks.',
  routes, posts, iisRules: rules,
  counts: { routes: routes.length, articles: posts.length, sitemap: sitemap.length, explicitPrerender: include.length },
  missingInternalDestinations: [...links, ...readings].filter(l => !l.destination.includes('{expression}') && !valid.has(l.destination) && !redirects(l.destination)),
  internalRedirects: [...links, ...readings].filter(l => redirects(l.destination)).map(l => ({ ...l, rule: redirects(l.destination).name })),
  sitemapMissingSource: sitemap.filter(r => !valid.has(r)),
  sitemapRedirectSources: sitemap.filter(r => redirects(r)),
  articlesMissingExplicitPrerender: posts.filter(p => !redirects(p.route) && !include.includes(p.route)).map(p => p.route),
  articlesMissingSitemap: posts.filter(p => !redirects(p.route) && !sitemap.includes(p.route)).map(p => p.route),
  warnings: ['Source metadata containing expressions is not resolved. Inspect rendered HTML.', 'react-snap crawling may discover routes beyond the explicit include list; absence is a coverage risk, not proof of omission.'],
};
console.log(JSON.stringify(report, null, 2));
