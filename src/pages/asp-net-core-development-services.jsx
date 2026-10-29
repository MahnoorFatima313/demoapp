/**
 * AspnetCoreDevelopmentServices.jsx
 */

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./asp-net-core-development-services.css";
import HEROIMG from '../assets/asp-net-core-development-architecture.webp';
import PROOFIMG from '../assets/QllmDocsMainPage.webp';

/* ───────────── Constants ───────────── */

const SITE = "https://qllmsoft.com";
const PAGE_PATH = "/asp-net-core-development-services";
const PAGE_URL = `${SITE}${PAGE_PATH}`;
const ORG_ID = `${SITE}/#organization`;
const PAGE_ID = `${PAGE_URL}#webpage`;
const SERVICE_ID = `${PAGE_URL}#service`;

const TITLE = "ASP.NET Core Development Services & Migration | QllmSoft";
const DESCRIPTION =
  "Hire ASP.NET Core developers to build APIs and web applications or migrate from .NET Framework. C#, Azure, CI/CD and clear timelines. Talk to QllmSoft.";

const HERO_IMG =
  "https://qllmsoft.com/images/asp-net-core-development-architecture.webp";
const PROOF_IMG =
  "https://qllmsoft.com/images/qllmdocs-aspnet-core-dashboard.webp";

/* ───────────── Content (single source of truth) ───────────── */

const SERVICES = [
  {
    title: "ASP.NET Core API development",
    text: "REST and gRPC APIs that connect your product to ERP, WMS and payment systems, with versioning and automated tests from the first sprint.",
    to: "/api-development-services",
    linkText: "API development and integration services",
  },
  {
    title: ".NET Framework to ASP.NET Core migration",
    text: "A staged move off classic ASP.NET that scopes the database and undocumented business logic first, so the timeline is based on facts.",
    to: "/legacy-system-modernization-services",
    linkText: "legacy system modernization services",
  },
  {
    title: "Web application backends in C#",
    text: "Domain-driven application backends with a clean separation between business logic and infrastructure, built to survive years of change.",
    to: "/web-application-development-services",
    linkText: "web application development services",
  },
  {
    title: "Azure deployment and CI/CD",
    text: "Azure App Service or Azure Kubernetes Service, with GitHub Actions or Azure DevOps pipelines and Key Vault secrets set up during the build.",
  },
  {
    title: "Identity and authorization",
    text: "OAuth2, OpenID Connect or JWT, with role-based or policy-based authorization chosen before the first controller exists.",
    to: "/blog/role-based-vs-policy-based-authorization-asp-net-core",
    linkText: "role-based vs policy-based authorization in ASP.NET Core",
  },
  {
    title: "Distributed systems and messaging",
    text: "gRPC between services, plus RabbitMQ or Azure Service Bus for work that has to survive a temporary outage.",
  },
];

const FIT = [
  {
    title: "Your team already writes C#",
    text: "Reusing existing skills beats retraining a team on a new language. If your developers know .NET, staying in that ecosystem removes months of ramp-up time.",
  },
  {
    title: "You are migrating a legacy .NET Framework system",
    text: "Moving from classic ASP.NET to Core is a smaller leap than jumping to a different stack. It also unlocks cross-platform hosting and years of performance improvements.",
  },
  {
    title: "You are already invested in Azure",
    text: "ASP.NET Core and Azure come from the same vendor and integrate with less friction than a mismatched stack: fewer workarounds, better tooling, faster deployments.",
  },
  {
    title: "You need strong typing at scale",
    text: "C#'s type system catches a category of bugs at compile time that dynamically typed stacks only catch in production. On large, long-lived codebases that adds up.",
  },
];

const STACK = [
  {
    title: "C# and the .NET runtime",
    text: "Modern C# features, async/await pipelines throughout, and attention to memory allocation on workloads where it matters.",
  },
  {
    title: "Entity Framework Core and SQL Server",
    text: "LINQ queries checked for the N+1 problem before they ship, a proper indexing strategy, and transactions that never leave data half-written.",
  },
  {
    title: "Azure",
    text: "App Service for most projects, Azure Kubernetes Service when the load pattern needs it, Redis for caching, and Key Vault for secrets instead of hardcoded config.",
  },
  {
    title: "gRPC and messaging",
    text: "gRPC for service-to-service speed, and RabbitMQ or Azure Service Bus for anything that must survive an outage.",
  },
];

