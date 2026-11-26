export type Product = {
  slug: string; name: string; category: string; status: "Published" | "Prelaunch" | "In development";
  color: string; tagline: string; description: string; capabilities: string[]; technology: string[];
  website?: string; demo?: string; demoLabel?: string; play?: string; support?: string;
  image?: string; imageAlt?: string; business: string; note?: string;
};
export const products: Product[] = [
  {slug:"curveset",name:"CurveSet",category:"Construction technology",status:"Published",color:"#a5bf85",
    tagline:"Estimate the wall. Plan the whole job.",
    description:"A mobile retaining wall planning tool for contractors and hands-on homeowners, paired with a free browser estimator and educational guides.",
    capabilities:["Straight and curved wall geometry","Interactive 3D construction views and course inspection","Material takeoffs, job costing and printable field PDFs","Free web estimator and searchable guides"],
    technology:["Flutter","Dart","Geometry engine","Cloudflare","RevenueCat"],
    website:"https://curveset.app/",demo:"https://curveset.app/#calculator",demoLabel:"Try the free estimator",
    play:"https://play.google.com/store/apps/details?id=com.puphr.CurveSet&referrer=utm_source%3Dpuphr_studio%26utm_medium%3Dportfolio",support:"https://curveset.app/support/",
    image:"https://curveset.app/assets/screenshots/app-3d-cutaway.webp",imageAlt:"CurveSet textured retaining wall construction cutaway",
    business:"A useful free calculator attracts qualified search traffic and introduces the more capable mobile planning workspace. A one-time Pro upgrade unlocks advanced workflows.",
    note:"Planning and estimation software, not structural engineering certification."},
  {slug:"inkpad-reset",name:"Waste Ink Pad Counter Reset",category:"Hardware utility",status:"Published",color:"#65d4d6",
    tagline:"Give a compatible printer a second life.",
    description:"A mobile utility for supported Epson printer waste ink counter resets, supported by a multilingual compatibility and troubleshooting website.",
    capabilities:["Local printer communication","Model-specific compatibility and troubleshooting","In-app reset credits","Multilingual acquisition and support content"],
    technology:["Android","Cloudflare Workers","D1","Astro","In-app billing"],
    website:"https://inkpadreset.app.puphr.com/",demo:"https://inkpadreset.app.puphr.com/printers",demoLabel:"Explore supported printers",
    image:"https://inkpadreset.app.puphr.com/app-icon.png",imageAlt:"Waste Ink Pad Counter Reset app icon",
    play:"https://play.google.com/store/apps/details?id=com.puphr.printerpadreset&referrer=utm_source%3Dpuphr_studio%26utm_medium%3Dportfolio",
    business:"Model-specific search content connects users who have an immediate problem to the appropriate utility. Credit-based purchases align payment with a reset.",
    note:"A counter reset does not replace inspection or servicing of saturated waste ink pads."},
  {slug:"usmos",name:"Usmos",category:"Relationship enrichment",status:"Prelaunch",color:"#c8a2e8",
    tagline:"Our universe. Just us.",
    description:"An original couples experience focused on shared moments, guided journeys, playful activities and a private space for two, accompanied by an editorial and research-led website.",
    capabilities:["Personalized onboarding and collaborative experiences","Original visual identity and interactive previews","Shared rituals, questions and guided journeys","Pair-based subscription architecture"],
    technology:["Flutter","Cloudflare Workers","D1","RevenueCat","Rive"],
    website:"https://usmos.app/",demo:"https://usmos.app/#spark",demoLabel:"Try a Daily Spark",
    image:"https://usmos.app/assets/theme_inner_world.webp",imageAlt:"Usmos illustrated inner world theme",
    business:"A distinct editorial site and free public preview introduce the experience before launch; the planned subscription is designed to cover both partners.",
    note:"In active development. Security review, store approval and production availability are not yet confirmed."},
  {slug:"suretick",name:"SureTick",category:"Applied AI",status:"In development",color:"#79e3bc",
    tagline:"See it. Check it. Know it.",
    description:"An active visual checklist and inspection platform designed around camera-assisted verification and reusable checks.",
    capabilities:["Camera-assisted visual inspection","Reusable checklists and guided walkthroughs","Evidence review and user confirmation","Local reports and pantry workflows"],
    technology:["Flutter","Workers AI","Cloudflare Workers","D1"],
    business:"Focused AI assistance for practical, repeatable tasks, with user confirmation rather than unattended surveillance."},
  {slug:"anydrone",name:"AnyDrone",category:"Hardware interoperability",status:"In development",color:"#93b9ff",
    tagline:"A more flexible drone cockpit.",
    description:"A local-first camera and control companion exploring interoperable consumer drone protocols.",
    capabilities:["Live camera feeds","Explicit hardware protocol profiles","Gamepad and co-pilot interfaces","Local network communication"],
    technology:["Flutter","Local networking","Video streaming","RevenueCat"],
    business:"A hardware compatibility-first approach to a fragmented consumer drone ecosystem.",
    note:"Compatibility varies by model and protocol; physical flight testing and release verification are ongoing."},
  {slug:"hairfuture",name:"HairFuture",category:"Beauty technology",status:"In development",color:"#efb5a4",
    tagline:"Personalized haircare intelligence.",
    description:"A personalized cosmetic haircare experience exploring routine assessments, ingredient compatibility and guided improvement plans.",
    capabilities:["Adaptive intake and routine assessment","Cosmetic scoring and explainable recommendations","Personalized 90-day roadmap","Routine and product shelf analysis"],
    technology:["React Native","Cloudflare Workers AI","Personalization"],
    business:"A free diagnostic preview leads into a planned premium coaching experience.",
    note:"Cosmetic guidance, not medical diagnosis."},
  {slug:"crossscan-moto",name:"CrossScan Moto",category:"Vehicle diagnostics",status:"In development",color:"#f4bd68",
    tagline:"Connected motorcycle diagnostics.",
    description:"A cross-platform workshop-oriented diagnostic project for compatible BMW Motorrad vehicles and adapters.",
    capabilities:["Vehicle and ECU identification","Diagnostic fault code workflows","Bluetooth and Wi-Fi adapter transports","Local vehicle communication"],
    technology:["Flutter","Bluetooth","CAN / K-Line","Cloudflare Workers"],
    business:"Purpose-built diagnostic workflows for a specialized hardware ecosystem.",
    note:"Development-stage software; vehicle and adapter compatibility require validation."}
];
export const featuredProducts = products.filter(p=>p.status !== "In development");
export const labProducts = products.filter(p=>p.status === "In development");
export const productPath = (p: Product) => (p.status === "In development" ? "/labs/" : "/products/") + p.slug;
export const productRoutes = products.map(p=>({path:productPath(p),title:p.name+" | Puphr Studio",description:p.description}));
