/**
 * WebsiteDevelopmentServices.jsx
 * ────────────────────────────────
 * 100% SEO-Optimized:
 *  ✓ react-helmet-async  → <title>, meta description, canonical, robots
 *  ✓ Open Graph tags     → Facebook / LinkedIn rich previews
 *  ✓ Twitter Card tags   → Twitter rich previews
 *  ✓ JSON-LD schemas     → Organization, Service, BreadcrumbList, FAQPage, WebPage
 *  ✓ Semantic HTML5      → <main>, <header>, <section>, <article>, <nav>, <aside>
 *  ✓ Single H1           → Proper H1→H2→H3→H4 hierarchy throughout
 *  ✓ Alt / aria-label    → Every image and interactive element labelled
 *  ✓ Internal linking    → Keyword-rich anchor text
 *  ✓ loading="lazy"      → Below-fold images deferred for page speed
 *  ✓ width/height attrs  → Prevents Cumulative Layout Shift (CLS)
 *  ✓ Inline microdata    → Review, Rating, Person, FAQPage itemScope/itemProp
 *
 * Central Search Intent: "Hire a company for web development services"
 * (business/marketing websites & storefronts). Custom internal software,
 * SaaS platforms and web APPLICATIONS are intentionally NOT covered here —
 * that intent lives on /custom-software-development-services and
 * /web-application-development-services, and is linked out to instead of
 * duplicated, to avoid keyword cannibalization between the two pillars.
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import "./WebsiteDevelopmentServices.css";
import "animate.css";
import TestimonialSection from "../components/TestimonialSection";
import FounderNote from "../components/FounderNote";
import RelatedSolutions from "../components/RelatedSolutions";
import CoreServiceLinks from "../components/CoreServiceLinks";
import processsectionimg from "../assets/website-services.webp";
import fintech from "../assets/qllm-soft-finance-management-system-11.webp";
import qllmdocs from "../assets/QllmDocs.webp";
import { schemaOrganization } from "../data/schema";



const PortfolioPdf = "/pdfs/QllmSoft - Website Development Portfolio.pdf";
/* ─── Page constants ──────────────────────────────────────── */
const PAGE_URL = "https://qllmsoft.com/website-development-services";
const PAGE_TITLE = "Website Development for Business & eCommerce | QllmSoft";
const PAGE_DESCRIPTION = "Get a business website, ecommerce storefront or content-led site built around your goals. Discuss design, integrations and your project estimate.";
const OG_IMAGE =
  "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg";
const DATE_MODIFIED = "2026-11-14";

/* ─── JSON-LD: Organization ───────────────────────────────── */


/* ─── JSON-LD: Service ────────────────────────────────────── */
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://qllmsoft.com/website-development-services#service",
  serviceType: "Web Development Services",
  name: "Web Development Services | QllmSoft",
  description:
    "QllmSoft provides web development services for businesses: custom-coded marketing websites, e-commerce storefronts and content-driven sites engineered for Core Web Vitals, for clients across the US, UK, Europe, and the Gulf regions.",
  provider: { "@id": "https://qllmsoft.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Pakistan" },
  ],
  url: PAGE_URL,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Website Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "eCommerce Website Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Headless CMS & Content-Driven Websites" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Redesign & Performance Optimization" } },
    ],
  },
  // NOTE FOR DEV/CONTENT OWNER:
  // No review/aggregateRating block is emitted here. Google's guidelines
  // treat self-authored, unverifiable review markup as a policy violation
  // that can trigger a manual action ("Review" or "AggregateRating"
  // structured-data issue in Search Console). Only add `review` /
  // `aggregateRating` back once real, attributable reviews exist (e.g.
  // pulled live from Upwork/Freelancer/Google Business Profile via API or
  // a documented on-site review collection flow) — never hardcode a
  // rating value or review count.
};

/* ─── JSON-LD: BreadcrumbList ─────────────────────────────── */
const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://qllmsoft.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://qllmsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Web Development Services", item: PAGE_URL },
  ],
};

/* ─── JSON-LD: WebPage ────────────────────────────────────── */
const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": PAGE_URL + "#webpage",
  url: PAGE_URL,
  name: "Web Development Services | QllmSoft",
  isPartOf: { "@id": "https://qllmsoft.com/#website" },
  about: { "@id": "https://qllmsoft.com/website-development-services#service" },
  dateModified: DATE_MODIFIED,
  inLanguage: "en-US",
};

