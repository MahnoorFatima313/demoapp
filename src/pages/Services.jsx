/**
 * Services.jsx, QllmSoft
 * ─────────────────────────────────────────────────────────────
 * ROLE IN THE FUNNEL: MOFU pillar page. Owns the broad category
 * term and the general FAQ. Individual cluster pages own the
 * narrow exact match terms and are linked out to, never repeated
 * word for word here.
 *
 * TOPICAL SCOPE ON THIS PAGE VS OTHER PAGES:
 * Home gives one paragraph per service. This page gives two
 * paragraphs per service plus who it is for and who it is not
 * for, which is the detail that actually differentiates this
 * page from Home instead of just repeating it at greater length.
 *
 * FAQ here is scoped to service and pricing questions. It does
 * not repeat Home's entity level FAQ or Projects' portfolio FAQ.
 */

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { servicesData } from "../data/mock";
import heroVideo from "../assets/herovdTrim .mp4";
import "./Services.css";
import "animate.css";
import ServiceCard from "../components/ServiceCard";
import ParticleField from "../components/ParticleField";
import {
  schemaOrganization,
  schemaFounder,
  schemaWebsite,
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumb,
  FACTS,
} from "../data/schema";

const schemaBreadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://qllmsoft.com/" },
  { name: "Services", url: "https://qllmsoft.com/services" },
]);

const serviceCatalog = [
  { name: "Custom Software Development", url: "https://qllmsoft.com/custom-software-development-services" },
  { name: "Enterprise Web Application Development", url: "https://qllmsoft.com/web-application-development-services" },
  { name: "Business and eCommerce Website Development", url: "https://qllmsoft.com/website-development-services" },
  { name: "Mobile App Development", url: "https://qllmsoft.com/mobile-app-development" },
  { name: "API and Backend Development", url: "https://qllmsoft.com/api-development-services" },
  { name: "AI Powered Software Solutions", url: "https://qllmsoft.com/ai-powered-software-solutions" },
  { name: "Legacy System Modernization", url: "https://qllmsoft.com/legacy-system-modernization-services" },
  { name: "Software Outsourcing", url: "https://qllmsoft.com/outsource-software-development-to-pakistan" },
  { name: "Hire Dedicated Developers", url: "https://qllmsoft.com/hire-dotnet-developers-pakistan" },
  { name: "Digital Marketing Services", url: "https://qllmsoft.com/digital-marketing-services" },
];

const schemaService = buildServiceSchema({
  id: "https://qllmsoft.com/services#service",
  name: "Custom Software Development Services",
  description:
    "End to end custom software development covering enterprise web applications, mobile apps, business automation, AI powered tools, and legacy modernization for businesses worldwide.",
  url: "https://qllmsoft.com/services",
  offers: serviceCatalog,
});

const faqItems = [
  {
    q: "What exactly does QllmSoft mean by software development services?",
    a: `The phrase covers the full lifecycle of building software specific to a business: requirements gathering, system architecture, the actual development work, quality assurance, deployment, and a defined post launch support window. QllmSoft has run this cycle ${FACTS.projectsDelivered} times since ${FACTS.foundingYear}, for clients from early stage startups through enterprise organizations across the USA, UK, UAE, and Europe.`,
  },
  {
    q: "How much does custom software development cost?",
    a: "It depends entirely on scope, which is why a fixed number does not appear on this page. A single internal tool replacing a spreadsheet is a different project from a multi module platform. Every engagement starts with a free discovery call, followed by a written scope and a fixed price quote within 24 hours, before any code is written.",
  },
  {
    q: "Does QllmSoft build mobile apps for both Android and iOS?",
    a: "Yes, most commonly with Flutter for a single shared codebase across both platforms, which reduces cost and keeps the two versions in sync. Native Swift or Kotlin development is used instead when a project needs direct access to device hardware that Flutter cannot expose cleanly.",
  },
  {
    q: "Can QllmSoft work with international clients on outsourced projects?",
    a: `Yes. Engineers work across client time zones with English communication, fixed price scopes, an NDA signed before any technical discussion, and full intellectual property transfer at delivery. This track record is verifiable through a ${FACTS.upworkScore} Upwork Job Success Score and ${FACTS.reviewCount} five star Freelancer reviews, both maintained by third party platforms outside QllmSoft's control.`,
  },
  {
    q: "Who owns the source code once the project is complete?",
    a: "The client does, entirely. On completion, full ownership of source code, databases, and design assets transfers legally under a signed IP assignment agreement. QllmSoft retains no licensing rights or code dependency on its own infrastructure.",
  },
  {
    q: "What development process does QllmSoft follow?",
    a: "Agile Scrum, in two week sprints, with a working demo on a staging environment at the end of each sprint. Clients retain full backlog visibility and can reprioritize features against business timelines throughout the build rather than only at the start and end.",
  },
  {
    q: "How is a custom software project different from buying an off the shelf tool?",
    a: "If a product like Salesforce, a standard ERP suite, or a monthly SaaS tool already covers most of what a business needs without forcing an awkward workaround, buying it is almost always the better decision. Custom development becomes worthwhile once a business is paying for unused features, working around a rigid workflow, or waiting on a vendor support ticket for a fix that will never ship because the use case is not common enough to matter to that vendor.",
  },
  {
    q: "Does QllmSoft provide ongoing maintenance after launch, or only the initial build?",
    a: "Both. A 30 day post launch window covering bug fixes and monitoring is included in every project at no additional cost. After that window, clients can move to a flexible monthly maintenance contract covering updates, security patches, and feature additions, though it is not required.",
  },
  {
    q: "Which technology stack does QllmSoft use across these services?",
    a: "ASP.NET Core and C# for backend systems, React for frontend interfaces, SQL Server for relational data, Flutter for cross platform mobile apps, and Microsoft Azure or AWS for cloud hosting. The stack is intentionally narrow. QllmSoft would rather go deep on a small set of tools it knows thoroughly than spread thin across every framework that becomes popular in a given year.",
  },
];

