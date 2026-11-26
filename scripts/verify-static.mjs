import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { join } from "node:path";
import { routes } from "../dist/ssr/entry-server.js";
const root="dist/public", paths=new Set(routes.map(r=>r.path));
const sitemap=await readFile(join(root,"sitemap.xml"),"utf8");
for(const route of routes.filter(r=>r.path!=="/contact")){
  const html=await readFile(join(root,route.path.slice(1),"index.html"),"utf8");
  assert.match(html,/<h1\b/,"Missing rendered heading: "+route.path);
  assert.ok(html.includes('rel="canonical" href="https://studio.puphr.com'+route.path+'"'),"Missing canonical: "+route.path);
  assert.ok(sitemap.includes("<loc>https://studio.puphr.com"+route.path+"</loc>"),"Missing sitemap entry: "+route.path);
  for(const [,href] of html.matchAll(/href="(\/[a-z][^"#?]*)"/g)){
    if(href.startsWith("//")||href.startsWith("/assets/")||href.includes("."))continue;
    assert.ok(paths.has(href.replace(/\/$/,"")),"Unknown internal route "+href+" on "+route.path);
  }
  for(const [,asset] of html.matchAll(/(?:src|href)="(\/assets\/[^"#?]+)"/g)){
    await access(join(root,asset.slice(1)));
  }
}
const riveAsset=await readFile(join(root,"media/products/usmos-hero-orbits.riv"));
assert.equal(riveAsset.subarray(0,4).toString("ascii"),"RIVE","Missing genuine Usmos Rive binary");
const home=await readFile(join(root,"index.html"),"utf8");
assert.ok(home.includes("Rive") && home.includes("Usmos"),"Missing motion showcase");
const notFound=await readFile(join(root,"404.html"),"utf8");
assert.ok(notFound.includes('name="robots" content="noindex"'));
console.log("Verified "+(routes.length-1)+" static routes, metadata, internal links, and referenced local assets.");
