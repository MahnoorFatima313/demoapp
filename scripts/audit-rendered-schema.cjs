const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const root = path.resolve(__dirname, '..', 'build');
const files = [];
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.toLowerCase() === 'index.html') files.push(full);
  }
}
walk(root);

const report = { pages: files.length, parseErrors: [], reviewObjects: [], aggregateRatingObjects: [], microdataReviewPages: [], duplicateCanonicalPages: [], metadataIssues: [], typeCounts: {} };
const visit = (value, file, parentType = null) => {
  if (Array.isArray(value)) return value.forEach(v => visit(v, file, parentType));
  if (!value || typeof value !== 'object') return;
  const type = value['@type'];
  const types = Array.isArray(type) ? type : [type];
  types.filter(Boolean).forEach(t => { report.typeCounts[t] = (report.typeCounts[t] || 0) + 1; });
  if (types.includes('Review')) {
    if (!value.itemReviewed || !value.author || !value.reviewRating) report.reviewObjects.push({ file, missing: ['itemReviewed','author','reviewRating'].filter(k => !value[k]) });
  }
  if (types.includes('AggregateRating') && !value.itemReviewed && !parentType) report.aggregateRatingObjects.push({ file, reason: 'missing itemReviewed' });
  for (const [key, child] of Object.entries(value)) visit(child, file, types[0] || parentType);
};

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(root, file).replace(/\\/g, '/');
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const canonicals = doc.querySelectorAll('link[rel="canonical"]');
  if (canonicals.length > 1) report.duplicateCanonicalPages.push(rel);
  if (doc.querySelectorAll('title').length !== 1 || doc.querySelectorAll('meta[name="description"]').length !== 1) report.metadataIssues.push(rel);
  if (/schema\.org\/Review/i.test(html) || doc.querySelector('[itemtype*="Review" i]')) report.microdataReviewPages.push(rel);
  for (const script of doc.querySelectorAll('script[type="application/ld+json"]')) {
    try { visit(JSON.parse(script.textContent), rel); }
    catch (error) { report.parseErrors.push({ file: rel, error: error.message }); }
  }
}
fs.writeFileSync(path.resolve(__dirname, '..', 'seo-schema-audit.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ pages: report.pages, parseErrors: report.parseErrors.length, reviewObjects: report.reviewObjects.length, aggregateRatingObjects: report.aggregateRatingObjects.length, microdataReviewPages: report.microdataReviewPages.length, duplicateCanonicalPages: report.duplicateCanonicalPages.length, metadataIssues: report.metadataIssues.length, typeCounts: report.typeCounts }, null, 2));
process.exitCode = report.parseErrors.length || report.reviewObjects.length || report.aggregateRatingObjects.length || report.microdataReviewPages.length ? 1 : 0;
