import { useEffect } from "react";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Check,
  LifeBuoy,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react";
import ParallaxBackground from "@/components/ParallaxBackground";

type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  promise: string;
  icon: typeof Sparkles;
  outcomes: string[];
  capabilities: { title: string; body: string }[];
  fit: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: "modern-websites",
    name: "Modern Websites",
    eyebrow: "Clear, fast, credible",
    summary:
      "Custom business websites that explain the value quickly, feel polished on every screen, and give the business a dependable foundation.",
    promise:
      "A website that looks established, loads quickly, is easy to evolve, and gives the right customers a clear next step.",
    icon: Sparkles,
    outcomes: [
      "A sharper first impression",
      "Clearer positioning and calls to action",
      "Fast, responsive pages",
      "Strong search and answer-engine foundations",
      "Secure forms and reliable deployment",
      "Content editing when the business needs it",
    ],
    capabilities: [
      {
        title: "Strategy, copy, and structure",
        body: "Shape the message, proof, page hierarchy, and customer journey before visual polish is layered on top.",
      },
      {
        title: "Custom design and development",
        body: "Build a distinctive, accessible experience without leaning on a generic theme or unnecessary plugins.",
      },
      {
        title: "Search-ready foundations",
        body: "Create technically sound pages with useful metadata, structured content, local signals, and strong performance.",
      },
      {
        title: "Modernization",
        body: "Replace brittle WordPress and legacy-hosting setups with a leaner system chosen around the actual business.",
      },
    ],
    fit: [
      "Your current site looks smaller than the business really is.",
      "Customers struggle to understand what you do or why you are different.",
      "The site is slow, fragile, hard to update, or expensive to keep alive.",
      "You need a launch-ready presence, not another unfinished template.",
    ],
    process: ["Audit the current presence", "Define the story and page plan", "Design and build", "Test, launch, and support"],
  },
  {
    slug: "modern-ecommerce",
    name: "Modern Ecommerce",
    eyebrow: "Distinctive storefronts, dependable commerce",
    summary:
      "Shopify storefronts and commerce experiences that make the brand feel premium while keeping shopping, content, and operations practical.",
    promise:
      "A storefront that earns trust, reduces purchase friction, and gives the team a cleaner way to merchandise and grow.",
    icon: ShoppingBag,
    outcomes: [
      "A storefront that feels like the brand",
      "Clearer product discovery and education",
      "Smoother cart and checkout paths",
      "Flexible campaign and editorial content",
      "Analytics and retention integrations",
      "A maintainable commerce foundation",
    ],
    capabilities: [
      {
        title: "Shopify design and development",
        body: "Create a storefront system that balances custom brand expression with Shopify’s dependable commerce engine.",
      },
      {
        title: "Product storytelling",
        body: "Build product pages, collections, comparisons, quizzes, and proof structures that help shoppers decide.",
      },
      {
        title: "Content and campaigns",
        body: "Give the team reusable sections and publishing workflows for launches, education, and seasonal campaigns.",
      },
      {
        title: "Commerce integrations",
        body: "Connect reviews, email, subscriptions, analytics, fulfillment, and other tools when they create measurable value.",
      },
    ],
    fit: [
      "Your store works, but it still feels like a theme.",
      "Shoppers need more confidence or education before buying.",
      "Content updates and campaigns take too much effort.",
      "You need thoughtful integrations without an app stack that becomes its own problem.",
    ],
    process: ["Review the offer and funnel", "Plan the storefront system", "Build and integrate", "Test conversion paths and launch"],
  },
  {
    slug: "growth-integrations",
    name: "Growth & Integrations",
    eyebrow: "Connect the work behind the website",
    summary:
      "Search, booking, CRM, analytics, automation, APIs, AI, and custom systems added where they remove friction or create useful growth.",
    promise:
      "A more connected digital operation built around practical outcomes—not technology added for its own sake.",
    icon: Workflow,
    outcomes: [
      "Better local and organic visibility",
      "Cleaner lead capture and routing",
      "Less repetitive manual work",
      "Useful measurement and reporting",
      "Connected customer and content systems",
      "Custom capability where off-the-shelf tools fall short",
    ],
    capabilities: [
      {
        title: "Search growth",
        body: "Improve local landing pages, service content, structured answers, technical SEO, and Google Business Profile alignment.",
      },
      {
        title: "Lead and booking systems",
        body: "Connect secure forms, scheduling, CRM workflows, notifications, and follow-up without making the customer path clumsy.",
      },
      {
        title: "Automation and APIs",
        body: "Move useful data between systems, remove repetitive steps, and create lightweight internal tools around real workflows.",
      },
      {
        title: "Analytics and AI",
        body: "Add understandable measurement and carefully scoped AI features where they improve service, content, or operations.",
      },
    ],
    fit: [
      "Your website and business tools do not talk to each other.",
      "Leads are getting lost, delayed, or manually copied between systems.",
      "You need stronger local visibility or clearer performance data.",
      "A custom workflow could save meaningful time or improve the customer experience.",
    ],
    process: ["Identify the bottleneck", "Choose the leanest useful system", "Implement and secure", "Measure and refine"],
  },
  {
    slug: "care-plus",
    name: "Puphr Care+",
    eyebrow: "Reliable support after launch",
    summary:
      "Hosting, monitoring, maintenance, content help, and personable technical support that keep the site dependable after the project ships.",
    promise:
      "A well-cared-for website with a real technical partner available when the business needs help.",
    icon: LifeBuoy,
    outcomes: [
      "Dependable hosting and SSL",
      "Monitoring and routine maintenance",
      "Security-minded technical oversight",
      "Content and campaign support",
      "Performance and reliability checks",
      "A familiar person to call when something changes",
    ],
    capabilities: [
      {
        title: "Managed web foundation",
        body: "Keep hosting, DNS, certificates, deployments, backups, and core website infrastructure in dependable shape.",
      },
      {
        title: "Monitoring and maintenance",
        body: "Watch the important paths, handle routine updates, and catch avoidable problems before they become customer-facing failures.",
      },
      {
        title: "Ongoing improvements",
        body: "Support content changes, landing pages, campaigns, integrations, and small enhancements without starting a new project each time.",
      },
      {
        title: "Personable technical support",
        body: "Get practical help from a partner who already understands the site, the stack, and the business context.",
      },
    ],
    fit: [
      "You do not want to become the website administrator.",
      "Your current hosting support is slow, generic, or difficult to reach.",
      "The site needs regular content or campaign updates.",
      "You want continuity after launch instead of a handoff and disappearance.",
    ],
    process: ["Review the current setup", "Stabilize and document", "Monitor and maintain", "Improve as the business evolves"],
  },
];

