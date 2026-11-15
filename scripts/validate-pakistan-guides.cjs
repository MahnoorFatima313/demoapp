const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..', 'build');
const routes = ['school-fee-reconciliation-software-pakistan','biometric-attendance-payroll-integration-pakistan','excel-to-inventory-software-migration-pakistan'].map(s=>'/blog/'+s);
const out = path.join(root,'pakistan-guides-validation');
fs.mkdirSync(out,{recursive:true});
const server = http.createServer((req,res)=>{
  let file = path.resolve(root, '.'+new URL(req.url,'http://localhost').pathname);
  if (!file.startsWith(root+path.sep)) file = path.join(root,'index.html');
  if (fs.existsSync(file)&&fs.statSync(file).isDirectory()) file=path.join(file,'index.html');
  if (!fs.existsSync(file)) file=path.join(root,'index.html');
  res.setHeader('Content-Type',({'.js':'application/javascript','.css':'text/css','.html':'text/html','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.png':'image/png'})[path.extname(file)]||'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
(async()=>{
  const {default:puppeteer}=await import('puppeteer-core');
  await new Promise(r=>server.listen(0,'127.0.0.1',r));
  const browser=await puppeteer.launch({executablePath:'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',headless:true});
  const results=[],errors=[],destinations=[],inbound=[];
  try {
    const page=await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request',r=>r.url().startsWith('http://127.0.0.1:')||r.url().startsWith('data:')?r.continue():r.resourceType()==='stylesheet'?r.respond({status:200,contentType:'text/css',body:''}):r.abort());
    page.on('pageerror',e=>errors.push(e.message));
    const origin=`http://127.0.0.1:${server.address().port}`;
    await page.goto(origin+'/blog',{waitUntil:'domcontentloaded'});
    for(const route of routes) await page.waitForSelector(`.blog-card a[href="${route}"]`);
    const allLinks=new Set();
    for(const route of routes) for(const width of [1440,768,390]) {
      await page.setViewport({width,height:900});
      await page.goto(origin+route,{waitUntil:'domcontentloaded'});
      await page.waitForSelector('.blog-article-main h2');
      const result=await page.evaluate(()=>({
        title:document.title,titles:document.querySelectorAll('title').length,
        descriptions:[...document.querySelectorAll('meta[name="description"]')].map(n=>n.content),
        canonical:[...document.querySelectorAll('link[rel="canonical"]')].map(n=>n.href),
        h1:[...document.querySelectorAll('main h1')].map(n=>n.textContent.trim()),
        text:document.querySelector('.blog-article-main').textContent,
        links:[...document.querySelectorAll('.blog-article-main a[href]')].map(n=>({href:n.getAttribute('href'),anchor:n.textContent.trim()})),
        schema:[...document.querySelectorAll('script[type="application/ld+json"]')].map(n=>JSON.parse(n.textContent)),
        overflow:document.documentElement.scrollWidth>innerWidth,
        duplicateIds:[...document.querySelectorAll('[id]')].map(n=>n.id).filter((id,i,ids)=>ids.indexOf(id)!==i),
      }));
      assert.equal(result.titles,1);assert.equal(result.descriptions.length,1);assert.equal(result.h1.length,1);
      assert.deepEqual(result.canonical,['https://qllmsoft.com'+route]);assert.equal(result.overflow,false);assert.deepEqual(result.duplicateIds,[]);
      const article=result.schema.find(n=>n['@type']==='Article');
      assert.ok(article);assert.equal(article.mainEntityOfPage['@id'],'https://qllmsoft.com'+route);assert.ok(article.image.every(n=>n.startsWith('https://qllmsoft.com/')));
      assert.ok(result.links.filter(n=>n.href.startsWith('https://')).length>=2);
      result.links.filter(n=>n.href.startsWith('/')).forEach(n=>allLinks.add(n.href));
      result.words=result.text.split(/\s+/).length;assert.ok(result.words>600);
      if(width!==768) await page.screenshot({path:path.join(out,route.split('/').pop()+'-'+width+'.png'),fullPage:true});
      delete result.text;results.push({route,width,...result});
    }
    for(const route of allLinks) {
      await page.goto(origin+route,{waitUntil:'domcontentloaded'});
      await page.waitForFunction(route=>location.pathname===route&&document.querySelector('link[rel="canonical"]')?.href==='https://qllmsoft.com'+route,{},route);
      destinations.push(route);
    }
    for(const [source,target] of [
      ['/custom-software-development-services',routes[2]],['/api-development-services',routes[1]],['/education-software-development-pakistan',routes[0]],
      ['/projects/inventory-management-system',routes[2]],['/projects/biometric-attendance-management-system',routes[1]],
    ]) {
      await page.goto(origin+source,{waitUntil:'domcontentloaded'});
      await page.waitForSelector(`a[href="${target}"]`);inbound.push({source,target});
    }
    const sitemap=fs.readFileSync('public/sitemap.xml','utf8');
    const staticHtml=[];
    for(const route of routes) {
      assert.equal(sitemap.split(`<loc>https://qllmsoft.com${route}</loc>`).length-1,1);
      assert.ok(require('../package.json').reactSnap.include.includes(route));
      const d=new JSDOM(fs.readFileSync(path.join(root,route,'index.html'),'utf8')).window.document;
      assert.equal(d.querySelectorAll('h1').length,1);assert.equal(d.querySelector('link[rel="canonical"]').href,'https://qllmsoft.com'+route);
      assert.ok(d.querySelector('.blog-article-main').textContent.length>3500);staticHtml.push(route);
    }
    assert.deepEqual(errors,[]);
    fs.writeFileSync('seo-pakistan-guides-validation.json',JSON.stringify({errors,results,destinations,inbound,staticHtml},null,2));
    console.log(JSON.stringify({checks:results.length,errors,destinations:destinations.length,inbound:inbound.length,staticHtml,wordCounts:results.filter(n=>n.width===1440).map(n=>({route:n.route,words:n.words}))},null,2));
  } finally {await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
