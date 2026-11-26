export type ProductMedia = { src: string; title: string; alt: string; kind: "screenshot" | "artwork" };
export type Product = {
  slug: string; name: string; category: string; status: "Published" | "Prelaunch" | "In development";
  color: string; tagline: string; description: string; capabilities: string[]; technology: string[];
  website?: string; demo?: string; demoLabel?: string; play?: string; support?: string;
  image?: string; imageAlt?: string; cover?: string; coverAlt?: string; gallery?: ProductMedia[]; business: string; note?: string;
};
export const products: Product[] = [
  {slug:"curveset",name:"CurveSet",category:"Construction technology",status:"Published",color:"#a5bf85",
    tagline:"Estimate the wall. Plan the whole job.",
    description:"A mobile retaining wall planning tool for contractors and hands-on homeowners, paired with a free browser estimator and educational guides.",
    capabilities:["Straight and curved wall geometry","Interactive 3D construction views and course inspection","Material takeoffs, job costing and printable field PDFs","Free web estimator and searchable guides"],
    technology:["Flutter","Dart","Geometry engine","Cloudflare","RevenueCat"],
    website:"https://curveset.app/",demo:"https://curveset.app/#calculator",demoLabel:"Try the free estimator",
    play:"https://play.google.com/store/apps/details?id=com.puphr.CurveSet&referrer=utm_source%3Dpuphr_studio%26utm_medium%3Dportfolio",support:"https://curveset.app/support/",
    cover:"https://play-lh.googleusercontent.com/S9yObX2Wz5zKCGvnryzjepWLlmPxjURh67J2KIUGj3grHrztX-2OKFY_7PsAFzr_pxkuLWM6jslY8nivV6Gr1A=w526-h296-rw",coverAlt:"CurveSet promotional app screenshot showing advanced wall planning",
    image:"https://play-lh.googleusercontent.com/mFpKB8fjwU24v0JzGuT0kJrRD--ucV2DG1caMYVtVZHzANaJtGBqAhgxSoawHUSVY0XvvOmmcOR82dIINQ-f2A=w526-h296-rw",imageAlt:"Official CurveSet Google Play promotional screenshot 1",
    gallery: [
      {
        "src": "https://play-lh.googleusercontent.com/mFpKB8fjwU24v0JzGuT0kJrRD--ucV2DG1caMYVtVZHzANaJtGBqAhgxSoawHUSVY0XvvOmmcOR82dIINQ-f2A=w526-h296-rw",
        "title": "CurveSet app preview 1",
        "alt": "Official CurveSet Google Play promotional screenshot 1",
        "kind": "screenshot"
      },
      {
        "src": "https://play-lh.googleusercontent.com/S9yObX2Wz5zKCGvnryzjepWLlmPxjURh67J2KIUGj3grHrztX-2OKFY_7PsAFzr_pxkuLWM6jslY8nivV6Gr1A=w526-h296-rw",
        "title": "CurveSet app preview 2",
        "alt": "Official CurveSet Google Play promotional screenshot 2",
        "kind": "screenshot"
      },
      {
        "src": "https://play-lh.googleusercontent.com/c-bFlIYo9_EVRnPgR7xnDlCpV1ZPqeZeR2DOCPk0NxOvdvRl5colUgBWLo_l8kUdnnrwavl5nbk3lyPBR3XHBw=w526-h296-rw",
        "title": "CurveSet app preview 3",
        "alt": "Official CurveSet Google Play promotional screenshot 3",
        "kind": "screenshot"
      },
      {
        "src": "https://play-lh.googleusercontent.com/xviE0sqnC5HZHto5QGYsDQKvK85baoLXxQZv4wRyXaAp8SALQEXNNCwVnHS7hEIKyzUkbSBfLPS9OfJ_5Ztngw=w526-h296-rw",
        "title": "CurveSet app preview 4",
        "alt": "Official CurveSet Google Play promotional screenshot 4",
        "kind": "screenshot"
      },
      {
        "src": "https://play-lh.googleusercontent.com/WWmm-8LWbJ__fyThEMP2xzqUvElldL0v896GKks1mZjpnw6QyiAhnyGzQrjLuYQXcrmsQjHqKpGA0nI8azQOdD4=w526-h296-rw",
        "title": "CurveSet app preview 5",
        "alt": "Official CurveSet Google Play promotional screenshot 5",
        "kind": "screenshot"
      },
      {
        "src": "https://play-lh.googleusercontent.com/3mgoqTT5Cn3DE8K-LCQBBX2H3u0Xu-wWOG9_OQ3Br4sQivxlqegQ7ue0mrZoeTbeFwyumH9Pus8w5YKKFs03=w526-h296-rw",
        "title": "CurveSet app preview 6",
        "alt": "Official CurveSet Google Play promotional screenshot 6",
        "kind": "screenshot"
      },
      {
        "src": "https://play-lh.googleusercontent.com/CW3WBlIwAZoUBklO6woptDu_CsATR7ReXDeCn0_cvZUDWs6XvU8sFYROjNgrLXzKwZY0jx5wQScWysUV89JQ=w526-h296-rw",
        "title": "CurveSet app preview 7",
        "alt": "Official CurveSet Google Play promotional screenshot 7",
        "kind": "screenshot"
      },
      {
        "src": "https://play-lh.googleusercontent.com/aFl6rBvN7aQ73-OVugOaZ2uWRZyLAoY4TNIzTg9-gTTb_8qMTHT0iNGn_fc5ubfihSuUsgF6lDfTTCgv82_Sxp8=w526-h296-rw",
        "title": "CurveSet app preview 8",
        "alt": "Official CurveSet Google Play promotional screenshot 8",
        "kind": "screenshot"
      }
    ],
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
    gallery: [
      {
        "src": "https://play-lh.googleusercontent.com/NdEMFclsLTKmTXo68SgZ4DZ1HDpTUIU5A4xn1CkTyoJb0hX8A0svp93EbnmoGfDwTmdICiB0Q9u75ghrADO1=w526-h296-rw",
        "title": "App preview 1",
        "alt": "Official Waste Ink Pad Counter Reset Google Play screenshot 1",
        "kind": "screenshot"
      },
      {
        "src": "https://play-lh.googleusercontent.com/c5bLtJPwR0JoRecIfcPkB4G9AZWs18JU0f0YApr6yceolCiyXCJRZ3u5anwbZ7uHkXjgD_QAqBe_T5eBedhPfQ=w526-h296-rw",
        "title": "App preview 2",
        "alt": "Official Waste Ink Pad Counter Reset Google Play screenshot 2",
        "kind": "screenshot"
      },
      {
        "src": "https://play-lh.googleusercontent.com/jX557XqJPZWmgVzYjsryce2B7ryb221AhBsTCGcdBc72IQiECCX3Ck4U4bLlWOcnT7AZRpAgkvVx2Y3x33nF=w526-h296-rw",
        "title": "App preview 3",
        "alt": "Official Waste Ink Pad Counter Reset Google Play screenshot 3",
        "kind": "screenshot"
      },
      {
        "src": "https://play-lh.googleusercontent.com/4FCogvKoQiEwvD_0AkLryos7tIdaAiW9paaICW8OTlrTuOefMbio7ltHCRO--9OWBnHsbbvpUutO5wqWbmDxAA=w526-h296-rw",
        "title": "App preview 4",
        "alt": "Official Waste Ink Pad Counter Reset Google Play screenshot 4",
        "kind": "screenshot"
      },
      {
        "src": "https://play-lh.googleusercontent.com/Ku_afGbgmo-869n0iYp1_D56_2QRg1DtYK2VkPLm1imI0258dB_9PgiiTMR7g116SQ0FqOcyCnPqd39aNC-dpLA=w526-h296-rw",
        "title": "App preview 5",
        "alt": "Official Waste Ink Pad Counter Reset Google Play screenshot 5",
        "kind": "screenshot"
      },
      {
        "src": "https://play-lh.googleusercontent.com/ubf5uDegTNP5EsJyfh9RoLjExHannVNpE3d2snTeaV881In1g4t7P0bjQWmbqXAtRvHGBmyOpXiMv8fT_IkyqCw=w526-h296-rw",
        "title": "App preview 6",
        "alt": "Official Waste Ink Pad Counter Reset Google Play screenshot 6",
        "kind": "screenshot"
      },
      {
        "src": "https://play-lh.googleusercontent.com/oGX2skX5zTwuL-NqsvW5kqYaDHOVRtRbSH0-H9kYd2SK_m0bvtG-M-DXjxH3EulMA058wAJs3yfo4Ig-bGnDSw=w526-h296-rw",
        "title": "App preview 7",
        "alt": "Official Waste Ink Pad Counter Reset Google Play screenshot 7",
        "kind": "screenshot"
      }
    ],
    business:"Model-specific search content connects users who have an immediate problem to the appropriate utility. Credit-based purchases align payment with a reset.",
    note:"A counter reset does not replace inspection or servicing of saturated waste ink pads."},
  {slug:"usmos",name:"Usmos",category:"Relationship enrichment",status:"Prelaunch",color:"#c8a2e8",
    tagline:"Our universe. Just us.",
    description:"A privacy-first couples experience for shared moments, guided journeys and playful activities, designed around end-to-end encryption (E2EE) and a private digital space for two.",
    capabilities:["Personalized onboarding and collaborative experiences","Original visual identity and interactive previews","Shared rituals, questions and guided journeys","Client-side end-to-end encryption for private shared content, with encrypted local storage","Pair-based subscription architecture"],
    technology:["Flutter","Cloudflare Workers","D1","RevenueCat","Rive","E2EE","SQLCipher"],
    website:"https://usmos.app/",demo:"https://usmos.app/#spark",demoLabel:"Try a Daily Spark",
    image:"https://usmos.app/assets/theme_inner_world.webp",imageAlt:"Usmos illustrated inner world theme",
    gallery: [
      {
        "src": "https://usmos.app/assets/theme_inner_world.webp",
        "title": "Inner worlds",
        "alt": "Usmos companion website artwork: Inner worlds",
        "kind": "artwork"
      },
      {
        "src": "https://usmos.app/assets/theme_playfulness.webp",
        "title": "Playfulness",
        "alt": "Usmos companion website artwork: Playfulness",
        "kind": "artwork"
      },
      {
        "src": "https://usmos.app/assets/theme_adventure.webp",
        "title": "Adventure",
        "alt": "Usmos companion website artwork: Adventure",
        "kind": "artwork"
      },
      {
        "src": "https://usmos.app/assets/theme_trust.webp",
        "title": "Trust",
        "alt": "Usmos companion website artwork: Trust",
        "kind": "artwork"
      },
      {
        "src": "https://usmos.app/assets/orbit_playful.webp",
        "title": "Catch a spark",
        "alt": "Usmos companion website artwork: Catch a spark",
        "kind": "artwork"
      },
      {
        "src": "https://usmos.app/assets/orbit_warm.webp",
        "title": "Discover together",
        "alt": "Usmos companion website artwork: Discover together",
        "kind": "artwork"
      },
      {
        "src": "https://usmos.app/assets/orbit_gentle.webp",
        "title": "Keep what matters",
        "alt": "Usmos companion website artwork: Keep what matters",
        "kind": "artwork"
      }
    ],
    business:"Usmos combines a research-led editorial site and free public preview with a planned subscription for both partners. Its developing security architecture encrypts private shared content on the devices before transmission and uses encrypted local storage, so privacy is an architectural decision rather than a decorative feature.",
    note:"In active development. End-to-end encryption is a core design goal with client protocol implementation in place; independent cryptographic review, physical-device validation, store approval and production availability remain unconfirmed."},
  {slug:"bleachers",name:"Bleachers",category:"Live sports & media infrastructure",status:"In development",color:"#8ee7a0",
    tagline:"The game is more than the livestream.",
    description:"A phone-first recreational sports broadcasting platform designed around live video, rewind, game events and synchronized camera angles. Bleachers also serves as a proving ground for reusable low-latency mobile media infrastructure.",
    capabilities:["Native Android camera, microphone and hardware-encoded H.264/AAC live publishing","Live score, clock and game events synchronized to an authoritative game timeline","Browser viewing with WebTransport and WebCodecs, rolling DVR and event-based replay","Custom expo-moq-webtransport native bridge for Media over QUIC (MoQ)","Independent replay archive and live-first capture recovery","Team and organizer workflows, AI-assisted highlight signals and future multi-angle coverage"],
    technology:["Expo / React Native","Media over QUIC (MoQ / MOQT draft-16)","WebTransport / HTTP/3","Rust / UniFFI","Kotlin / Swift","Cloudflare Realtime","Durable Objects","D1 / R2","WebCodecs"],
    business:"Bleachers explores a more interactive alternative to conventional one-way sports streaming. The custom native WebTransport module bridges Expo and Cloudflare's experimental MoQ relay, enabling a reusable foundation for future live-video apps, connected cameras and media workflows. A transport abstraction keeps the architecture adaptable as MoQ evolves.",
    note:"In active development. Native Android publishing and browser playback are documented in the project; iOS release validation, broad field testing and future multi-angle capabilities are not yet confirmed. Archived replay currently contains video only."},
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
    image:"/media/products/anydrone-cockpit.png",imageAlt:"AnyDrone cockpit development preview",
    gallery: [
      {
        "src": "/media/products/anydrone-cockpit.png",
        "title": "Cockpit development preview",
        "alt": "AnyDrone cockpit screenshot from the project repository",
        "kind": "screenshot"
      }
    ],
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