function StudioHeader() {
  return (
    <header className="relative z-20 px-4 pt-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 rounded-full border border-white/10 bg-background/80 px-4 py-3 backdrop-blur-md sm:px-5">
        <a href="/" className="flex items-center gap-3 font-bold text-foreground">
          <img src="/puphr_logo.svg" alt="" className="h-8 w-8" />
          <span>Puphr Studio</span>
        </a>
        <nav aria-label="Primary navigation" className="flex items-center gap-2 sm:gap-4">
          <a href="/services" className="text-sm font-semibold text-foreground/78 transition hover:text-primary">
            Services
          </a>
          <a
            href="/#contact"
            className="inline-flex min-h-10 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <a
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-card/68 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/45"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">{service.eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-foreground">{service.name}</h2>
      <p className="mt-3 flex-1 text-base leading-7 text-foreground/76">{service.summary}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        Explore this service
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </a>
  );
}

function ServicesFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-8 text-sm text-foreground/65 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Puphr Studio. Upstate SC and beyond.</span>
        <div className="flex gap-5">
          <a href="mailto:contact@puphr.com" className="transition hover:text-primary">contact@puphr.com</a>
          <a href="tel:+18645392435" className="transition hover:text-primary">(864) 539-2435</a>
          <a href="https://puphr.com" className="transition hover:text-primary">Puphr</a>
        </div>
      </div>
    </footer>
  );
}