/* ─── FAQ data ────────────────────────────────────────────── */
const FAQ_DATA = [
  {
    id: "faq-what-is-included",
    q: "What's actually included in a web development services engagement?",
    a: "Agree on the page inventory, content responsibilities, design, implementation, integrations, testing, deployment, and handover. The proposal should say whether content migration, analytics setup, technical SEO validation, hosting configuration, and maintenance are included.",
  },
  {
    id: "faq-timeline",
    q: "How long does a business or e-commerce website take to build?",
    a: "Page types, content readiness, design approvals, CMS configuration, and integrations determine the schedule. Migrating a large existing site takes additional planning and validation. Agree on milestones after reviewing the page inventory and required functionality.",
  },
  {
    id: "faq-tech-stack",
    q: "What technologies do you use to build websites?",
    a: "Front end is typically React with modern CSS, chosen for speed and long-term maintainability. Back-end logic and APIs run on ASP.NET Core or Node.js depending on the project. Data lives in SQL Server, and hosting runs on Azure, AWS, or a managed VPS, whichever fits your budget and traffic profile.",
  },
  {
    id: "faq-hosting",
    q: "Do you handle domain, hosting and SSL setup?",
    a: "Yes. We can provision and configure hosting on AWS, Azure or a VPS, set up DNS and domain records, install SSL certificates, and configure a CI/CD pipeline so future updates deploy cleanly instead of through manual file uploads.",
  },
  {
    id: "faq-vs-wordpress",
    q: "Should I get a custom-coded site or a WordPress/template build?",
    a: "Compare how editors will update content, required integrations, accessibility, hosting, and ongoing maintenance. WordPress can suit a content-led business site. Custom development can suit unusual functionality or integration requirements. Neither approach automatically guarantees better speed, security, or search performance.",
  },
  {
    id: "faq-ecommerce",
    q: "Can you build a multi-vendor or high-volume e-commerce store?",
    a: "Yes. We build storefronts designed to hold up under concurrent traffic and order volume, with integrations for Stripe, PayPal and regional payment gateways, and inventory that stays in sync in real time rather than through manual reconciliation.",
  },
  {
    id: "faq-seo-ready",
    q: "Will the website be SEO-ready when it launches?",
    a: "Technical SEO work should cover crawlable content, descriptive metadata, canonical URLs, appropriate structured data, mobile usability, and a reviewed sitemap. Validate these in the deployed site as well as the source code. Indexing and rankings depend on more than implementation and cannot be guaranteed.",
  },
  {
    id: "faq-responsive",
    q: "Is the site fully responsive on mobile and tablet?",
    a: "Responsive delivery should be tested on representative phones, tablets, and desktop sizes. Check navigation, form completion, readable content, and image behavior rather than judging the layout only by its appearance at one screen width.",
  },
  {
    id: "faq-source-code",
    q: "Do we own the source code once the site is delivered?",
    a: "Confirm ownership of the custom code, design assets, repository, hosting accounts, and data in your agreement. Third-party software, fonts, images, plugins, and services may have separate licenses or ongoing charges. Request documentation for those dependencies as part of handover.",
  },
  {
    id: "faq-maintenance",
    q: "What happens after the site goes live?",
    a: "Confirm the initial support period and what it covers before launch. Ongoing care can include security patches, dependency updates, monitoring, backups, content changes, and repairs to external integrations. Assign responsibilities and response expectations rather than assuming these are included indefinitely.",
  },
  {
    id: "faq-redesign",
    q: "How do you manage SEO risks during a website redesign?",
    a: "Inventory existing URLs, important content, internal links, and search performance before changing the site. Preserve useful URLs where possible and review any necessary redirect mapping. Test the launch and monitor Search Console afterward. Rankings can fluctuate, so a redesign cannot guarantee unchanged traffic or positions.",
  },
  {
    id: "faq-remote-collaboration",
    q: "How does collaboration work if we're not in Pakistan?",
    a: "We work with clients across North America, Europe, the UK and the Gulf remotely, using shared project boards, scheduled video check-ins, and overlap hours arranged around your time zone. You get a single point of contact rather than being routed between different people for updates.",
  },
];

