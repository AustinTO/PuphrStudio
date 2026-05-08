import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Toaster } from "@/components/ui/toaster";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ufoWinsLandscape1 from "../../UFOWinsLandscape1.webp";
import ufoWinsLandscape2 from "../../UFOWinsLandscape2.webp";
import comfortClemson1 from "../../ComfortClemson1.webp";
import comfortClemson2 from "../../comfortclemson2bot.webp";
import comfortClemson3 from "../../ComfortClemson3.webp";
import michaelRashkinSanity1 from "../../michaelrashkinsanityscreenshot.webp";
import michaelRashkinSanity2 from "../../michaelrashkinsanityscreenshot2.webp";
import puphrStudioLogo from "../../puphr_studio.webp";
import rightRepairHero from "../../rightrepairheroscreenshot.webp";
import rightRepairServices from "../../rightrepairservicesscreenshot.webp";
import rightRepairStory from "../../rightrepairstoryscreenshot.webp";
import rightRepairContact from "../../rightrepaircontactscreenshot.webp";
import rightRepairInsightsHub1 from "../../rightrepairinsightshub1.webp";
import rightRepairInsightsHub2 from "../../rightrepairinsightshub2.webp";
import popDocHero from "../../popdochero1.webp";
import popDocQuiz from "../../popdocquiz2.webp";
import popDocTestimonials from "../../popdoctestimonials3.webp";
import popDocProducts from "../../popdocproducts4.webp";
import popDocSanityStudio from "../../popdocsanitystudio5.webp";
import popDocCartBag from "../../popdoccartbag6.webp";

type MediaSlide = {
  src: string;
  type: "image" | "video" | "embed";
};

type Project = {
  name: string;
  outcome: string;
  bullets: string[];
  image?: string;
  carouselImages?: string[];
  mediaSlides?: MediaSlide[];
  mediaAspectClass?: string;
  mediaFitClass?: string;
  badge?: string;
  caseTitle?: string;
  problem?: string;
  build?: string;
  result?: string;
};

type ContactFormState = {
  name: string;
  company: string;
  email: string;
  website: string;
  message: string;
  needs: string[];
};

const needOptions = [
  "My site looks outdated",
  "I need a new website",
  "I need better local SEO",
  "I need branding help",
  "My forms/email/hosting are messy",
  "I need ecommerce or content publishing",
];

const defaultContactForm: ContactFormState = {
  name: "",
  company: "",
  email: "",
  website: "",
  message: "",
  needs: [],
};

const serviceCards = [
  "Look credible faster",
  "Get found locally",
  "Capture cleaner leads",
  "Update without chaos",
];

const improvementCards = [
  {
    title: "First impression",
    body: "A sharper brand and homepage so strangers do not have to wonder if you are legit.",
  },
  {
    title: "Lead flow",
    body: "Forms that work without inviting spam, junk leads, or plugin chaos.",
  },
  {
    title: "Search visibility",
    body: "Pages built so customers, search engines, and answer engines understand what you do.",
  },
  {
    title: "Speed and mobile",
    body: "Fast pages that feel clean when customers check you from a phone.",
  },
  {
    title: "Security and reliability",
    body: "Secure hosting, protected forms, SSL, DNS sanity, and fewer brittle moving parts.",
  },
  {
    title: "Content control",
    body: "A site you can update without calling a developer every time.",
  },
];

