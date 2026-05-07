import { ChangeEvent, FormEvent, useState } from "react";
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
};

type ContactFormState = {
  name: string;
  company: string;
  email: string;
  message: string;
  website: string;
};

const defaultContactForm: ContactFormState = {
  name: "",
  company: "",
  email: "",
  message: "",
  website: "",
};

const heroCandidates = [
  {
    headline: "Premium branding, secure builds, and websites that hold up.",
    subheadline:
      "Puphr Studio creates business websites and digital brands that look sharper, create trust faster, show up in search, and stay reliable behind the scenes.",
    microcopy:
      "Creative direction, proper setup, and secure infrastructure in one build.",
  },
  {
    headline: "Websites that look legit fast, build trust, and stay secure.",
    subheadline:
      "For small businesses that need better branding, better visibility, and a setup that does not fall apart after launch.",
    microcopy: "Built to look right, work right, and keep working.",
  },
  {
    headline: "Creative websites with the technical backbone most shops skip.",
    subheadline:
      "Puphr Studio blends branding, UX, search-aware structure, and secure infrastructure so your site feels premium and holds up over time.",
    microcopy: "Design-led work backed by real operational competence.",
  },
];

const activeHero = heroCandidates[0];

const valueStrip = [
  "Branding that stands out in crowded local markets",
  "Design that creates trust before you say a word",
  "Structure that helps you show up in search and AI answers",
  "Forms, email, domains, and hosting set up properly",
];

const featuredProjects: Project[] = [
  {
    name: "therightrepair.com",
    badge: "Featured Build",
    outcome:
      "Turned a local contractor into a polished, trustworthy brand that looks established and captures real leads without the usual form and inbox failures.",
    carouselImages: [rightRepairHero, rightRepairServices, rightRepairStory, rightRepairContact],
    bullets: [
      "Sharper brand presentation and service pages that make the business feel legitimate fast",
      "Spam-resistant contact flow that still lets real customers get through",
      "Email, hosting, and delivery set up to stay fast, reliable, and professional",
    ],
  },
  {
    name: "PopDoc Supplements",
    badge: "Featured Build",
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
    badge: "Featured Build",
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
            className="absolute left-3 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full border border-white/40 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/60"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            aria-label={`Next ${label} screenshot`}
            className="absolute right-3 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full border border-white/40 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/60"
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
          <h2 className={`${featured ? "text-3xl" : "text-2xl"} font-bold text-foreground`}>{project.name}</h2>
        </div>

        <p className={`${featured ? "mt-4 text-base text-foreground/88 sm:text-[1.05rem]" : "mt-3 text-sm text-foreground/82"}`}>
          {project.outcome}
        </p>

        <ul className={`${featured ? "mt-5 space-y-3 text-sm text-foreground/78" : "mt-4 space-y-2.5 text-sm text-foreground/75"}`}>
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
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
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/90">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base">{body}</p>
    </div>
  );
}

