import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowRight, Boxes, Cpu, FlaskConical, Smartphone, Monitor, Workflow, ShieldCheck, Menu, X, ChevronDown, BriefcaseBusiness, BookOpen, Compass } from "lucide-react";
import { featuredProducts, labProducts, productPath, type Product } from "./products";
import ParallaxBackground from "./components/ParallaxBackground";

const button = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:border-primary/60 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary";
const primary = button + " !border-primary/50 !bg-primary !text-primary-foreground";
const panel = "rounded-[1.5rem] border border-white/10 bg-card/85 p-6 sm:p-8";
const nav = [["Services","/services"],["Client work","/work"],["Products","/products"],["Labs","/labs"],["Technology","/technology"],["Insights","/insights"]];
const studioLinks = [
  {name:"Puphr Labs",href:"/labs",description:"Experiments and emerging products",icon:FlaskConical},
  {name:"Technology",href:"/technology",description:"Engineering, infrastructure and growth",icon:Cpu},
  {name:"Insights",href:"/insights",description:"Product stories and useful resources",icon:BookOpen},
  {name:"About Studio",href:"/about",description:"Our approach and the company behind it",icon:Compass},
];
const primaryLinks = [
  {name:"Services",href:"/services",description:"Websites, software and growth systems",icon:Workflow},
  {name:"Our work",href:"/work",description:"Client projects and case studies",icon:BriefcaseBusiness},
  {name:"Products",href:"/products",description:"Independent apps and companion sites",icon:Smartphone},
];
export function StudioNav({path="/"}:{path?:string}) {
  const [open,setOpen]=useState<"studio"|"mobile"|null>(null);
  const headerRef=useRef<HTMLElement>(null);
  const studioTrigger=useRef<HTMLButtonElement>(null);
  const mobileTrigger=useRef<HTMLButtonElement>(null);
  const active=(href:string)=>path===href||path.startsWith(href+"/");
  const studioActive=studioLinks.some(item=>active(item.href));
  useEffect(()=>{
    if(!open)return;
    const onOutside=(event:PointerEvent)=>{if(event.target instanceof Node&&!headerRef.current?.contains(event.target))setOpen(null);};
    const onEscape=(event:KeyboardEvent)=>{if(event.key==="Escape"){setOpen(null);(open==="studio"?studioTrigger:mobileTrigger).current?.focus();}};
    const desktop=window.matchMedia("(min-width: 1024px)");
    const onResize=()=>setOpen(null);
    document.addEventListener("pointerdown",onOutside);
    document.addEventListener("keydown",onEscape);
    desktop.addEventListener("change",onResize);
    return()=>{document.removeEventListener("pointerdown",onOutside);document.removeEventListener("keydown",onEscape);desktop.removeEventListener("change",onResize);};
  },[open]);
  const navLink="relative inline-flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl px-4 text-sm font-semibold transition-colors hover:bg-white/5 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  const action="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:px-5";
  const currentClass=(on:boolean)=>on?"bg-primary/10 text-primary":"text-foreground/75";
  return <header ref={headerRef} className="relative z-50 mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">
    <div className="relative rounded-2xl border border-white/10 bg-background/95 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
      <div className="flex min-h-[72px] items-center justify-between gap-3 px-3 sm:px-5 lg:gap-5">
        <a href="/" aria-label="Puphr Studio home" className="flex min-w-0 shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
          <img src="/puphr_logo.svg" className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11" alt="" width={44} height={44}/>
          <span className="flex flex-col leading-none"><span className="text-lg font-bold tracking-tight text-foreground sm:text-xl">Puphr<span className="ml-1.5 font-normal text-foreground/85">Studio</span></span><span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[.17em] text-foreground/50 sm:block">Design &amp; engineering</span></span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {primaryLinks.map(({name,href})=><a key={href} href={href} aria-current={active(href)?"page":undefined} className={navLink+" "+currentClass(active(href))}>{name}</a>)}
          <div className="relative">
            <button type="button" ref={studioTrigger} aria-expanded={open==="studio"} aria-controls="studio-navigation-dropdown" className={navLink+" "+currentClass(studioActive||open==="studio")} onClick={()=>setOpen(open==="studio"?null:"studio")}>Explore Studio <ChevronDown size={15} aria-hidden="true" className={"transition-transform motion-reduce:transition-none "+(open==="studio"?"rotate-180":"")}/></button>
            <div id="studio-navigation-dropdown" hidden={open!=="studio"} className="absolute right-0 top-full mt-3 w-[330px] rounded-2xl border border-white/15 bg-background p-2 shadow-2xl">
              <p className="px-3 pb-2 pt-3 text-[10px] font-bold uppercase tracking-[.2em] text-foreground/50">Inside Puphr Studio</p>
              {studioLinks.map(({name,href,description,icon:Icon})=><a key={href} href={href} aria-current={active(href)?"page":undefined} className={"group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary "+currentClass(active(href))}><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/5 text-primary"><Icon size={18} aria-hidden="true"/></span><span className="min-w-0 flex-1"><span className="block text-sm font-bold text-foreground">{name}</span><span className="mt-0.5 block text-xs leading-5 text-foreground/60">{description}</span></span><ArrowUpRight size={15} aria-hidden="true" className="text-foreground/40 group-hover:text-primary"/></a>)}
            </div>
          </div>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href="/#contact" className={action+" hidden sm:inline-flex"}>Start a project <ArrowUpRight size={16} aria-hidden="true"/></a>
          <button type="button" ref={mobileTrigger} aria-expanded={open==="mobile"} aria-controls="studio-mobile-navigation" aria-label={open==="mobile"?"Close navigation":"Open navigation"} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-foreground transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary lg:hidden" onClick={()=>setOpen(open==="mobile"?null:"mobile")}>{open==="mobile"?<X size={23} aria-hidden="true"/>:<Menu size={23} aria-hidden="true"/>}</button>
        </div>
      </div>
      <div id="studio-mobile-navigation" hidden={open!=="mobile"} className="border-t border-white/10 p-3 lg:hidden">
        <nav aria-label="Mobile navigation" className="max-h-[min(70vh,560px)] overflow-y-auto">
          <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[.2em] text-foreground/50">Find what you need</p>
          {primaryLinks.map(({name,href,description,icon:Icon})=><a key={href} href={href} aria-current={active(href)?"page":undefined} onClick={()=>setOpen(null)} className={"flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/5 "+currentClass(active(href))}><Icon size={20} className="shrink-0 text-primary" aria-hidden="true"/><span className="flex-1"><span className="block font-bold text-foreground">{name}</span><span className="block text-xs text-foreground/60">{description}</span></span><ArrowRight size={16} aria-hidden="true"/></a>)}
          <div className="my-2 border-t border-white/10"/>
          <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[.2em] text-foreground/50">Explore Studio</p>
          <div className="grid gap-1 min-[420px]:grid-cols-2">{studioLinks.map(({name,href,icon:Icon})=><a key={href} href={href} aria-current={active(href)?"page":undefined} onClick={()=>setOpen(null)} className={"flex min-h-11 items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold hover:bg-white/5 "+currentClass(active(href))}><Icon size={18} className="shrink-0 text-primary" aria-hidden="true"/>{name}</a>)}</div>
          <a href="/#contact" onClick={()=>setOpen(null)} className={action+" mt-4 flex w-full"}>Start a project <ArrowUpRight size={16} aria-hidden="true"/></a>
        </nav>
      </div>
    </div>
  </header>;
}
export function StudioFooter(){
  return <footer className="relative z-10 mx-auto mt-20 max-w-7xl border-t border-white/10 px-6 py-10"><div className="flex flex-wrap items-start justify-between gap-6"><div><h2 className="text-xl font-bold">Puphr Studio</h2><p className="mt-2 max-w-md text-foreground/75">Independent software and thoughtful digital experiences by Puphr LLC.</p></div><nav aria-label="Footer navigation" className="flex flex-wrap gap-4 text-sm">{[...nav,["About","/about"],["Contact","/#contact"]].map(([n,h])=><a className="hover:text-primary" href={h} key={h}>{n}</a>)}</nav></div><p className="mt-6 text-sm text-foreground/65"><a href="https://puphr.com/">Puphr LLC</a> · <a href="mailto:contact@puphr.com">contact@puphr.com</a> · Upstate SC and beyond</p></footer>;
}
export function ProductArt({p}:{p:Product}){
  const screenshot=p.gallery?.find(m=>m.kind==="screenshot");
  const cover=screenshot?.src ?? p.image;
  const coverAlt=screenshot?.alt ?? p.imageAlt ?? p.name;
  return <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-t-[1.5rem] border-b border-white/10" style={{background:"radial-gradient(ellipse at 65% 15%, "+p.color+"30, transparent 60%), #101e25"}}>
    {cover?<img src={cover} alt={coverAlt} className="h-[260px] w-full object-contain p-4" loading="lazy" decoding="async" referrerPolicy="no-referrer"/>:
      <div className="flex flex-col items-center gap-4 px-5 py-10 text-center" style={{color:p.color}}><div className="rounded-3xl border border-current p-5">{p.status==="Published"?<Smartphone size={44}/>:<FlaskConical size={44}/>}</div><span className="text-2xl font-bold tracking-tight">{p.name}</span><span className="text-xs uppercase tracking-widest">{p.category}</span></div>}
  </div>
}
export function ProductCard({p}:{p:Product}){
  return <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-card/85 transition hover:border-primary/40">
    <a href={productPath(p)} aria-label={"Explore "+p.name}><ProductArt p={p}/></a>
    <div className="flex flex-1 flex-col p-6"><div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/65"><span style={{color:p.color}}>{p.status}</span><span>·</span><span>{p.category}</span></div>
    <h3 className="mt-3 text-2xl font-bold">{p.name}</h3><p className="mt-2 font-semibold">{p.tagline}</p><p className="mt-3 flex-1 leading-7 text-foreground/75">{p.description}</p>
    <a className="mt-5 inline-flex items-center gap-2 font-bold text-primary" href={productPath(p)}>Explore project <ArrowRight size={17}/></a></div>
  </article>
}
export function ProductSection({labs=false}:{labs?:boolean}){
  const items=labs?labProducts:featuredProducts;
  return <section id={labs?"labs":"products"} className="mx-auto mt-20 max-w-7xl scroll-mt-8">
    <p className="text-xs font-semibold uppercase tracking-[.28em] text-primary">{labs?"Puphr Labs":"Original software"}</p>
    <div className="mt-3 flex flex-wrap items-end justify-between gap-4"><h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">{labs?"Exploring what comes next.":"Built for the world, not just the brief."}</h2><a href={labs?"/labs":"/products"} className={button}>{labs?"Explore Labs":"All products"} <ArrowRight size={16}/></a></div>
    <p className="mt-4 max-w-3xl text-lg leading-8 text-foreground/75">{labs?"Active development projects, not promises of availability.":"Our own apps and companion websites turn specialized problems into useful, independently branded software products."}</p>
    <div className={"mt-8 grid gap-5 "+(labs?"sm:grid-cols-2 xl:grid-cols-4":"md:grid-cols-3")}>{items.map(p=><ProductCard key={p.slug} p={p}/>)}</div>
  </section>
}
function Shell({path,children}:{path:string;children:React.ReactNode}){
  return <div className="relative min-h-screen"><ParallaxBackground/><StudioNav path={path}/><main id="main" className="relative z-10 mx-auto max-w-7xl px-5 pb-8 pt-8 sm:px-8">{children}</main><StudioFooter/></div>
}
function Heading({eyebrow,title,body}:{eyebrow:string;title:string;body:string}){
  return <section className={panel}><p className="text-xs font-bold uppercase tracking-[.28em] text-primary">{eyebrow}</p><h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-foreground/80">{body}</p></section>
}
export function ProductDirectory({labs=false}:{labs?:boolean}){
  return <Shell path={labs?"/labs":"/products"}><Heading eyebrow={labs?"Puphr Labs":"Puphr products"} title={labs?"Experiments with practical purpose.":"Independent products. Real problems."} body={labs?"A look at the software and hardware integrations we are actively developing. Features and availability may change.":"Tools, experiences and companion websites created and operated by Puphr LLC."}/><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{(labs?labProducts:featuredProducts).map(p=><ProductCard p={p} key={p.slug}/>)}</div><section className={panel+" mt-8"}><h2 className="text-2xl font-bold">{labs?"See the products":"Explore what we're building next"}</h2><a className={button+" mt-4"} href={labs?"/products":"/labs"}>{labs?"Product portfolio":"Puphr Labs"} <ArrowRight size={16}/></a></section></Shell>
}
function ProductGallery({p}:{p:Product}){
  if(!p.gallery?.length)return null;
  const screenshots=p.gallery.filter(m=>m.kind==="screenshot");
  const artwork=p.gallery.filter(m=>m.kind==="artwork");
  return <div className="mt-8 space-y-8">
    {[{title:p.status==="In development"?"Development screenshots":"App screenshots",items:screenshots,description:"Actual app previews. Select any image to view it at its available full size."},{title:"Visual identity & companion experience",items:artwork,description:"Original product artwork from the companion website, not captured mobile app screens."}].filter(group=>group.items.length>0).map(group=><section key={group.title} className={panel}>
      <div className="flex flex-wrap items-baseline justify-between gap-2"><h2 className="text-2xl font-bold">{group.title}</h2><span className="text-sm text-foreground/65">{group.items.length} {group.items.length===1?"image":"images"}</span></div>
      <p className="mt-2 max-w-3xl text-foreground/75">{group.description}</p>
      <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {group.items.map(m=><figure key={m.src} className="min-w-0 overflow-hidden rounded-xl border border-white/10 bg-background/70">
          <a href={m.src} target="_blank" rel="noopener noreferrer" className="group relative flex h-[240px] items-center justify-center p-2 sm:h-[320px]" aria-label={"Open image: "+m.title}>
            <img src={m.src} alt={m.alt} className="h-full w-full object-contain transition group-hover:scale-[1.02]" loading="lazy" decoding="async" referrerPolicy="no-referrer"/>
            <span className="absolute bottom-2 right-2 rounded-full border border-white/20 bg-background/90 p-2 text-primary"><ArrowUpRight size={16} aria-hidden="true"/></span>
          </a>
          <figcaption className="border-t border-white/10 px-3 py-3 text-sm font-semibold leading-snug">{m.title}</figcaption>
        </figure>)}
      </div>
    </section>)}
  </div>;
}
export function ProductDetail({p}:{p:Product}){
  const isLab=p.status==="In development";
  return <Shell path={isLab?"/labs":"/products"}><a href={isLab?"/labs":"/products"} className="mb-5 inline-block text-sm text-primary">← {isLab?"All Labs projects":"All products"}</a>
    <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]"><div className={panel}><p className="text-xs uppercase tracking-[.24em] font-semibold" style={{color:p.color}}>{p.status} · {p.category}</p><h1 className="mt-4 text-4xl font-bold sm:text-6xl">{p.name}</h1><p className="mt-5 text-2xl font-semibold">{p.tagline}</p><p className="mt-4 text-lg leading-8 text-foreground/80">{p.description}</p><div className="mt-6 flex flex-wrap gap-3">{p.website&&<a className={primary} href={p.website}>Visit product website <ArrowUpRight size={16}/></a>}{p.play&&<a className={button} href={p.play}>Google Play <ArrowUpRight size={16}/></a>}{p.demo&&<a className={button} href={p.demo}>{p.demoLabel} <ArrowUpRight size={16}/></a>}</div>{p.note&&<p className="mt-6 border-t border-white/10 pt-4 text-sm leading-6 text-foreground/70">{p.note}</p>}</div><div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-card/80"><ProductArt p={p}/><div className="p-5 text-sm text-foreground/70">{p.gallery?.some(m=>m.kind==="screenshot")?(isLab?"Actual development screenshot":"Actual app preview"):p.image?"Original product artwork":"Studio project identity · development preview"}</div></div></div>
    <ProductGallery p={p}/>
    <section className="mt-8 grid gap-6 lg:grid-cols-2"><div className={panel}><h2 className="text-2xl font-bold">Product capabilities</h2><ul className="mt-5 grid gap-3">{p.capabilities.map(c=><li key={c} className="flex items-start gap-3 leading-7 text-foreground/80"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary"/>{c}</li>)}</ul></div><div className={panel}><h2 className="text-2xl font-bold">Engineering & growth</h2><p className="mt-4 leading-7 text-foreground/80">{p.business}</p><div className="mt-5 flex flex-wrap gap-2">{p.technology.map(t=><span key={t} className="rounded-full border border-white/15 px-3 py-1 text-sm">{t}</span>)}</div></div></section>
    <section className={panel+" mt-8"}><h2 className="text-2xl font-bold">Need a system built for your own market?</h2><p className="mt-3 text-foreground/75">We bring the same design, development and launch discipline to client work.</p><div className="mt-5 flex flex-wrap gap-3"><a href="/services/product-launch-growth" className={primary}>Product launch & growth</a><a href="/#contact" className={button}>Talk to Studio</a>{p.support&&<a href={p.support} className={button}>Product support</a>}</div></section>
    <div className="mt-10 grid gap-5 md:grid-cols-3">{(isLab?labProducts:featuredProducts).filter(x=>x.slug!==p.slug).map(x=><ProductCard p={x} key={x.slug}/>)}</div>
  </Shell>
}
const capabilities = [{icon:Monitor,title:"Web experiences",body:"Fast, secure websites, useful interactive tools, accessible interfaces and content systems."},{icon:Smartphone,title:"Mobile software",body:"Cross-platform apps, native integrations, offline-first experiences and app-store distribution."},{icon:Cpu,title:"Applied intelligence",body:"Purpose-built AI-assisted workflows, deterministic logic, and human confirmation where it matters."},{icon:Boxes,title:"Connected hardware",body:"Local device communication, protocol integration and compatibility-aware experiences."},{icon:Workflow,title:"Growth systems",body:"Search-led content, localization, attribution and iterative acquisition through Puphr Growth Engine."},{icon:ShieldCheck,title:"Secure foundations",body:"Practical privacy, dependable hosting, careful access control and security review."}];
export function TechnologyPage(){
  return <Shell path="/technology"><Heading eyebrow="Engineering" title="From idea to an operating product." body="Design, software, connected devices and launch infrastructure are treated as one system. We build the smallest dependable solution that earns its complexity."/><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map(({icon:Icon,title,body})=><article key={title} className={panel}><Icon className="text-primary" size={28}/><h2 className="mt-4 text-xl font-bold">{title}</h2><p className="mt-3 leading-7 text-foreground/75">{body}</p></article>)}</div><section className={panel+" mt-8"}><h2 className="text-3xl font-bold">Puphr Growth Engine</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-foreground/80">Our internal growth infrastructure connects search intelligence, content opportunities, human-reviewed publishing, multilingual product websites and conversion measurement. InkPad Reset is its first commercial application.</p><ol className="mt-6 grid gap-3 sm:grid-cols-5">{["Discover demand","Prioritize opportunities","Create useful content","Publish & localize","Measure outcomes"].map((s,i)=><li key={s} className="rounded-xl border border-white/10 p-4"><span className="text-primary">0{i+1}</span><p className="mt-2 font-semibold">{s}</p></li>)}</ol><div className="mt-6 flex flex-wrap gap-3"><a href="/products/inkpad-reset" className={button}>InkPad Reset case study</a><a href="/services/product-launch-growth" className={primary}>Explore growth services</a></div></section><section className={panel+" mt-8"}><h2 className="text-2xl font-bold">Trusthentic</h2><p className="mt-3 text-foreground/75">Puphr's exploration of usable authentication and secure access.</p><a className={button+" mt-4"} href="https://trusthentic.com/">Explore Trusthentic <ArrowUpRight size={16}/></a></section></Shell>
}
export function InsightsPage(){
  return <Shell path="/insights"><Heading eyebrow="Studio insights" title="Learn from the things we build." body="A collection of practical product stories, engineering approaches and resources from across our independent projects."/><div className="mt-8 grid gap-5 md:grid-cols-3">{featuredProducts.map(p=><ProductCard key={p.slug} p={p}/>)}</div><section className={panel+" mt-8"}><h2 className="text-2xl font-bold">Product publications</h2><div className="mt-4 flex flex-wrap gap-3"><a className={button} href="https://curveset.app/guides/">CurveSet field guides</a><a className={button} href="https://usmos.app/insights/">Usmos insights</a><a className={button} href="https://inkpadreset.app.puphr.com/">Printer troubleshooting</a></div></section></Shell>
}
export function AboutPage(){
  return <Shell path="/about"><Heading eyebrow="About Puphr Studio" title="Creative direction. Technical discipline." body="Puphr Studio is the creative and product development arm of Puphr LLC, based in Upstate South Carolina and working beyond. We make independent software and build practical digital systems for businesses."/><section className={panel+" mt-8"}><h2 className="text-2xl font-bold">Right-sized by design</h2><p className="mt-4 leading-8 text-foreground/80">A useful product starts with a real problem. We combine thoughtful design, reliable engineering and maintainable technology, then improve from what we learn after launch.</p><div className="mt-5 flex flex-wrap gap-3"><a href="/work" className={button}>Client work</a><a href="/products" className={button}>Our products</a><a href="/#contact" className={primary}>Start a project</a></div></section></Shell>
}
export function NotFoundPage(){return <Shell path="/404"><Heading eyebrow="404" title="That page isn't here." body="Find the right project or return to the Studio homepage."/><a href="/" className={primary+" mt-6"}>Back to Studio</a></Shell>}
export function ClientWorkPage({children}:{children:React.ReactNode}){return <Shell path="/work"><Heading eyebrow="Client work" title="Real builds. Real businesses." body="Distinctive branding, thoughtful digital experiences and dependable technical foundations across industries."/><div className="mt-8 grid gap-6 md:grid-cols-2">{children}</div></Shell>}
export function ClientDetailPage({title,description,children}:{title:string;description:string;children:React.ReactNode}){return <Shell path="/work"><a className="mb-5 inline-block text-primary" href="/work">← All client work</a><Heading eyebrow="Client case study" title={title} body={description}/><div className="mt-8">{children}</div><a className={primary+" mt-8"} href="/#contact">Discuss your project</a></Shell>}