const offerCards = [
  {
    badge: "Starter",
    title: "Presence Polish",
    bestFor: "Best for refreshes",
    forText: "For businesses with a decent site that needs to stop looking dated.",
    includes: [
      "Homepage refresh",
      "Copy tightening",
      "Mobile cleanup",
      "SEO and AEO cleanup",
    ],
  },
  {
    badge: "Most Popular",
    title: "Trust Launch",
    bestFor: "Best for new builds",
    forText: "For businesses that need a new site, message, and launch path.",
    includes: [
      "Landing page or small site",
      "Brand direction",
      "Conversion copy",
      "Spam-protected contact flow",
      "Secure hosting and launch support",
    ],
  },
  {
    badge: "Advanced",
    title: "Studio Site System",
    bestFor: "Best for content brands",
    forText: "For brands that need publishing, ecommerce, or content control.",
    includes: [
      "Visual content editor",
      "Blog or insights hub",
      "Reusable page sections",
      "Secure forms and deployment pipeline",
    ],
  },
  {
    badge: "Local Growth",
    title: "Local Authority Buildout",
    bestFor: "Best for local services",
    forText: "For service businesses that need to rank, explain, and convert.",
    includes: [
      "Local landing pages",
      "Service pages",
      "FAQ and AEO content",
      "Google Business Profile alignment",
      "Review and proof structure",
    ],
  },
];

const processSteps = [
  ["Audit", "Find the trust leaks, unclear pages, weak CTAs, search gaps, and fragile technical pieces."],
  ["Strategy", "Shape the offer, page structure, proof, copy, brand direction, and launch path."],
  ["Build", "Design and implement the site, forms, content structure, analytics, hosting, and core SEO/AEO pieces."],
  ["Launch", "Check performance, mobile behavior, DNS, SSL, contact delivery, and post-launch reliability."],
  ["Support", "Keep the system practical with content updates, improvements, and technical cleanup when needed."],
];

const featuredProjects: Project[] = [
  {
    name: "therightrepair.com",
    badge: "Case Study",
    caseTitle: "Turning a local repair company into a credible premium brand",
    problem: "The existing presence did not match the quality of the work or the trust needed for local property and repair decisions.",
    build: "Custom logo and vector icon system, fast website, service structure, local answer-engine content, and secure contact flow.",
    result: "A more ownable brand, clearer services, stronger local positioning, and a cleaner path from search to contact.",
    outcome:
      "Turned a local contractor into a polished, trustworthy brand that looks established and captures real leads without the usual form and inbox failures.",
    carouselImages: [
      rightRepairHero,
      rightRepairServices,
      rightRepairStory,
      rightRepairContact,
      rightRepairInsightsHub1,
      rightRepairInsightsHub2,
    ],
    bullets: [
      "Unique vector-based custom icon pack and logo design that gave the brand a more ownable look",
      "AI search and answer engine optimization focused on appearing in common local maintenance and property questions",
      "Spam-resistant contact flow that still lets real customers get through",
      "Email, hosting, and delivery set up to stay fast, reliable, and professional",
    ],
  },
  {
    name: "PopDoc Supplements",
    badge: "Case Study",
    caseTitle: "Making a supplement brand feel premium, modern, and shoppable",
    problem: "The brand needed a storefront that felt trustworthy, guided shoppers, and supported repeat engagement.",
    build: "Custom storefront, popup cart, quiz flow, testimonial structure, Sanity content system, and conversion-focused pages.",
    result: "A premium shopping experience with stronger content control and more paths from interest to purchase.",
    outcome:
      "Built a conversion-focused supplement storefront that keeps the brand feeling premium while creating more ways for shoppers to engage, return, and buy again.",
    carouselImages: [
      popDocHero,
      popDocQuiz,
      popDocTestimonials,
      popDocProducts,
      popDocSanityStudio,
      popDocCartBag,
    ],
    bullets: [
      "Custom storefront and popup cart designed to reduce friction and keep purchase momentum high",
      "Sanity-driven content engine for fast updates, scheduled publishing, and long-term growth",
      "Quiz flows, personalized content, and outreach systems built to support retention, not just first purchase",
    ],
  },
  {
    name: "michaelrashkin.com",
    badge: "Case Study",
    caseTitle: "Giving a health expert a publishing-ready credibility platform",
    problem: "The expert presence needed to feel authoritative while making ongoing publishing manageable.",
    build: "Editorial design, content workflows, protected forms, video-forward proof, and a publishing system built for steady updates.",
    result: "A cleaner authority platform that supports credibility, repeat readership, and simpler operations.",
    outcome:
      "Built a publication platform that feels authoritative and easy to manage, with a publishing workflow that supports steady expert-led content.",
    mediaSlides: [
      {
        src: "https://customer-blertdcu1j6vaebg.cloudflarestream.com/903053eba9b7ff6d610d30dd0df37624/iframe?autoplay=true&muted=true&loop=true&preload=auto",
        type: "embed",
      },
      {
        src: "https://customer-blertdcu1j6vaebg.cloudflarestream.com/63896eb05579a610a9286389d986f59d/iframe?autoplay=true&muted=true&loop=true&preload=auto",
        type: "embed",
      },
      { src: michaelRashkinSanity1, type: "image" },
      { src: michaelRashkinSanity2, type: "image" },
    ],
    bullets: [
      "Editorial design and publishing flow built around clarity, trust, and repeat readership",
      "Content system supports live editing, scheduling, and cleaner publishing operations",
      "Protected forms and secure hosting choices keep the platform usable and stable",
    ],
  },
];