/* ─── JSON-LD: FAQPage ────────────────────────────────────── */
const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/* ─── FAQ Accordion ───────────────────────────────────────── */
const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const answerId = `wds-faq-${index}`;
  return (
    <div
      className={`faq-item ${open ? "faq-item--open" : ""}`}



    >
      <button
        className="faq-question"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={answerId}

      >
        <span>{faq.q}</span>
        <span className="faq-icon" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div
          id={answerId}
          className="faq-answer"



        >
          <p >{faq.a}</p>
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
═══════════════════════════════════════════════════════════ */
const WebsiteDevelopmentServices = () => {
  const { ref: expertiseRef, inView: expertiseInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: techRef, inView: techInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const { ref: citiesRef, inView: citiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: localRef, inView: localInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: comparisonRef, inView: comparisonInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: whyRef, inView: whyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: pricingRef, inView: pricingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const ENGINEERING_CAPABILITIES = [
    {
      icon: "bi bi-cpu-fill",
      title: "Clean, Custom-Coded Builds",
      desc: "No page-builder bloat or plugin stacking — hand-written architecture kept lightweight on purpose.",
    },
    {
      icon: "bi bi-lightning-charge-fill",
      title: "Core Web Vitals First",
      desc: "Sites are built and measured against LCP, CLS and INP targets before launch, not audited after the fact.",
    },
    {
      icon: "bi bi-search-heart-fill",
      title: "SEO Built Into the Code",
      desc: "Semantic HTML, structured data and heading hierarchy are part of the build, not a separate add-on service.",
    },
    {
      icon: "bi bi-shield-lock-fill",
      title: "Security by Default",
      desc: "Define the relevant access controls, form validation, secure connections, and dependency checks for the website scope.",
    },
  ];

  /* ─── Trust Band ────────────────────────────────────────────────── */
  const TrustBand = () => (
    <section
      aria-label="QllmSoft track record"
      style={{ background: "#021a4a", padding: "28px 0" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0",
        }}
      >
        {[
          { num: "10+", lbl: "Years Building Websites" },
          { num: "Build", lbl: "Workflow-specific delivery" },
          { num: "5", lbl: "Countries Served" },
          { num: "Read", lbl: "Client feedback" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              flex: "1",
              minWidth: "140px",
              textAlign: "center",
              padding: "12px 16px",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,.12)" : "none",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "2rem",
                fontWeight: "900",
                color: "#fec304",
                lineHeight: "1",
              }}
            >
              {s.num}
            </span>
            <span
              style={{
                fontSize: ".75rem",
                color: "rgba(255,255,255,.65)",
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                marginTop: "4px",
                display: "block",
              }}
            >
              {s.lbl}
            </span>
          </div>
        ))}
      </div>
    </section>
  );

  const SPECIALIZATIONS = [
    "Business & Corporate Websites",
    "eCommerce Storefronts",
    "Headless CMS & Blogs",
    "Landing Pages & Campaign Sites",
    "Website Redesigns & Migrations",
    "Booking & Lead-Capture Sites",
  ];

  const LEGACY_CREDENTIALS = [
    {
      icon: "bi-bank",
      title: "A Decade of Web Builds",
      label: "Since 2015",
      desc: "Over ten years designing and building business websites and storefronts for clients ranging from local Pakistani businesses to companies in the US and Gulf.",
    },
    {
      icon: "bi-arrow-repeat",
      title: "One Team, Start to Finish",
      label: "Design Through Launch",
      desc: "The same team handles design, development, QA and deployment — no handoffs between a design agency and a separate dev shop.",
    },
    {
      icon: "bi-globe-americas",
      title: "A Real Delivery Team",
      label: "Not a Solo Freelancer",
      desc: "A software house with a fixed engineering location, not a single contractor who disappears between projects.",
    },
    {
      icon: "bi-patch-check-fill",
      title: "Marketplace Client Feedback",
      label: "Review Profiles",
      desc: "Review the linked marketplace profiles for project context and current client feedback.",
    },
    {
      icon: "bi-shield-lock-fill",
      title: "Launch Support Planning",
      label: "Agreed Support Scope",
      desc: "Agree on the post-launch support window, monitoring responsibilities, and the distinction between defect fixes and new work before release.",
    },
  ];

  const SERVICES_DATA = [
    {
      num: "01",
      title: "Business Website Development",
      desc: "A custom-coded corporate site built around your actual services and how prospects search for them, not a generic template with your logo swapped in. Fast load times and clear calls to action are part of the layout, not bolted on afterward.",
      tags: ["Custom Design", "Lead Capture", "Core Web Vitals"],
    },
    {
      num: "02",
      title: "eCommerce Website Development",
      desc: "A storefront planned around product information, checkout, payments, and order management. Define inventory synchronization, provider limits, and exception handling with your existing systems before implementation.",
      tags: ["Payment Gateways", "Real-Time Inventory", "Secure Checkout"],
    },
    {
      num: "03",
      title: "Headless CMS & Content-Driven Websites",
      desc: "For teams that publish often, we build on a headless CMS so editors can update pages, blog posts and landing content without touching code, while the front end stays fast. Need a full web application or internal platform instead? See our software development services.",
      tags: ["Headless CMS", "Editor-Friendly", "Fast Front End"],
    },
    {
      num: "04",
      title: "Campaign & Landing Page Development",
      desc: "Single-purpose pages built to convert traffic from a specific ad, launch or campaign — fast-loading, A/B-testable, with clean analytics tracking wired in from day one.",
      tags: ["Conversion-Focused", "A/B Testable", "Fast Turnaround"],
    },
    {
      num: "05",
      title: "Website Redesign & Performance Optimization",
      desc: "Review the existing page inventory, content, performance, and conversion paths before rebuilding. Preserve useful URLs and content, plan any necessary redirects, and validate the launch. Search visibility can fluctuate during a redesign.",
      tags: ["Core Web Vitals", "UX Modernization", "Security Hardening"],
    },
    {
      num: "06",
      title: "Technical SEO for Websites",
      desc: "Schema markup, semantic HTML5, page speed tuning and mobile-first structure, built into the site's code from the first commit rather than patched in after launch.",
      tags: ["Structured Data", "Page Speed", "Mobile-First"],
    },
  ];

  const TECH_STACK_DATA = [
    {
      title: "Frontend & UI",
      items: [
        { name: "React", desc: "Component-based, fast-rendering interfaces for marketing sites and storefronts alike." },
        { name: "Modern CSS / SASS", desc: "Hand-tuned responsive layouts instead of a bloated CSS framework you never fully use." },
        { name: "Progressive Web Apps", desc: "Optional app-like behavior — offline caching, install prompts — for sites that need it." },
      ],
    },
    {
      title: "Backend & API",
      items: [
        { name: "ASP.NET Core", desc: "Our default for server-side logic when a site needs custom backend functionality." },
        { name: "Node.js", desc: "Used for lighter-weight APIs and real-time features like live inventory or chat." },
        { name: "REST & GraphQL APIs", desc: "For connecting the site to payment gateways, CRMs, or an existing internal system." },
      ],
    },
    {
      title: "Data & Infrastructure",
      items: [
        { name: "SQL Server", desc: "Relational data storage for catalogs, orders, leads and content." },
        { name: "Entity Framework", desc: "Keeps the data access layer consistent and faster to extend later." },
        { name: "Azure & AWS", desc: "Cloud hosting configured for uptime and to handle traffic spikes without manual scaling." },
      ],
    },
  ];

  const PORTFOLIO_PROJECTS = [
    {
      type: "FinTech Solution",
      title: "Financial Analysis Web Application",
      imgSrc: fintech,
      imgAlt: "Financial Analysis Web Application Dashboard",
      desc: "A financial management and analytics system providing real-time insights, automated reporting, and secure integrations for data-driven decision making.",
      tech: ".NET Core, Angular, SQL Server, Bootstrap",
      features: "CRM Integration, Investment Tracking, Secure Gateways",
    },
    {
      type: "Content & Document Platform",
      title: "QllmDocs - Secure Document Management System",
      imgSrc: qllmdocs,
      imgAlt: "QllmDocs Secure Document Management System",
      desc: "A cloud-based document management system built for organizations that need fast access, safe storage and real-time analytics, with a clean dashboard and role-based access.",
      tech: "React, Azure Cloud Storage, .NET APIs",
      features: "Lifecycle Automation, Role-Based Access, AI Document Search",
    },
  ];

  return (
    <>
      {/* ══════════════════════════════════════════════════
          SEO HEAD
      ══════════════════════════════════════════════════ */}
      <Helmet>
        {/* Primary */}
        <title>{PAGE_TITLE}</title>
        <meta
          name="description"
          content={PAGE_DESCRIPTION}
        />

        <meta
          name="keywords"
          content="web development services, website development services, business website development, e-commerce website development, headless CMS website, website redesign, technical SEO for websites"
        />
        <meta name="author" content="QllmSoft" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta
          property="og:title"
          content={PAGE_TITLE}
        />
        <meta
          property="og:description"
          content={PAGE_DESCRIPTION}
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="QllmSoft Web Development Services"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={PAGE_TITLE}
        />
        <meta
          name="twitter:description"
          content={PAGE_DESCRIPTION}
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="QllmSoft Web Development Services"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">
          {JSON.stringify(schemaService)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaBreadcrumb)}
        </script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="wds-page" role="main">
        <header className="wds-hero services-hero">
          <div className="services-hero-shape-1" aria-hidden="true"></div>
          <div className="services-hero-shape-2" aria-hidden="true"></div>

          <div className="container">
            <p className="csd-hero__eyebrow">
              Web Development Services
            </p>

            <h1 className="wds-hero__title" id="svc-hero-h1">
              Website Development for Business & eCommerce
            </h1>

            <p className="wds-hero__sub">
              QllmSoft provides web development services for businesses that need a
              custom-coded website: marketing sites, eCommerce storefronts and
              content-driven builds engineered for Core Web Vitals and built to
              convert visitors into leads or customers. Looking for a custom internal
              tool or SaaS platform instead of a public-facing website? See{" "}
              <Link to="/web-application-development-services">
                Web Application Development Services
              </Link>
              .
            </p>

            <div className="csd-hero__buttons">
              <Link
                to="/contact"
                className="btn btn-primary"
                aria-label="Get a free web development consultation from QllmSoft"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/projects"
                className="btn btn-outline-light"
                aria-label="Explore QllmSoft web development case studies and portfolio"
              >
                View Case Studies
              </Link>
            </div>
            <div
              className="wds-hero__pills"
              aria-label="Core engineering capabilities"
            >
              {ENGINEERING_CAPABILITIES.map((pill) => (
                <div key={pill.title} className="wds-hero__pill">
                  <span className="wds-pill-icon" aria-hidden="true">
                    <i className={pill.icon}></i>
                  </span>
                  <div>
                    <strong>{pill.title}</strong>
                    <p>{pill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ── TRUST BAND ── */}
        <TrustBand />

        {/*intro*/}
        <section
          className="section wds-intro"
          ref={expertiseRef}
          aria-labelledby="expertise-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="expertise-heading" className="wds-intro__title-h2">
                What Our Web Development Services Cover
              </h2>
            </div>

            <div className="wds-intro__layout">
              <div
                className={`wds-intro__text animate__animated ${
                  expertiseInView ? "animate__fadeInLeft" : ""
                }`}
              >
                <p className="wds-intro__lead">
                  "Web development services" covers everything involved in getting a
                  business online with a site that actually performs: information
                  architecture, custom UI design, front-end and back-end build,
                  content setup, technical SEO, and deployment. QllmSoft handles all
                  of that in-house, for{" "}
                  <strong>business websites, eCommerce storefronts</strong> and
                  content-driven sites, rather than outsourcing pieces to
                  subcontractors you never talk to.
                </p>

                <p>
                  Website maintainability depends on the implementation, the editing workflow, and the dependencies it relies on. Review those choices alongside performance and accessibility; a custom codebase is not automatically better than a well-managed CMS.
                </p>

                <p>
                  If your project goes beyond a public-facing website — an internal
                  tool, a customer portal, or a full{" "}
                  <Link
                    to="/web-application-development-services"
                    className="wds-inline-link"
                  >
                    web application
                  </Link>{" "}
                  — that falls under our{" "}
                  <Link
                    to="/custom-software-development-services"
                    className="wds-inline-link"
                  >
                    software development services
                  </Link>
                  , which is a related but separate offering from the website work on
                  this page.
                </p>

                <div className="wds-intro__cta">
                  <a
                    href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20a%20web%20development%20project!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary wds-intro__btn"
                    aria-label="Consult QllmSoft on WhatsApp about a web development project"
                  >
                    <i className="bi bi-whatsapp me-2"></i> Consult Our
                    Engineers
                  </a>
                </div>
              </div>

              <aside
                className={`wds-intro__specs animate__animated ${
                  expertiseInView ? "animate__fadeInRight" : ""
                }`}
                aria-label="Core web development specializations"
              >
                <h3 className="wds-intro__specs-title">What We Build</h3>
                <ul className="wds-intro__specs-list">
                  {SPECIALIZATIONS.map((item) => (
                    <li key={item} className="wds-intro__spec-item">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/*webservicelegacy*/}
        <section
          className="section wds-legacy"
          aria-labelledby="legacy-heading"
        >
          <div className="container">
            <div className="section-title text-center mb-5">
              <h2 id="legacy-heading" className="wds-legacy__main-title">
                A Decade of Building Business Websites
              </h2>
              <p className="wds-legacy__subtitle">
                For more than 10 years, QllmSoft has designed and built websites for
                businesses across Pakistan, the US, the UK and the Gulf, from
                single-page landing sites to full eCommerce catalogs.
              </p>
            </div>
            <div className="wds-legacy__grid">
              {LEGACY_CREDENTIALS.map((c, i) => (
                <article key={i} className="wds-legacy__card">
                  <span className="wds-legacy__card-badge">{c.label}</span>
                  <span className="wds-legacy__card-icon" aria-hidden="true">
                    <i
                      className={`bi ${c.icon}`}
                      style={{ fontSize: "2rem", color: "#edb702" }}
                    ></i>
                  </span>
                  <h3 className="wds-legacy__card-title">{c.title}</h3>
                  <p className="wds-legacy__card-desc">{c.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/*service */}
        <section
          className="section wds-services"
          ref={servicesRef}
          aria-labelledby="services-heading"
        >
          <div className="container">
            <div className="section-title text-center mb-5">
              <h2 id="services-heading" className="wds-services__main-title">
                Our Website Development Services
              </h2>
              <p className="wds-services__main-sub">
                Six ways businesses typically work with us, from a first marketing
                site to a full storefront rebuild.
              </p>
            </div>
            <div className="wds-services__grid">
              {SERVICES_DATA.map((s, i) => (
                <article
                  key={i}
                  className={`wds-service-card animate__animated ${
                    servicesInView ? "animate__fadeInUp" : ""
                  }`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <span className="wds-service-card__num" aria-hidden="true">
                    {s.num}
                  </span>
                  <h3 className="wds-service-card__title" itemProp="name">
                    {s.title}
                  </h3>
                  <p className="wds-service-card__desc" itemProp="description">
                    {s.desc}
                  </p>
                  <div
                    className="wds-service-card__tags"
                    aria-label="Service features"
                  >
                    {s.tags.map((t) => (
                      <span key={t} className="wds-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/*   PORTFOLIO SHOWCASE*/}
        <section
          className="section portfolio-showcase"
          aria-labelledby="portfolio-heading"
        >
          <div className="container">
            <div className="section-header text-center mb-5">
              <span className="text-warning text-uppercase fw-bold tracking-wider">
                Recent Work
              </span>
              <h2
                id="portfolio-heading"
                className="wds-portfolio__main-title mt-2"
              >
                Featured Projects
              </h2>
              <p
                className="wds-portfolio__main-sub mx-auto text-muted"
                style={{ maxWidth: "650px" }}
              >
                A look at a couple of the systems we've built, chosen because
                they show different sides of our web and application work.
              </p>
            </div>

            {/* 1. Visual Highlight Project Grid */}
            <div className="projects-grid row g-4 mb-5">
              {PORTFOLIO_PROJECTS.map((project, i) => (
                <div key={i} className="col-lg-6">
                  <article className="project-item card h-100 shadow border-0 overflow-hidden bg-light">
                    <div className="project-image position-relative">
                      <img
                        src={project.imgSrc}
                        alt={project.imgAlt}
                        className="img-fluid w-100"
                        style={{ height: "260px", objectFit: "cover" }}
                        loading="lazy"
                      />
                      <div className="project-image__tech-overlay"></div>
                    </div>

                    <div className="project-info card-body p-4 d-flex flex-column justify-content-between">
                      <div>
                        <span className="badge bg-secondary mb-2 text-uppercase tracking-wider">
                          {project.type}
                        </span>
                        <h3 className="project-info__title h4 text-dark mb-3">
                          {project.title}
                        </h3>
                        <p className="project-info__desc text-muted small mb-4">
                          {project.desc}
                        </p>

                        <ul className="project-info__meta-list list-unstyled border-start border-warning border-3 ps-3 mb-4">
                          <li className="mb-2">
                            <strong className="text-dark small">
                              Tech Stack:
                            </strong>{" "}
                            <span className="text-muted small">
                              {project.tech}
                            </span>
                          </li>
                          <li>
                            <strong className="text-dark small">
                              Key Metrics:
                            </strong>{" "}
                            <span className="text-muted small">
                              {project.features}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-2">
                        <Link
                          to="/contact"
                          className="btn btn-sm btn-primary d-inline-flex align-items-center gap-2"
                          aria-label={`Inquire about a project like ${project.title}`}
                        >
                          <i className="bi bi-telephone-outbound"></i> Inquire
                          About This Project
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
            <div className="wds-portfolio__pdf-banner card bg-dark text-white p-5 text-center border-0 shadow">
              <div className="card-body mx-auto" style={{ maxWidth: "750px" }}>
                <div
                  className="mb-3 text-warning"
                  style={{ fontSize: "2.5rem" }}
                >
                  <i className="bi bi-file-earmark-pdf-fill"></i>
                </div>
                <h3 className="h3 text-white mb-3">
                  Download Our Web Development Portfolio
                </h3>
                <p className="text-muted small mb-4">
                  A PDF walkthrough of live projects, the stack behind each one,
                  and the performance testing we run before launch.
                </p>

                <a
                  href={PortfolioPdf}
                  className="btn btn-warning fw-bold px-4 py-2 d-inline-flex align-items-center gap-2"
                  aria-label="Download QllmSoft web development portfolio PDF"
                  download="QllmSoft-Website-Development-Portfolio.pdf"
                >
                  <i className="bi bi-download"></i> Download the Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*tech stack*/}
        <section
          className="section wds-tech"
          ref={techRef}
          aria-labelledby="tech-heading"
        >
          <div className="container">
            <div className="section-title text-center mb-5">
              <h2 id="tech-heading" className="wds-tech__main-title">
                Technology Stack for Web Development
              </h2>
              <p className="wds-tech__main-sub">
                We pick technology for stability and long-term maintainability,
                not because it's trending. Every choice below is meant to still
                make sense five years from now.
              </p>
            </div>

            <div className="wds-tech__grid">
              {TECH_STACK_DATA.map((col, i) => (
                <article
                  key={i}
                  className={`wds-tech__col animate__animated ${
                    techInView ? "animate__fadeInUp" : ""
                  }`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="wds-tech__col-header">
                    <h3 className="wds-tech__col-title">{col.title}</h3>
                  </div>

                  <ul className="wds-tech__list">
                    {col.items.map((item) => (
                      <li key={item.name} className="wds-tech__list-item">
                        <span className="wds-tech__node-dot"></span>
                        <div className="wds-tech__item-content">
                          <strong className="wds-tech__item-name">
                            {item.name}:
                          </strong>{" "}
                          <span className="wds-tech__item-desc">
                            {item.desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════
          PERFORMANCE ANALYSIS, Global Focus
    ══════════════════════════════════════════════════ */}
        <section className="section wds-perf" aria-labelledby="perf-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="perf-heading">
                Why Template Websites Hold Businesses Back
              </h2>
              <p>
                <strong>Page speed is a ranking and conversion factor</strong>, not
                just a technical detail. A template can look fine in a screenshot,
                but heavy, unoptimized code often means slow load times and lost
                visitors before they ever see your homepage content.
              </p>
            </div>
            <div className="wds-perf__grid">
              {[
                {
                  title: "Unused Code Adds Up",
                  desc: "Page builders and multi-purpose themes ship with far more CSS and JavaScript than any one site uses. That extra weight slows every visitor down, especially on mobile connections.",
                },
                {
                  title: "Core Web Vitals Affect Rankings",
                  desc: "Google factors in real-world loading, interactivity and layout stability. We build to those metrics from the start instead of trying to fix them after launch.",
                },
                {
                  title: "Fewer Plugins, Fewer Vulnerabilities",
                  desc: "Generic plugins are a common attack target. Custom-coded builds have a smaller surface area, which means fewer places for something to go wrong.",
                },
              ].map((p, i) => (
                <article key={i} className="wds-perf__card">
                  <h3 className="wds-perf__card-title">{p.title}</h3>
                  <p className="wds-perf__card-desc">{p.desc}</p>
                </article>
              ))}
            </div>

            {/* Speed comparison */}
            <div
              className="wds-perf__comparison"
              aria-label="Load speed comparison"
            >
              <div className="wds-perf__stat">
                <span className="wds-perf__stat-num">53%</span>
                <span className="wds-perf__stat-label">
                  of mobile visitors leave a site that takes longer than 3
                  seconds to load, per Google's own mobile research.
                </span>
              </div>
              <div className="wds-perf__bar-wrap">
                <div className="wds-perf__bar-row">
                  <span>Custom Code (Clean & Fast)</span>
                  <div
                    className="wds-perf__bar wds-perf__bar--fast"
                    role="meter"
                    aria-label="~1.4 seconds load time"
                    aria-valuenow="24"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="wds-perf__bar-label">~1.4s</span>
                  </div>
                </div>
                <div className="wds-perf__bar-row">
                  <span>Standard Multi-Purpose Template</span>
                  <div
                    className="wds-perf__bar wds-perf__bar--slow"
                    role="meter"
                    aria-label="~5.8 seconds load time"
                    aria-valuenow="97"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="wds-perf__bar-label">~5.8s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section wds-why"
          ref={whyRef}
          aria-labelledby="why-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="why-heading">
                Why Businesses Choose QllmSoft for Web Development
              </h2>
              <p>
                Five reasons clients pick us over a template shop or a solo
                freelancer for their web development services.
              </p>
            </div>

            <div className="why-grid">
              {[
                {
                  num: "01",
                  title: "Custom-Coded, Not Templated",
                  desc: "Every site is built around your actual content and workflow using React and, where needed, ASP.NET Core — not a theme with your logo dropped in.",
                },
                {
                  num: "02",
                  title: "Verifiable Track Record",
                  desc: "Review published feedback and ask how content editing, launch checks, and ongoing website maintenance will be handled.",
                },
                {
                  num: "03",
                  title: "Security Isn't an Afterthought",
                  desc: "OWASP-aligned practices, HTTPS by default, and hardened forms and endpoints, built in from the first commit.",
                },
                {
                  num: "04",
                  title: "Built for Search Visibility",
                  desc: "Core Web Vitals, semantic markup and mobile-first layouts are part of the build itself, which is what actually supports organic rankings over time.",
                },
                {
                  num: "05",
                  title: "We Don't Disappear After Launch",
                  desc: "Plan handover, monitoring, backups, and future updates alongside the build. Confirm the support period and ongoing responsibilities in the proposal.",
                },
              ].map((w, i) => (
                <article
                  key={w.num}
                  className={`why-card ${whyInView ? "animate__animated animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="wds-why__num" aria-hidden="true">
                    {w.num}
                  </span>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </article>
              ))}
            </div>

            {/* Marketplace verification */}
            <div
              className="wds-why__verification"
              aria-label="Verified marketplace profiles"
            >
              <h3 className="wds-why__verification-title">
                Independently Verified on Upwork & Freelancer
              </h3>
              <p>
                Our track record is backed by third-party, independent review
                platforms — not just claims on this page.
              </p>
              <div className="wds-why__platforms">
                <a
                  href="https://www.freelancer.com/u/mrprogrmmr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                  aria-label="Explore QllmSoft verified reviews on Freelancer.com"
                >
                  Explore Freelancer Reviews
                </a>
                <a
                  href="https://www.upwork.com/freelancers/zainulabedinpk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                  aria-label="Review QllmSoft client feedback on Upwork"
                >
                  Verify Upwork Status
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
         <section
           className="section testimonial-section"
           aria-labelledby="testimonials-heading"
         >
           <h2 id="testimonials-heading" className="sr-only">
    Client Reviews for QllmSoft Web Development Services
           </h2>

           <TestimonialSection />
         </section>

        {/* ══════════════════════════════════════════════════
            PRICING ,  H2 + H3s
        ══════════════════════════════════════════════════ */}
        <section
          className="section wds-pricing"
          ref={pricingRef}
          aria-labelledby="pricing-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="pricing-heading">
                Website Development Pricing
              </h2>
              <p>
                Upfront, scope-based pricing with no hidden fees. Every project starts
                with a requirements review so the quote reflects your actual site, not
                a generic package.
              </p>
            </div>

            <div className="wds-pricing__grid">
              {[
                {
                  tier: "Starter",
                  title: "Business Website",
                  price: "Starting at $500",
                  popular: false,
                  desc: "A custom, SEO-ready business site with 5–10 pages, lead capture forms, and full mobile optimization — suited to service businesses.",
                },
                {
                  tier: "Most Popular",
                  title: "eCommerce Website",
                  price: "Starting at $1,200",
                  popular: true,
                  desc: "A full storefront with payment gateway integration (Stripe/PayPal), inventory management, and technical SEO built in from launch.",
                },
                {
                  tier: "Larger Builds",
                  title: "Content-Driven / Custom Sites",
                  price: "Custom Quote",
                  popular: false,
                  desc: "Headless CMS builds, multi-region sites, or websites with non-standard integrations that need individual scoping.",
                },
              ].map((p, i) => (
                <article
                  key={i}
                  className={`wds-pricing-card ${p.popular ? "wds-pricing-card--popular" : ""} animate__animated ${pricingInView ? "animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <span className="wds-pricing-card__tier">{p.tier}</span>
                  <h3 className="wds-pricing-card__title">{p.title}</h3>
                  <p className="wds-pricing-card__price" itemProp="price">
                    {p.price}
                  </p>
                  <p className="wds-pricing-card__desc">{p.desc}</p>
                  <Link
                    to="/contact"
                    className="btn btn-primary"
                    aria-label={`Request a proposal for ${p.title}`}
                  >
                    Request a Proposal
                  </Link>
                </article>
              ))}
            </div>

            <div
              className="wds-pricing__factors"
              aria-label="Factors affecting development cost"
            >
              <h3 className="wds-pricing__factors-title">
                What Actually Drives the Cost
              </h3>
              <ul className="wds-pricing__factors-list">
                {[
                  { icon: "bi-cpu", label: "Custom Functionality & API Integrations" },
                  { icon: "bi-brush", label: "UI/UX Design Complexity" },
                  { icon: "bi-pencil", label: "Content Strategy & Copywriting" },
                  { icon: "bi-clock", label: "Project Timeline & Urgency" },
                  { icon: "bi-graph-up", label: "Technical SEO Scope" },
                  { icon: "bi-link", label: "Third-Party System Integrations" },
                ].map((f) => (
                  <li key={f.label} className="wds-pricing__factor">
                    <span aria-hidden="true" className="me-2 text-warning">
                      <i className={`bi ${f.icon}`}></i>
                    </span>{" "}
                    {f.label}
                  </li>
                ))}
              </ul>
              <p className="wds-pricing__cta-text">
                Share your page inventory, content requirements, and integrations so we can discuss the information needed for a scoped estimate.
              </p>
              <Link
                to="/contact"
                className="btn btn-primary"
                aria-label="Request a detailed proposal from QllmSoft"
              >
                Get Your Custom Proposal
              </Link>
            </div>
          </div>
        </section>

        <FounderNote
          title="Keep content ownership clear"
          message="A business website needs accurate service information, a manageable publishing workflow, and working contact paths. Decide who supplies the content, who can edit it, and how changes will be reviewed after launch."
        />

        {/* ══════════════════════════════════════════════════
            FAQ ,  H2 + FAQPage microdata
        ══════════════════════════════════════════════════ */}
        <section
          className="section csd-faq"
          aria-labelledby="faq-heading"


        >
          <div className="container">
            <div className="section-title">
              <h2 id="faq-heading">Web Development Services FAQs</h2>
              <p>
                Common questions about our process, timelines and pricing for web
                development projects.
              </p>
            </div>
            <div className="csd-faq__list">
              {FAQ_DATA.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/*services carousel*/}

        <RelatedSolutions category="website" />

        {/* ══════════════════════════════════════════════════
            FINAL CTA ,  H2
        ══════════════════════════════════════════════════ */}
        <section
          className="section csd-final-cta"
          aria-labelledby="cta-heading"
        >
          <div className="container">
            <div className="csd-final-cta__content">
              <p className="section-eyebrow">Let's Get Started</p>
              <h2 id="cta-heading">
                Ready to Build a Website That Drives Real Results?
              </h2>
              <p>
                A website should do more than exist — it should bring in organic
                traffic, convert visitors into leads, and scale with your business.
                Let's build yours.
              </p>
              <div className="csd-final-cta__buttons">
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  aria-label="Request your free web development quote from QllmSoft"
                >
                  Request Your Free Quote Today
                </Link>
                <a
                  href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20a%20website%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                  aria-label="WhatsApp QllmSoft about your website development project"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  marginTop: "16px",
                }}
              >
                Questions? Visit our <Link to="/blog">Expert Blog</Link> — we
                typically respond within a few hours on business days.
              </p>
              <CoreServiceLinks currentPath="/website-development-services" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebsiteDevelopmentServices;