const COST_DRIVERS = [
  "Data migration complexity",
  "Third-party systems to integrate (ERP, WMS, payment processors)",
  "Compliance frameworks that apply (HIPAA, SOC 2, GDPR)",
  "Uptime requirements",
];

const FAQS = [
  {
    q: "Why would a team choose ASP.NET Core over Node.js or Django for a new backend?",
    a: "It usually comes down to what's already in the building. If your team is already writing C#, or your infrastructure already runs on Windows Server or Azure, ASP.NET Core removes a lot of friction that a different stack would introduce. On raw performance it's genuinely competitive, since Kestrel handles concurrent load well, but the honest reason most of our clients pick it is organizational fit, not a benchmark chart.",
  },
  {
    q: "We have an old ASP.NET (not Core) system. Is migrating actually worth it?",
    a: "Usually yes, but not always urgently. Classic ASP.NET on .NET Framework still runs, but it's stuck on Windows-only hosting, it's missing a decade of performance work, and Microsoft's own long-term investment is clearly in Core. If you're actively adding features, migrating sooner saves you from building new work twice. If the system is stable and rarely touched, it can usually wait. We'll tell you which situation you're in rather than push a migration you don't need yet.",
  },
  {
    q: "How long does an ASP.NET Core project typically take?",
    a: "A focused API or a small internal system can land in 6-8 weeks. A full application with a proper domain model, integrations, and a real test suite is more commonly 12-20 weeks. Migration projects vary the most, since the biggest unknown is usually the state of the existing database and how much undocumented business logic is buried in it. We scope that explicitly before committing to a timeline.",
  },
  {
    q: "Do you handle deployment and hosting, or just write the code?",
    a: "Both, if you want it. Most of our ASP.NET Core work ends up on Azure: App Service for straightforward deployments, or Azure Kubernetes Service when the system needs to scale horizontally under load. We set up the CI/CD pipeline as part of the build, not as an afterthought, so deployments aren't a manual process someone has to remember to run correctly.",
  },
];

const TOC = [
  ["services", "Services"],
  ["fit", "When it fits"],
  ["process", "Process"],
  ["stack", "Technology"],
  ["timeline", "Timeline and cost"],
  ["faq", "FAQ"],
];