const selectedProjects: Project[] = [
  {
    name: "UFO Racing",
    outcome:
      "Created a sharper digital presence for a niche performance brand so the site feels as engineered and distinctive as the product itself.",
    carouselImages: [ufoWinsLandscape1, ufoWinsLandscape2],
    bullets: [
      "Custom brand presentation that fits the audience instead of looking generic",
      "Fast static build that keeps the experience crisp and dependable",
      "Infrastructure choices made to support performance without adding bloat",
    ],
  },
  {
    name: "thinkcleanllc.com",
    outcome:
      "Helped a local service business look more credible, explain its offer clearly, and support bookings with a cleaner customer path.",
    mediaSlides: [
      {
        src: "https://customer-blertdcu1j6vaebg.cloudflarestream.com/98efc982355eb2fcf85a5d04aa20c172/iframe?autoplay=true&muted=true&loop=true&preload=auto",
        type: "embed",
      },
    ],
    bullets: [
      "Local-service structure built to support search visibility and trust",
      "Quote and contact flow hardened without making it annoying for real customers",
      "Fast delivery and clear service pages that hold up over time",
    ],
  },
  {
    name: "Comfort Inn Clemson",
    outcome:
      "Gave the property a cleaner, more direct booking-friendly presence that feels easier to trust and easier to use across devices.",
    carouselImages: [comfortClemson1, comfortClemson2, comfortClemson3],
    mediaFitClass: "object-contain",
    bullets: [
      "Clearer hotel presentation built to help guests find what they need quickly",
      "Secure chatbot and contact paths that support real customer questions without adding clutter",
      "Cloudflare-backed setup focused on speed, uptime, and a smoother guest experience",
    ],
  },
];