const schemaFAQ = buildFAQSchema(faqItems);

const processSteps = [
  { n: "01", title: "Discovery and requirements", desc: "We start with focused workshops to map how your team works and identify any technical limits, giving you a clear project scope and a fixed price quote before coding begins." },
  { n: "02", title: "Solution architecture", desc: "We map out the system structure, choose the right technologies, and plan your security setup , reviewing and agreeing on everything together before any coding starts." },
  { n: "03", title: "Agile development", desc: "We build in focused two week sprints, delivering a working demo on a staging environment at the end of every cycle while giving you complete visibility into our task backlog." },
  { n: "04", title: "QA and security testing", desc: "Before anything reaches your live users, we run thorough functional checks, load testing, and OWASP Top 10 security testing so you can launch with confidence." },
  { n: "05", title: "Deployment", desc: "We handle a smooth, zero downtime CI/CD launch, set up real time monitoring, and hand over complete technical documentation so your team owns every detail from day one." },
  { n: "06", title: "30 day post launch support", desc: "We include free bug fixes and active monitoring right after launch so everything settles smoothly, with flexible long term SLA support plans available once that window ends." },
];

const industries = [
  { name: "Healthcare", desc: "Clinic booking systems, patient portals, and hospital management platforms designed around role based access to sensitive records.", link: "/healthcare-software-development-pakistan" },
  { name: "Finance and fintech", desc: "Budgeting platforms, real time reporting dashboards, and payment gateway integrations built with audit trails on every transaction.", link: "/finance-management-system" },
  { name: "Education", desc: "School management systems, learning management platforms, and online examination tools for institutions running multiple campuses.", link: "/education-software-development-pakistan" },
  { name: "eCommerce and retail", desc: "Custom storefronts, inventory management, and order tracking for retailers who have outgrown a template store platform.", link: "/ecommerce-development-services" },
  { name: "Real estate", desc: "Property listing portals, tenant management platforms, and lease tracking systems for agencies and property managers.", link: "/real-estate-software-development" },
  { name: "Logistics and HR operations", desc: "Fleet tracking, warehouse tools, and payroll or attendance systems replacing manual, error prone processes.", link: null },
];

const engagementModels = [
  { model: "Fixed price project", best: "We document and price the full scope before any work begins. Your cost stays fixed unless you decide to change the scope." },
  { model: "Dedicated development team", best: "Ongoing product development needing consistent capacity", detail: "Get one or more engineers dedicated solely to your product, working right inside your existing sprint cycles, tools, and team workflow." },
  { model: "Staff augmentation", best: "Our engineers step directly into your active workflow for a set period, giving you immediate capacity without the cost and delay of full time hiring." },
];