export function ServicesIndexPage() {
  useEffect(() => {
    document.title = "Services | Puphr Studio";
  }, []);

  return (
    <div className="relative min-h-screen">
      <ParallaxBackground />
      <StudioHeader />
      <main className="relative z-10 px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/10 bg-background/74 p-6 backdrop-blur-md sm:p-10 lg:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Puphr Studio Services</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight text-foreground sm:text-6xl">
              A stronger digital presence, built around what the business actually needs.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80 sm:text-xl">
              Start with a polished, dependable foundation. Add commerce, growth systems, automation, and ongoing care
              only where they create practical value.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2">
          {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </section>

        <section className="mx-auto mt-16 max-w-7xl rounded-[2rem] border border-primary/20 bg-primary/10 p-7 backdrop-blur-md sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Not sure where to start?</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Start with the business problem.</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-foreground/78">
                Puphr will help separate what is urgent, what is useful, and what can wait—then recommend a practical next step.
              </p>
            </div>
            <a href="/#contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-secondary px-7 font-semibold text-secondary-foreground">
              Request a Presence Check
            </a>
          </div>
        </section>
      </main>
      <ServicesFooter />
    </div>
  );
}

export function ServiceDetailPage({ service }: { service: Service }) {
  useEffect(() => {
    document.title = `${service.name} | Puphr Studio`;
  }, [service.name]);

  const Icon = service.icon;
  const proofIcons = [Search, ShieldCheck, Blocks, BarChart3];

  return (
    <div className="relative min-h-screen">
      <ParallaxBackground />
      <StudioHeader />
      <main className="relative z-10 px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-background/76 p-6 backdrop-blur-md sm:p-10 lg:grid-cols-[1fr_0.65fr] lg:items-center lg:p-14">
            <div>
              <a href="/services" className="text-sm font-semibold text-primary transition hover:text-primary/80">← All services</a>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">{service.eyebrow}</p>
              <h1 className="mt-3 text-4xl font-bold leading-tight text-foreground sm:text-6xl">{service.name}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/82 sm:text-xl">{service.summary}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="/#contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 font-semibold text-primary-foreground">
                  Discuss your project
                </a>
                <a href="/#featured-work" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 font-semibold text-foreground">
                  See selected work
                </a>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-primary/20 bg-primary/10 p-7">
              <Icon className="h-10 w-10 text-primary" aria-hidden="true" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-primary">The goal</p>
              <p className="mt-3 text-2xl font-bold leading-9 text-foreground">{service.promise}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">What this can improve</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-5xl">Built for visible business outcomes.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.outcomes.map((outcome) => (
              <div key={outcome} className="flex gap-3 rounded-2xl border border-white/10 bg-card/65 p-5 backdrop-blur-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="font-semibold leading-6 text-foreground/85">{outcome}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Capabilities</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-5xl">A focused scope, shaped around the need.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {service.capabilities.map((capability, index) => {
              const CapabilityIcon = proofIcons[index];
              return (
                <article key={capability.title} className="rounded-[1.5rem] border border-white/10 bg-background/70 p-6 backdrop-blur-md">
                  <CapabilityIcon className="h-6 w-6 text-secondary" aria-hidden="true" />
                  <h3 className="mt-4 text-2xl font-bold text-foreground">{capability.title}</h3>
                  <p className="mt-3 text-base leading-7 text-foreground/76">{capability.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-card/68 p-7 backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-secondary">Good fit</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground">This service makes sense when…</h2>
            <ul className="mt-6 space-y-4">
              {service.fit.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-foreground/80">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.75rem] border border-primary/20 bg-primary/10 p-7 backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">How it works</p>
            <ol className="mt-6 space-y-4">
              {service.process.map((step, index) => (
                <li key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-background/45 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl rounded-[2rem] border border-secondary/25 bg-secondary/10 p-7 text-center backdrop-blur-md sm:p-10">
          <h2 className="text-3xl font-bold text-foreground sm:text-5xl">Build the next useful version of your digital presence.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-foreground/78">
            Tell Puphr what feels outdated, disconnected, or harder than it should be. You will get a practical recommendation for the next move.
          </p>
          <a href="/#contact" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-secondary px-7 font-semibold text-secondary-foreground">
            Start a conversation
          </a>
        </section>
      </main>
      <ServicesFooter />
    </div>
  );
}
