import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { join } from "node:path";
import { routes } from "../dist/ssr/entry-server.js";
const root="dist/public", origin="https://studio.puphr.com";
const pages=routes.filter(r=>r.path!=="/contact");
const publicPath=path=>path.replace(/\/+$/, "")+"/";
const paths=new Set(pages.map(r=>publicPath(r.path)));
const sitemap=await readFile(join(root,"sitemap.xml"),"utf8");
const expectedUrls=pages.map(r=>origin+publicPath(r.path));
assert.deepEqual([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]),expectedUrls,"Sitemap URLs must exactly match public directory URLs");
for(const route of pages){
  const html=await readFile(join(root,route.path.slice(1),"index.html"),"utf8");
  assert.match(html,/<h1\b/,"Missing rendered heading: "+route.path);
  const canonical=origin+publicPath(route.path);
  assert.deepEqual([...html.matchAll(/<link rel="canonical" href="([^"]+)">/g)].map(m=>m[1]),[canonical],"Incorrect canonical: "+route.path);
  assert.ok(html.includes('<meta property="og:url" content="'+canonical+'">'),"Incorrect Open Graph URL: "+route.path);
  const schema=JSON.parse(html.match(/<script type="application\/ld\+json">([^]*?)<\/script>/)[1]);
  assert.equal(schema.url,canonical,"Incorrect JSON-LD URL: "+route.path);
  for(const [,href] of html.matchAll(/<a\b[^>]*\bhref="(\/[^"]*)"/g)){
    if(href.startsWith("//"))continue;
    const pathname=href.split(/[?#]/,1)[0];
    if(pathname.startsWith("/assets/")||pathname.startsWith("/media/")||pathname.includes("."))continue;
    assert.ok(paths.has(pathname),"Noncanonical or unknown internal route "+href+" on "+route.path);
  }
  for(const [,asset] of html.matchAll(/(?:src|href)="(\/assets\/[^"#?]+)"/g)){
    await access(join(root,asset.slice(1)));
  }
}
const riveAsset=await readFile(join(root,"media/products/usmos-hero-orbits.riv"));
assert.equal(riveAsset.subarray(0,4).toString("ascii"),"RIVE","Missing genuine Usmos Rive binary");
const home=await readFile(join(root,"index.html"),"utf8");
assert.ok(home.includes("data-usmos-rive-card") && home.includes("Interactive Rive experience"),"Missing Usmos card motion showcase");
assert.equal((home.match(/data-usmos-rive-card/g)||[]).length,1,"Expected one homepage Rive showcase");
const notFound=await readFile(join(root,"404.html"),"utf8");
assert.ok(notFound.includes('name="robots" content="noindex"'));
console.log("Verified "+(routes.length-1)+" static routes, metadata, internal links, and referenced local assets.");