const Services = () => {
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>Custom Software Development Services | QllmSoft</title>
        <meta
          name="description"
          content="QllmSoft delivers custom software development, web apps, mobile apps, and AI solutions to businesses worldwide. Fixed price. Free quote in 24 hours."
        />
        <meta
          name="keywords"
          content="custom software development services, enterprise software development, mobile app development services, software outsourcing services, hire software developers"
        />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://qllmsoft.com/services" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qllmsoft.com/services" />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Custom Software Development Services | QllmSoft" />
        <meta property="og:description" content="Enterprise web platforms, mobile apps, and AI tools for global clients. Fixed pricing, verified track record." />
        <meta property="og:image" content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Software Development Services | QllmSoft" />
        <meta name="twitter:description" content="Enterprise software, mobile apps, and AI solutions from a globally trusted technology partner." />

        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFounder)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebsite)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main className="services-page" id="main-content" role="main">
        {/* ── HERO ── */}
        <section className="services-hero" aria-labelledby="svc-hero-h1">
          <video
            className="services-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="services-hero-grid" aria-hidden="true" />
          <ParticleField
            palette="dark"
            density={8000}
            className="services-hero-particles"
          />
          <div className="container">
            <span className="services-hero-eyebrow">Software solutions built around your business</span>
            <h1 id="svc-hero-h1">Custom software development services for businesses worldwide</h1>
            <p>
              QllmSoft engineers production ready{" "}
              <Link to="/web-application-development-services">enterprise web applications</Link>,{" "}
              <Link to="/mobile-app-development">mobile apps</Link>,{" "}
              <Link to="/api-development-services">business automation systems</Link>, and{" "}
              <Link to="/ai-powered-software-solutions">AI powered software</Link>. Every engagement starts with
              a fixed price and a documented scope before a single line of code is written. Verified:{" "}
              {FACTS.upworkScore} Upwork Job Success Score, {FACTS.reviewCount} five star reviews since{" "}
              {FACTS.foundingYear}.
            </p>
          </div>
        </section>

        {/* ── TRUST BAND ── */}
        <section className="services-trust-band" aria-label="QllmSoft verified metrics">
          <div className="container services-trust-inner">
            {[
              { num: FACTS.yearsExperience, lbl: "Years experience" },
              { num: FACTS.projectsDelivered, lbl: "Projects delivered" },
              { num: FACTS.upworkScore, lbl: "Upwork job success" },
              { num: `${FACTS.freelancerRating}★`, lbl: `${FACTS.reviewCount} verified reviews` },
            ].map((s, i) => (
              <div className="services-trust-item" key={i}>
                <span className="services-trust-number">{s.num}</span>
                <span className="services-trust-label">
                  {s.lbl}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── MACRO CONTEXT DEFINITION ── this is what makes the pillar unique versus Home ── */}
        <section className="section services-definition" aria-labelledby="what-is-heading">
          <div className="container" style={{ maxWidth: "820px" }}>
            <h2 id="what-is-heading">What counts as a software development service here</h2>
            <p>
  At QllmSoft, a software development service is any scoped, fixed-price project that results in working software you own completely. Whether you need a public website, login protected web apps, mobile apps, backend APIs, or internal team tools, it falls under this roof (Ongoing marketing retainers are handled separately under our digital marketing services.).
            </p>
            <p>
           The five sections below cover almost every project type we have delivered since 2015. Each links to a full technical page, giving you just enough detail here to see which category matches your needs.
            </p>
          </div>
        </section>

        {/* ── FULL SERVICE CATALOG ── */}
        <section className="section services-list" aria-labelledby="svc-list-h2">
          <div className="container">
            <div className="section-title">
              <h2 id="svc-list-h2">The service catalog</h2>
            </div>
            <div className="services-detailed-grid">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  variant="detailed"
                  isOdd={index % 2 === 0}
                  id={service.slug || service.name.toLowerCase().replace(/\s+/g, "-")}
                />
              ))}
            </div>

            <div className="csd-about" style={{ marginTop: "40px" }}>
              <h3><Link to="/custom-software-development-services">Custom software development</Link></h3>
              <p>
             This is the right fit when you are building internal tools purely for your own team, think dashboards, approval workflows, inventory trackers, or ERP add-ons that connect to software you already run. (If you want a public-facing marketing site, check out website development instead.)
              </p>
              <p>
               Every internal system is scoped individually because architectures vary widely a payroll tool and a warehouse tracker share very little under the hood.
              </p>

              <h3><Link to="/website-development-services">Website development</Link></h3>
              <p>
              This focuses on public business and eCommerce sites designed to show up on Google and convert visitors into customers. We write clean custom code rather than relying on bloated page builders, because extra plugins and heavy themes are the main reasons sites fail Core Web Vitals and struggle to grow organic traffic.
              </p>
              <p>
             Note that if your site needs user accounts, permission levels, or custom business workflows, it fits under web application development even though users still access it through a browser.
              </p>

              <h3><Link to="/web-application-development-services">Web application development</Link></h3>
              <p>
             Covers SaaS platforms, enterprise portals, and browser-based systems behind a login. QllmSoft builds these on ASP.NET Core for reliable performance under heavy concurrent load and native Azure hosting integration.
              </p>
              <p>
             Choose this over custom software when the final deliverable runs specifically in a web browser rather than on a desktop or offline.
              </p>

              <h3><Link to="/api-development-services">API and backend development</Link></h3>
              <p>
                Instead of a visual screen, this service delivers the connective layer REST, GraphQL, or SOAP endpoints that lets your app, database, and external tools like CRMs or payment processors share data. Teams usually request this on its own when their user interface is already built and they just need a new or modernized backend.
              </p>
              <p>
                Most web apps naturally include API work, so this stands alone only when the backend connection is the entire deliverable.
              </p>

              <h3><Link to="/mobile-app-development">Mobile app development</Link></h3>
              <p>
               We create iOS and Android apps mostly with Flutter, using a single shared codebase to keep development costs lower and ensure both versions stay completely in sync. If your app requires direct device hardware control such as background Bluetooth scanning we use native Swift or Kotlin instead.
              </p>
              <p>
                Every mobile build includes API work behind it as well, since a mobile app with no backend can
                only function offline.
              </p>
            </div>

            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <Link to="/legacy-system-modernization-services" className="story-link">
                Need to migrate or modernize an existing system instead of building new? See legacy system modernization
              </Link>
              {" · "}
              <Link to="/ai-powered-software-solutions" className="story-link">
                Looking to add AI to an existing product? See AI powered software solutions
              </Link>
            </div>
          </div>
        </section>

        {/* ── ENGAGEMENT MODELS ── new content that adds genuine topical breadth ── */}
        <section className="section services-engagement" aria-labelledby="engagement-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="engagement-heading">Three ways to engage QllmSoft</h2>
              <p>Which model fits depends on whether a project has a defined end date or is ongoing.</p>
            </div>
            <div className="engagement-model-grid">
              {engagementModels.map((m, index) => (
                <article key={m.model} className={`why-card engagement-model-card engagement-model-card--${index + 1}`}>
                  <div className="engagement-model-card__content">
                    <h3>{m.model}</h3>
                    <p><strong>Best for:</strong> {m.best}</p>
                    <p>{m.detail}</p>
                  </div>
                </article>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <Link to="/hire-dotnet-developers-pakistan" className="story-link">
                Read more about dedicated team and staff augmentation hiring
              </Link>
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── */}
        <section className="section services-industries" aria-labelledby="industries-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="industries-heading">Industries QllmSoft has built for repeatedly</h2>
            </div>
            <div className="why-grid">
              {industries.map((ind) => (
                <article key={ind.name} className="why-card">
                  <h3>{ind.link ? <Link to={ind.link}>{ind.name}</Link> : ind.name}</h3>
                  <p>{ind.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section process-section" aria-labelledby="process-h2">
          <div className="container">
            <div className="section-title">
              <h2 id="process-h2">How a project actually moves from first call to launch</h2>
            </div>
            <div className="process-grid" role="list">
              {processSteps.map((p) => (
                <div key={p.n} className="process-step" role="listitem">
                  <div className="process-number" aria-hidden="true">{p.n}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUTSOURCING TRUST ── */}
        <section className="section services-outsource" aria-labelledby="outsource-h2">
          <div className="container">
            <div className="section-title">
              <h2 id="outsource-h2">Working with QllmSoft as an international client</h2>
            </div>
            <div className="why-grid">
              <article className="why-card"><h3>NDA before discovery</h3><p>Signed before any technical discussion begins, protecting both the idea being discussed and the data shared during scoping.</p></article>
              <article className="why-card"><h3>Full IP transfer on completion</h3><p>Source code, database schemas, and design assets transfer legally to the client. QllmSoft retains no licensing rights afterward.</p></article>
              <article className="why-card"><h3>Time zone overlap</h3><p>Engineers maintain working hours that overlap North American, European, and Gulf business days rather than a fully asynchronous handoff.</p></article>
              <article className="why-card"><h3>Fixed price only for scoped work</h3><p>No open ended hourly billing for project based engagements. The number in the proposal is the number invoiced.</p></article>
            </div>
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <Link to="/outsource-software-development-to-pakistan" className="btn btn-primary">
                Read the full outsourcing guide
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── the only page carrying this specific question set ── */}
        <section className="section faq-seo-section services-faq" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <div className="section-title">
              <h2 id="faq-heading">Frequently asked questions</h2>
            </div>
            <div className="faq-seo-list" style={{ maxWidth: 880, margin: "0 auto" }}>
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className="services-faq-item"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    itemProp="name"
                    className="services-faq-question"
                  >
                    {item.q}
                    <span>{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="services-faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p itemProp="text">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section services-cta" aria-labelledby="cta-h2">
          <div className="container">
            <div className="cta-content">
              <h2 id="cta-h2">Ready to scope your project?</h2>
              <p>Get a detailed fixed price proposal within 24 hours, with no commitment required.</p>
              <Link to="/contact" className="btn btn-primary">Get a free consultation</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
