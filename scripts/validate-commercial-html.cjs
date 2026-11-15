const fs=require('fs');
const {JSDOM}=require('jsdom');
const assert=require('assert/strict');
const routes=['/custom-school-management-software-development','/custom-software-development-services','/api-development-services'];
const paragraphs=new Map(),duplicates=[];
const results=routes.map(route=>{
  const d=new JSDOM(fs.readFileSync('build'+route+'/index.html','utf8')).window.document;
  const r={route,title:d.title,titles:d.querySelectorAll('title').length,descriptions:[...d.querySelectorAll('meta[name="description"]')].map(n=>n.content),canonicals:[...d.querySelectorAll('link[rel="canonical"]')].map(n=>n.href),h1:d.querySelectorAll('main h1').length,schemas:[...d.querySelectorAll('script[type="application/ld+json"]')].map(n=>JSON.parse(n.textContent)['@type']),words:d.querySelector('main').textContent.split(/\s+/).length};
  assert.equal(r.titles,1);assert.equal(r.descriptions.length,1);assert.equal(r.h1,1);assert.deepEqual(r.canonicals,['https://qllmsoft.com'+route]);assert.ok(r.schemas.includes('Service'));assert.ok(r.schemas.includes('WebPage'));assert.ok(r.words>600);
  for(const p of d.querySelectorAll('main p')){
    // Shared attributed reviews and contact copy are intentional; compare substantive body copy.
    if(p.closest('aside,blockquote')||p.className.includes('testimonial'))continue;
    const text=p.textContent.replace(/\s+/g,' ').trim();
    if(text.split(' ').length<35)continue;
    if(paragraphs.has(text)&&paragraphs.get(text)!==route)duplicates.push({routes:[paragraphs.get(text),route],text});else paragraphs.set(text,route);
  }
  return r;
});
assert.equal(new Set(results.map(r=>r.title)).size,3);
assert.equal(new Set(results.map(r=>r.descriptions[0])).size,3);
fs.writeFileSync('seo-commercial-html-validation.json',JSON.stringify({results,sharedLongParagraphs:duplicates},null,2));
console.log(JSON.stringify({results,sharedLongParagraphCount:duplicates.length},null,2));
