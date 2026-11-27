import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { render, routes } from "../dist/ssr/entry-server.js";
const root="dist/public", origin="https://studio.puphr.com";
const template=await readFile(join(root,"index.html"),"utf8");
const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
const pages=routes.filter(r=>r.path!=="/contact");
// Directory index pages are served with trailing slashes by Netlify.
const publicPath=path=>path.replace(/\/+$/, "")+"/";
function html(route,notFound=false) {
  const canonical=origin+publicPath(route.path);
  const meta='<meta name="description" content="'+esc(route.description)+'">\n'+
    '<meta property="og:title" content="'+esc(route.title)+'">\n'+
    '<meta property="og:description" content="'+esc(route.description)+'">\n'+
    '<meta property="og:type" content="website">\n'+
    '<meta property="og:url" content="'+esc(canonical)+'">\n'+
    '<meta name="twitter:card" content="summary">\n'+
    (notFound?'<meta name="robots" content="noindex">':'<link rel="canonical" href="'+esc(canonical)+'">');
  const schema=JSON.stringify({"@context":"https://schema.org","@type":"WebPage",name:route.title,description:route.description,url:canonical,isPartOf:{"@type":"WebSite",name:"Puphr Studio",url:origin},publisher:{"@type":"Organization",name:"Puphr LLC",url:"https://puphr.com/"}}).replaceAll("<","\\u003c");
  const markup=render(route.path);
  if(!markup.includes("<h1"))throw new Error("Missing heading: "+route.path);
  return template.replace(/<title>[^]*?<\/title>/,'<title>'+esc(route.title)+'</title>')
    .replace(/<meta name="description"[^>]*>/,meta)
    .replace("</head>",'<script type="application/ld+json">'+schema+'</script>\n</head>')
    .replace('<div id="root"></div>',()=>'<div id="root">'+markup+'</div>');
}
for(const route of pages){
  const dir=join(root,route.path.slice(1));await mkdir(dir,{recursive:true});
  await writeFile(join(dir,"index.html"),html(route));
}
await writeFile(join(root,"404.html"),html({path:"/404",title:"Page not found | Puphr Studio",description:"Find your way back to Puphr Studio."},true));
await writeFile(join(root,"sitemap.xml"),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+pages.map(r=>'<url><loc>'+esc(origin+publicPath(r.path))+'</loc></url>').join("")+'</urlset>');
await writeFile(join(root,"robots.txt"),"User-agent: *\nAllow: /\nSitemap: "+origin+"/sitemap.xml\n");
console.log("Pre-rendered "+pages.length+" pages and a 404 page");