function ImageCarousel({
  images,
  slides,
  label,
  fitClass = "object-cover",
}: {
  images: string[];
  slides?: MediaSlide[];
  label: string;
  fitClass?: string;
}) {
  const mediaSlides = slides ?? images.map((src) => ({ src, type: "image" as const }));
  const [index, setIndex] = useState(0);

  const previous = () => setIndex((current) => (current === 0 ? mediaSlides.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === mediaSlides.length - 1 ? 0 : current + 1));

  return (
    <div className="relative h-full w-full overflow-hidden bg-black/40">
      {mediaSlides[index].type === "video" ? (
        <video
          key={mediaSlides[index].src}
          src={mediaSlides[index].src}
          aria-label={`${label} preview video ${index + 1}`}
          className={`h-full w-full ${fitClass}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : mediaSlides[index].type === "embed" ? (
        <iframe
          key={mediaSlides[index].src}
          src={mediaSlides[index].src}
          title={`${label} preview video ${index + 1}`}
          className="h-full w-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <img
          src={mediaSlides[index].src}
          alt={`${label} screenshot ${index + 1}`}
          className={`h-full w-full ${fitClass}`}
          loading="eager"
        />
      )}

      {mediaSlides.length > 1 ? (
        <>
          <button
            type="button"
            onClick={previous}
            aria-label={`Previous ${label} screenshot`}
            className="absolute left-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border border-white/40 bg-black/50 text-xl text-white backdrop-blur-sm transition hover:bg-black/70"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            aria-label={`Next ${label} screenshot`}
            className="absolute right-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border border-white/40 bg-black/50 text-xl text-white backdrop-blur-sm transition hover:bg-black/70"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {mediaSlides.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Show ${label} screenshot ${dotIndex + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  dotIndex === index ? "bg-white" : "bg-white/45"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/90">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-foreground/78 sm:text-lg">{body}</p>
    </div>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-[1.25rem] border border-white/10 bg-card/62 p-5 text-left backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/40">
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-base leading-7 text-foreground/76">{body}</p>
    </article>
  );
}

function OfferCard({
  badge,
  title,
  bestFor,
  forText,
  includes,
}: {
  badge: string;
  title: string;
  bestFor: string;
  forText: string;
  includes: string[];
}) {
  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-background/72 p-6 shadow-[0_18px_60px_rgba(4,18,21,0.28)] backdrop-blur-md transition hover:-translate-y-1 hover:border-primary/40">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          {badge}
        </span>
        <span className="text-sm font-semibold text-secondary">{bestFor}</span>
      </div>
      <h3 className="mt-5 text-2xl font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-base leading-7 text-foreground/78">{forText}</p>
      <ul className="mt-5 flex-1 space-y-3 text-base leading-6 text-foreground/76">
        {includes.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-primary/10"
      >
        Request a Presence Check
      </a>
    </article>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`group overflow-hidden rounded-[1.75rem] border border-white/10 bg-card/72 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-primary/50 ${
        featured ? "shadow-[0_24px_80px_rgba(4,18,21,0.45)]" : ""
      }`}
    >
      <div className={`${project.mediaAspectClass ?? "aspect-[16/10]"} overflow-hidden border-b border-white/10`}>
        {project.carouselImages || project.mediaSlides ? (
          <ImageCarousel
            images={project.carouselImages ?? []}
            slides={project.mediaSlides}
            label={project.name}
            fitClass={project.mediaFitClass}
          />
        ) : (
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            className={`h-full w-full ${project.mediaFitClass ?? "object-cover"} transition duration-500 group-hover:scale-105`}
            loading="lazy"
          />
        )}
      </div>

      <div className={featured ? "p-7 sm:p-8" : "p-6"}>
        <div className="flex flex-wrap items-center gap-3">
          {project.badge ? (
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              {project.badge}
            </span>
          ) : null}
          <h3 className={`${featured ? "text-3xl" : "text-2xl"} font-bold text-foreground`}>{project.name}</h3>
        </div>

        <p className={`${featured ? "mt-4 text-lg leading-8 text-foreground/88" : "mt-3 text-base leading-7 text-foreground/82"}`}>
          {project.outcome}
        </p>

        <ul className={`${featured ? "mt-5 space-y-3 text-base leading-7 text-foreground/78" : "mt-4 space-y-2.5 text-base leading-7 text-foreground/75"}`}>
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function CaseStudyCard({ project }: { project: Project }) {
  return (
    <article className="grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-card/72 backdrop-blur-sm lg:grid-cols-[1.25fr_0.75fr]">
      <div className="aspect-[16/10] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
        <ImageCarousel
          images={project.carouselImages ?? []}
          slides={project.mediaSlides}
          label={project.name}
          fitClass={project.mediaFitClass}
        />
      </div>
      <div className="p-6 sm:p-8">
        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          {project.badge}
        </span>
        <h3 className="mt-4 text-2xl font-bold leading-tight text-foreground sm:text-3xl">{project.caseTitle}</h3>
        <p className="mt-5 text-base leading-7 text-foreground/78">{project.problem}</p>
        <ul className="mt-6 space-y-3 text-base leading-7 text-foreground/76">
          {[project.build, project.result, ...project.bullets.slice(0, 1)].map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function App() {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState<ContactFormState>(defaultContactForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";

  useEffect(() => {
    const updateFloatingCta = () => {
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom ?? 0;
      setShowFloatingCta(heroBottom <= 0);
    };

    updateFloatingCta();
    window.addEventListener("scroll", updateFloatingCta, { passive: true });
    window.addEventListener("resize", updateFloatingCta);

    return () => {
      window.removeEventListener("scroll", updateFloatingCta);
      window.removeEventListener("resize", updateFloatingCta);
    };
  }, []);

  const updateContactField =
    (field: keyof Omit<ContactFormState, "needs">) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setContactForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const toggleNeed = (need: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setContactForm((current) => ({
      ...current,
      needs: event.target.checked
        ? [...current.needs, need]
        : current.needs.filter((item) => item !== need),
    }));
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      if (!response.ok) {
        const message = (await response.text()) || "Failed to send message.";
        throw new Error(message);
      }

      setContactForm(defaultContactForm);
      toast({
        title: "Message sent",
        description: "Thanks. Puphr Studio will get back to you soon.",
      });
    } catch (error) {
      toast({
        title: "Message failed",
        description:
          error instanceof Error
            ? error.message
            : "The form did not send. Please try again or email contact@puphr.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <ParallaxBackground />
      <Toaster />

      <main className="relative z-10 px-4 pb-28 pt-8 sm:px-6 sm:pb-16 lg:px-8">
        <section ref={heroRef} className="mx-auto max-w-7xl pt-8">
          <div className="grid min-h-[680px] gap-12 rounded-[2rem] border border-white/10 bg-background/72 p-6 backdrop-blur-md sm:p-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/90">Puphr Studio</p>
              <h1 className="mt-4 max-w-5xl text-[2.15rem] font-bold leading-[1.05] text-foreground min-[380px]:text-[2.25rem] min-[420px]:text-4xl sm:text-6xl lg:text-7xl">
                <span className="block">A sharper site.</span>
                <span className="block">A cleaner brand.</span>
                <span className="block">A better reason to trust you.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/84 sm:text-xl">
                Puphr Studio builds modern websites, brand systems, and digital trust foundations for businesses that are
                tired of looking smaller, messier, or less credible than they really are.
              </p>
              <p className="mt-6 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-4 text-base font-semibold leading-7 text-foreground/82">
                Design polish from a creative studio. Technical discipline from an IT and cybersecurity company.
              </p>

              <div className="mx-auto mt-6 flex max-w-[220px] justify-center lg:hidden">
                <img
                  src={puphrStudioLogo}
                  alt="Puphr Studio icon"
                  className="animate-swim h-44 w-44 object-contain"
                  style={{ objectPosition: "center 54%" }}
                />
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/50 bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition hover:brightness-105"
                >
                  Start My Upgrade
                </a>
                <a
                  href="#featured-work"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-base font-semibold text-foreground transition hover:border-white/25 hover:bg-white/10"
                >
                  See the Work
                </a>
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/62">
                Branding · Websites · Local SEO · Secure Forms · Fast Hosting · Content Systems
              </p>
            </div>

            <div className="relative">
              <div className="mx-auto hidden max-w-[340px] justify-center lg:flex">
                <img
                  src={puphrStudioLogo}
                  alt="Puphr Studio icon"
                  className="animate-swim h-56 w-56 object-contain sm:h-72 sm:w-72"
                  style={{ objectPosition: "center 54%" }}
                />
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-card/50 p-4 backdrop-blur-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary/85">
                  Capabilities Console
                </p>
                <div className="grid grid-cols-2 gap-3">
                {serviceCards.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-background/70 px-4 py-4 text-sm font-semibold leading-5 text-foreground/86"
                  >
                    {item}
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-7xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-card/58 p-5 text-base font-semibold leading-7 text-foreground/80 backdrop-blur-sm sm:p-6 sm:text-lg">
            Built for service businesses, professional practices, ecommerce brands, creators, nonprofits, and local brands
            that need to look more credible fast.
          </div>
        </section>

        <section id="featured-work" className="mx-auto mt-14 max-w-7xl">
          <SectionHeading
            eyebrow="Featured Work"
            title="Real builds. Real businesses. Real trust problems solved."
            body="The work shows what the pitch means in practice: clearer positioning, stronger first impressions, safer contact paths, and sites that feel credible before the first conversation."
          />

          <div className="mt-8 space-y-8">
            {featuredProjects.map((project) => (
              <CaseStudyCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <SectionHeading
            eyebrow="What Puphr Studio Does"
            title="What these builds have in common."
            body="After the visual style, the practical work is consistent: make the business easier to understand, easier to trust, easier to contact, and easier to keep running."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {improvementCards.map((card) => (
              <InfoCard key={card.title} title={card.title} body={card.body} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <SectionHeading
            eyebrow="Ways to Work Together"
            title="Clear builds. Defined scope. No mystery agency fog."
            body="Most builds are fixed-scope, 2 to 6 week projects with clear deliverables and a launch-ready finish."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {offerCards.map((offer) => (
              <OfferCard key={offer.title} {...offer} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <SectionHeading
            eyebrow="More Selected Work"
            title="Different markets, same goal: make the business easier to trust."
            body="Local service brands, performance products, hospitality, health brands, ecommerce, consultants, and community projects all need a clearer public presence."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="A practical path from messy presence to launch-ready system."
            body="The work starts with clarity, then moves through strategy, build, launch, and support so the final site is not just prettier. It is easier to run."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {processSteps.map(([title, body], index) => (
              <article key={title} className="rounded-[1.25rem] border border-white/10 bg-card/62 p-5 backdrop-blur-sm">
                <span className="text-sm font-bold text-secondary">0{index + 1}</span>
                <h3 className="mt-3 text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-base leading-7 text-foreground/75">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <div className="grid gap-8 rounded-[2rem] border border-primary/20 bg-primary/10 p-6 backdrop-blur-md sm:p-8 lg:grid-cols-[1fr_0.75fr] lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/90">Presence Check</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-5xl">
                Not sure what you need?
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground/80">
                Get a Puphr Studio Presence Check. It reviews homepage clarity, mobile experience, local SEO basics,
                contact form friction, trust signals, speed, security fundamentals, and brand consistency.
              </p>
            </div>
            <div className="flex items-center">
              <a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-secondary/50 bg-secondary px-7 py-3 text-base font-semibold text-secondary-foreground transition hover:brightness-105"
              >
                Request a Presence Check
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto mt-20 max-w-7xl scroll-mt-8">
          <div className="rounded-[2rem] border border-white/10 bg-background/72 p-6 backdrop-blur-md sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/90">Ready for a stronger presence</p>
                <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-foreground sm:text-5xl">
                  Tell us what feels broken. We will help sort the next move.
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground/78">
                  If referrals love you but strangers bounce, your online presence is leaking trust. Puphr Studio rebuilds
                  the parts that matter: brand, copy, site structure, mobile experience, contact flow, and the technical
                  foundation behind it.
                </p>
                <p className="mt-5 text-2xl font-bold leading-tight text-foreground">
                  If your business is better than your current site, fix that.
                </p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-5 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="studio-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/68">
                      Name
                    </label>
                    <Input
                      id="studio-name"
                      value={contactForm.name}
                      onChange={updateContactField("name")}
                      placeholder="Your name"
                      autoComplete="name"
                      required
                      className="h-12 rounded-xl border-white/10 bg-background/70 text-base text-foreground placeholder:text-foreground/38"
                    />
                  </div>
                  <div>
                    <label htmlFor="studio-company" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/68">
                      Business name
                    </label>
                    <Input
                      id="studio-company"
                      value={contactForm.company}
                      onChange={updateContactField("company")}
                      placeholder="Company or project"
                      autoComplete="organization"
                      required
                      className="h-12 rounded-xl border-white/10 bg-background/70 text-base text-foreground placeholder:text-foreground/38"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="studio-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/68">
                      Email
                    </label>
                    <Input
                      id="studio-email"
                      type="email"
                      value={contactForm.email}
                      onChange={updateContactField("email")}
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                      className="h-12 rounded-xl border-white/10 bg-background/70 text-base text-foreground placeholder:text-foreground/38"
                    />
                  </div>
                  <div>
                    <label htmlFor="studio-website" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/68">
                      Website, if you have one
                    </label>
                    <Input
                      id="studio-website"
                      value={contactForm.website}
                      onChange={updateContactField("website")}
                      placeholder="https://example.com"
                      autoComplete="url"
                      className="h-12 rounded-xl border-white/10 bg-background/70 text-base text-foreground placeholder:text-foreground/38"
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/68">
                    What sounds closest?
                  </legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {needOptions.map((need) => (
                      <label
                        key={need}
                        className="flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-background/50 px-3 py-2 text-sm leading-5 text-foreground/80"
                      >
                        <input
                          type="checkbox"
                          checked={contactForm.needs.includes(need)}
                          onChange={toggleNeed(need)}
                          className="h-4 w-4 accent-primary"
                        />
                        <span>{need}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="studio-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/68">
                    What feels broken right now?
                  </label>
                  <Textarea
                    id="studio-message"
                    value={contactForm.message}
                    onChange={updateContactField("message")}
                    placeholder="Tell Puphr Studio what feels off: branding, trust, lead flow, local SEO, content, ecommerce, forms, hosting, or the stack behind the site."
                    required
                    className="min-h-[140px] rounded-xl border-white/10 bg-background/70 text-base text-foreground placeholder:text-foreground/38"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-6 text-foreground/60">
                    No pressure. No spam. Just a practical next-step recommendation.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-secondary/40 bg-secondary px-6 py-3 text-base font-semibold text-secondary-foreground transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Request a Presence Check"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 text-sm text-foreground/70 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Puphr Studio</h2>
            <p className="mt-3 max-w-xl text-base leading-7">
              Built by Puphr Studio, the creative web and brand arm of Puphr. Premium design, secure technical
              foundations, and practical digital systems for growing businesses.
            </p>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-[0.18em] text-foreground/80">Services</h3>
            <div className="mt-3 grid gap-2">
              <a href="#contact" className="transition hover:text-primary">Website rebuilds</a>
              <a href="#contact" className="transition hover:text-primary">Brand refreshes</a>
              <a href="#contact" className="transition hover:text-primary">Local SEO and AEO</a>
              <a href="#contact" className="transition hover:text-primary">Secure forms and hosting</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-[0.18em] text-foreground/80">Contact</h3>
            <div className="mt-3 grid gap-2">
              <a href="mailto:contact@puphr.com" className="transition hover:text-primary">contact@puphr.com</a>
              <span>Upstate SC and beyond</span>
              <a href="https://puphr.com" target="_blank" rel="noreferrer" className="transition hover:text-primary">
                Main Puphr site
              </a>
              <span>Security-minded build process</span>
            </div>
          </div>
        </div>
      </footer>

      <div
        className={`fixed bottom-4 right-4 z-40 transition duration-300 ${
          showFloatingCta ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <a
          href="#contact"
          className="inline-flex min-h-10 items-center justify-center rounded-full border border-primary/40 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_16px_40px_rgba(4,18,21,0.38)] backdrop-blur-md transition hover:brightness-105"
        >
          Get a Presence Check
        </a>
      </div>
    </div>
  );
}

export default App;