function App() {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState<ContactFormState>(defaultContactForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";

  const updateContactField =
    (field: keyof ContactFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setContactForm((current) => ({ ...current, [field]: event.target.value }));
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
        description: "Thanks. Puphr will get back to you soon.",
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

      <main className="relative z-10 px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-background/65 p-6 backdrop-blur-md sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/90">
                  Puphr Studio
                </p>
                <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.02] text-foreground sm:text-5xl lg:text-7xl">
                  {activeHero.headline}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-foreground/82 sm:text-xl">
                  {activeHero.subheadline}
                </p>
                <p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.18em] text-foreground/58 sm:text-[0.8rem]">
                  {activeHero.microcopy}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#featured-work"
                    className="inline-flex items-center justify-center rounded-full border border-primary/50 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
                  >
                    See Featured Work
                  </a>
                  <a
                    href="https://puphr.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-white/25 hover:bg-white/10"
                  >
                    Talk With Puphr
                  </a>
                </div>
              </div>

              <div className="mx-auto flex max-w-[360px] items-center justify-center lg:max-w-none lg:justify-end">
                <img
                  src={puphrStudioLogo}
                  alt="Puphr Studio icon"
                  className="animate-swim h-60 w-60 object-contain sm:h-72 sm:w-72"
                  style={{ objectPosition: "center 54%" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-6 grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {valueStrip.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-card/58 px-5 py-4 text-sm leading-6 text-foreground/82 backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-card/50 p-6 backdrop-blur-sm sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary/95">
                What Puphr Studio is built to do
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Help good businesses look sharper, earn trust faster, and stop losing momentum to sloppy setup.
              </h2>
            </div>
            <div className="space-y-3 text-sm leading-7 text-foreground/74 sm:text-base">
              <p>
                The creative side matters. So do the parts most shops leave fragile: forms, email delivery, domain setup,
                hosting, certificates, spam prevention, and the structure that helps a site show up in search and AI answer surfaces.
              </p>
              <p>
                Puphr Studio brings both together so the front of the site feels premium and the back of the site actually holds up.
              </p>
            </div>
          </div>
        </section>

        <section id="featured-work" className="mx-auto mt-20 max-w-7xl">
          <SectionHeading
            eyebrow="Featured Work"
            title="Standout projects where branding, trust, and technical discipline all had to show up together."
            body="These are the strongest examples of the Puphr Studio balance: premium presentation up front, credible infrastructure and long-term reliability underneath."
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="lg:col-span-2">
              <ProjectCard project={featuredProjects[0]} featured />
            </div>
            <ProjectCard project={featuredProjects[1]} featured />
            <ProjectCard project={featuredProjects[2]} featured />
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="More builds shaped around credibility, visibility, and cleaner customer paths."
            body="Not every project needs the same visual language. The common thread is better positioning, better trust, and better setup than most small business sites get."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <div className="rounded-[2rem] border border-white/10 bg-background/62 p-6 backdrop-blur-md sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/90">Ready for a stronger presence</p>
                <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-foreground sm:text-5xl">
                  If your business is better than your current site, fix that.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-foreground/78 sm:text-lg">
                  Puphr Studio builds websites that look right, work right, and hold up after launch, with the branding clarity,
                  search structure, and secure setup small businesses usually have to piece together from different vendors.
                </p>
              </div>

              <div className="space-y-5 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-foreground/76">
                <p>Better first impression.</p>
                <p>Better trust signals.</p>
                <p>Better search and answer-surface readiness.</p>
                <p>Better operational follow-through after launch.</p>

                <form onSubmit={handleContactSubmit} className="space-y-4 border-t border-white/10 pt-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="studio-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/62">
                        Name
                      </label>
                      <Input
                        id="studio-name"
                        value={contactForm.name}
                        onChange={updateContactField("name")}
                        placeholder="Your name"
                        autoComplete="name"
                        required
                        className="h-11 rounded-xl border-white/10 bg-background/70 text-foreground placeholder:text-foreground/35"
                      />
                    </div>
                    <div>
                      <label htmlFor="studio-company" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/62">
                        Company
                      </label>
                      <Input
                        id="studio-company"
                        value={contactForm.company}
                        onChange={updateContactField("company")}
                        placeholder="Business name"
                        autoComplete="organization"
                        required
                        className="h-11 rounded-xl border-white/10 bg-background/70 text-foreground placeholder:text-foreground/35"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="studio-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/62">
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
                      className="h-11 rounded-xl border-white/10 bg-background/70 text-foreground placeholder:text-foreground/35"
                    />
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="studio-website">Website</label>
                    <Input
                      id="studio-website"
                      tabIndex={-1}
                      value={contactForm.website}
                      onChange={updateContactField("website")}
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label htmlFor="studio-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/62">
                      What needs to change
                    </label>
                    <Textarea
                      id="studio-message"
                      value={contactForm.message}
                      onChange={updateContactField("message")}
                      placeholder="Tell Puphr what feels off right now: branding, trust, lead flow, search visibility, form issues, or the stack behind the site."
                      required
                      className="min-h-[136px] rounded-xl border-white/10 bg-background/70 text-foreground placeholder:text-foreground/35"
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-6 text-foreground/55">
                      This uses the same Puphr contact flow as the main site, backed by the Cloudflare Worker and email delivery setup.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center rounded-full border border-secondary/40 bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : "Talk With Puphr"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-sm text-foreground/65">
          <span>Built by Puphr LLC</span>
          <a
            href="https://puphr.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-primary"
          >
            puphr.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