/* ───────────── Structured data ───────────── */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "QllmSoft",
      url: SITE,
      sameAs: ["https://qllmdocs.com"],
    },
    {
      "@type": "WebPage",
      "@id": PAGE_ID,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", name: "QllmSoft", url: SITE },
      primaryImageOfPage: { "@type": "ImageObject", url: HERO_IMG },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": SERVICE_ID },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        {
          "@type": "ListItem",
          position: 2,
          name: "Web Application Development",
          item: `${SITE}/web-application-development-services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ASP.NET Core Development Services",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": SERVICE_ID,
      name: "ASP.NET Core Development Services",
      serviceType: "ASP.NET Core Development",
      url: PAGE_URL,
      description:
        "QllmSoft builds and modernizes backend systems and web applications on ASP.NET Core and C#, for teams standardized on the Microsoft stack or migrating a legacy .NET Framework system.",
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Place", name: "European Union" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ASP.NET Core development services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

/* ───────────── Component ───────────── */

export default function AspnetCoreDevelopmentServices() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={HERO_IMG} />
        <meta
          property="og:image:alt"
          content="ASP.NET Core backend architecture diagram used by QllmSoft"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={HERO_IMG} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Public+Sans:wght@400;500;600&display=swap"
        />
        <link rel="preload" as="image" href={HERO_IMG} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="aspnet-page">
        {/* ───────── HERO ───────── */}
        <header className="aspnet-hero">
          <span className="aspnet-shape aspnet-shape--glow" aria-hidden="true" />
          <span className="aspnet-shape aspnet-shape--sphere" aria-hidden="true" />
          <span className="aspnet-shape aspnet-shape--ring" aria-hidden="true" />

          <div className="aspnet-container">
          

            <div className="aspnet-hero__grid">
              <div className="aspnet-hero__content">
                <h1 className="aspnet-title">ASP.NET Core Development Services</h1>

                <p className="aspnet-direct-answer">
                  We build and modernize backend systems and web applications on ASP.NET
                  Core and C#, for teams already on the Microsoft stack or migrating off an
                  aging .NET Framework system.
                </p>
                <p className="aspnet-direct-answer aspnet-direct-answer--note">
                  Haven't picked a framework yet? Start with our{" "}
                  <Link to="/web-application-development-services">
                    web application development services
                  </Link>
                  . This page is for teams who already know ASP.NET Core is the tool they
                  want.
                </p>

                <div className="aspnet-hero__cta">
                  <Link
                    to="/contact"
                    className="aspnet-btn aspnet-btn--primary"
                    aria-label="Discuss your ASP.NET Core project with QllmSoft"
                  >
                    Discuss your project
                  </Link>
                  <Link
                    to="/pricing-and-engagement-models"
                    className="aspnet-btn aspnet-btn--secondary"
                    aria-label="View QllmSoft pricing and engagement models"
                  >
                    View engagement models
                  </Link>
                </div>

                <dl className="aspnet-facts">
                  <div>
                    <dt>Focused API</dt>
                    <dd>6-8 weeks</dd>
                  </div>
                  <div>
                    <dt>Full application</dt>
                    <dd>12-20 weeks</dd>
                  </div>
                  <div>
                    <dt>Hosting</dt>
                    <dd>Azure App Service or AKS</dd>
                  </div>
                </dl>
              </div>

              <div className="aspnet-hero__media">
                <figure className="aspnet-hero__frame">
                  <img
                    src={HEROIMG}
                    alt="ASP.NET Core backend architecture diagram used by QllmSoft on client projects"
                    width="560"
                    height="420"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="aspnet-hero__image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </header>

        {/* ───────── ON-PAGE NAV ───────── */}
        <nav className="aspnet-toc" aria-label="On this page">
          <div className="aspnet-container">
            <ul>
              {TOC.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* ───────── SERVICES ───────── */}
        <section className="aspnet-section" id="services" aria-labelledby="services-heading">
          <div className="aspnet-container">
            <div className="aspnet-section__head">
              <h2 id="services-heading">What our ASP.NET Core team delivers</h2>
              <p>
                Six kinds of work we do most often on the Microsoft stack. Each one is
                scoped on its own, so you only pay for what your system needs.
              </p>
            </div>

            <ul className="aspnet-services">
              {SERVICES.map((s) => (
                <li key={s.title} className="aspnet-service">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  {s.to && (
                    <p className="aspnet-service__link">
                      Related:{" "}
                      <Link to={s.to}>{s.linkText}</Link>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── WHEN IT FITS ───────── */}
        <section
          className="aspnet-section aspnet-section--tint"
          id="fit"
          aria-labelledby="fit-heading"
        >
          <div className="aspnet-container aspnet-split">
            <div className="aspnet-split__head">
              <h2 id="fit-heading">When ASP.NET Core is the right choice</h2>
              <p>
                Framework choice matters less than most agencies pretend. ASP.NET Core is
                a strong pick in a few specific situations, and we'd rather you know which
                one you're in before signing a contract.
              </p>
            </div>
            <ul className="aspnet-fit">
              {FIT.map((f) => (
                <li key={f.title}>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── PROCESS ───────── */}
        <section className="aspnet-section" id="process" aria-labelledby="process-heading">
          <div className="aspnet-container">
            <div className="aspnet-section__head">
              <h2 id="process-heading">How an ASP.NET Core build runs</h2>
              <p>
                Nothing exotic: a sequence that catches the expensive mistakes earliest.
              </p>
            </div>

            <ol
              className="aspnet-steps"
              aria-label="QllmSoft ASP.NET Core development process"
            >
              <li>
                <h3>Architecture and security scoping</h3>
                <p>
                  We map the data flow and choose the identity approach (OAuth2, OpenID
                  Connect or JWT) before a controller is written, so security isn't
                  retrofitted. For authorization design, read our guide to{" "}
                  <Link to="/blog/role-based-vs-policy-based-authorization-asp-net-core">
                    role-based vs policy-based authorization in ASP.NET Core
                  </Link>
                  .
                </p>
              </li>
              <li>
                <h3>Clean architecture setup</h3>
                <p>
                  Business logic lives apart from infrastructure code from day one. It's
                  more setup upfront and far less pain when something needs to change six
                  months in.
                </p>
              </li>
              <li>
                <h3>Sprint-based build</h3>
                <p>
                  Two-week cycles, automated tests written alongside the code, and
                  deployment pipelines on GitHub Actions or Azure DevOps from the first
                  sprint.
                </p>
              </li>
              <li>
                <h3>Staged rollout and monitoring</h3>
                <p>
                  Production releases go out in stages, watched through structured logging
                  and telemetry, with a maintenance window agreed before launch rather than
                  negotiated after something breaks.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* ───────── TECH STACK ───────── */}
        <section
          className="aspnet-section aspnet-section--tint aspnet-section--stack"
          id="stack"
          aria-labelledby="stack-heading"
        >
          <span className="aspnet-shape aspnet-shape--ring-sm" aria-hidden="true" />
          <div className="aspnet-container">
            <div className="aspnet-section__head">
              <h2 id="stack-heading">The technology we build with</h2>
              <p>The specific tools, named directly.</p>
            </div>
            <ul className="aspnet-stack">
              {STACK.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── TIMELINE & COST ───────── */}
        <section className="aspnet-section" id="timeline" aria-labelledby="timeline-heading">
          <div className="aspnet-container">
            <div className="aspnet-panel">
              <div className="aspnet-panel__intro">
                <h2 id="timeline-heading">Timeline and what drives cost</h2>
                <p>
                  There's no flat rate for an ASP.NET Core project. These four things set
                  the price:
                </p>
                <ul className="aspnet-drivers">
                  {COST_DRIVERS.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p>
                  For how we structure engagements, see our{" "}
                  <Link to="/pricing-and-engagement-models">
                    pricing and engagement guide
                  </Link>
                  .
                </p>
              </div>

              <div className="aspnet-ranges">
                <div className="aspnet-range">
                  <p className="aspnet-range__value">6-8 weeks</p>
                  <p className="aspnet-range__label">
                    A focused API or internal tool
                  </p>
                </div>
                <div className="aspnet-range">
                  <p className="aspnet-range__value">12-20+ weeks</p>
                  <p className="aspnet-range__label">
                    A full application rebuild or migration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── PROOF ───────── */}
        <section
          className="aspnet-section aspnet-section--tint"
          aria-labelledby="proof-heading"
        >
          <div className="aspnet-container aspnet-proof">
            <div className="aspnet-proof__text">
              <h2 id="proof-heading">Where our .NET work runs in production</h2>
              <p>
                <a
                  href="https://qllmdocs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  QllmDocs
                </a>{" "}
                is a document management platform we built end to end on ASP.NET Core and
                Azure. It's a working reference for how we structure a real production
                system, not just a portfolio piece.
              </p>
              <p>
                Related work: our{" "}
                <Link to="/web-application-development-services">
                  web application development services
                </Link>
                ,{" "}
                <Link to="/api-development-services">
                  API development and integration services
                </Link>
                , and{" "}
                <Link to="/legacy-system-modernization-services">
                  legacy system modernization services
                </Link>{" "}
                for teams migrating off older .NET Framework systems.
              </p>
            </div>
            <figure className="aspnet-proof__figure">
              <img
                src= {PROOFIMG}
                alt="QllmDocs dashboard, a document management platform QllmSoft built on ASP.NET Core and Azure"
                width="560"
                height="380"
                loading="lazy"
                decoding="async"
                className="aspnet-proof__image"
              />
            </figure>
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="aspnet-section" id="faq" aria-labelledby="faq-heading">
          <div className="aspnet-container aspnet-split">
            <div className="aspnet-split__head">
              <h2 id="faq-heading">ASP.NET Core questions, answered</h2>
              <p>
                What teams usually ask before starting an ASP.NET Core project with us.
              </p>
            </div>
            <div className="aspnet-faq">
              {FAQS.map((f, i) => (
                <details key={f.q} className="aspnet-faq__item" open={i === 0}>
                  <summary>
                    <h3>{f.q}</h3>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── CTA ───────── */}
        <section className="aspnet-cta" aria-labelledby="cta-heading">
          <div className="aspnet-container">
            <h2 id="cta-heading">Have an ASP.NET Core project or migration in mind?</h2>
            <p>
              Tell us where the system stands today and where it needs to go. You'll get a
              real scope, not a sales pitch.
            </p>
            <Link
              to="/contact"
              className="aspnet-btn aspnet-btn--primary aspnet-btn--large"
              aria-label="Schedule an ASP.NET Core architecture review with QllmSoft"
            >
              Book an architecture review
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}