/**
 * Home.jsx, QllmSoft
 * ─────────────────────────────────────────────────────────────
 * ROLE IN THE FUNNEL: Top of funnel entity page. States who
 * QllmSoft is, proves credibility with specifics, and routes
 * the visitor into /services (commercial intent) or /projects
 * (proof seeking intent).
 *
 * TOPICAL SCOPE ON THIS PAGE VS OTHERS:
 * Home defines the entity and gives a one paragraph overview of
 * each service line. It does not repeat the full service catalog
 * from Services.jsx word for word, and it does not repeat the
 * full case study writeups from Projects.jsx word for word. Each
 * page covers the same general subject from a different angle,
 * which is the point of separating macro context by page.
 *
 * FAQ on this page is scoped to entity level questions (who is
 * QllmSoft, where is the team based, do you work with startups).
 * FAQ on Services.jsx is scoped to service level questions (what
 * do you build, how much does it cost). The two sets do not
 * overlap, so both can carry FAQPage schema without duplication.
 */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { motion, useReducedMotion } from "framer-motion";

import HeroSlider from "../components/HeroSlider";
import ServiceCoverflow from "../components/ServiceCoverflow";
import { homeServices, trustedPartners } from "../data/mock";
import ProjectSections from "../components/ProjectSections";
import TechnologiesSlider from "../components/TechnologiesSlider";
import TestimonialSection from "../components/TestimonialSection";
import blogPostsData from "../data/blogPostsData";
import financialsystemImg from "../assets/qllm-soft-finance-management-system-11.webp";
import GlobalTeamImg from "../assets/pakistanimg.webp";
import qllmsoftLogo from "../assets/qllmsoft-web-desktop-mobile-app-logo.webp";
import QLLMDOCSImg from "../assets/QllmDocs Smart Document Management.png";
import {
  schemaOrganization,
  schemaFounder,
  schemaWebsite,
  buildServiceSchema,
  buildFAQSchema,
  FACTS,
} from "../data/schema";
import "./Home.css";
import "animate.css";

const PAGE_TITLE = "QllmSoft | Business Software, Web & Mobile Development";
const PAGE_DESCRIPTION = "Build software around your business workflows. Explore QllmSoft's custom systems, web applications, mobile apps and API integrations. Discuss your project.";

/* ─── JSON-LD unique to Home ────────────────────────────────── */
const schemaHomePage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://qllmsoft.com/#webpage",
  url: "https://qllmsoft.com",
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  isPartOf: { "@id": "https://qllmsoft.com/#website" },
  about: { "@id": "https://qllmsoft.com/#organization" },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp",
  },
};

const schemaHomeService = buildServiceSchema({
  id: "https://qllmsoft.com/#service-overview",
  name: "Custom Software Development Services",
  description:
    "Custom software development, enterprise web applications, mobile apps, business automation, API integration, and AI powered software solutions for businesses worldwide.",
  url: "https://qllmsoft.com/services",
});

/* Entity level FAQ. Different questions than Services.jsx on purpose. */
const homeFaqItems = [
  {
    q: "Who is QllmSoft and what does the company actually do?",
    a: `QllmSoft is a custom software development company founded in ${FACTS.foundingYear}. The team designs and builds enterprise web applications, mobile apps, business automation systems, and AI powered tools for clients that need software built around their specific operations rather than adapted from a generic template.`,
  },
  {
    q: "Does QllmSoft only take on large enterprise projects, or also smaller ones?",
    a: "Both. Engagements range from a single internal tool replacing a spreadsheet workflow for a small business, up to multi module platforms for enterprise clients. Project scope determines pricing and timeline, not company size.",
  },
  {
    q: "Where is the QllmSoft team based and who do they serve?",
    a: "QllmSoft is based in Punjab, Pakistan and works with local and international clients. Agree on meeting times, communication channels, review responsibilities, and time-zone overlap when planning the engagement.",
  },
  {
    q: "What should we prepare before discussing a project?",
    a: "Describe the task you want to improve, who uses the system, and what is difficult today. Bring sample workflows, existing system details, and a prioritized list of requirements. We can then discuss scope, dependencies, delivery options, and the information needed for an estimate.",
  },
];

const schemaHomeFAQ = buildFAQSchema(homeFaqItems);

/* Two full case studies with specific outcomes, distinct wording from Projects.jsx */
const featuredCaseStudies = [
  {
    title: "Enterprise financial management platform",
    industry: "Finance",
    problem:
      "Financial evaluation needs consistent applicant records, decision workflows, reporting, and a record of changes.",
    approach:
      "The financial management project in our portfolio brings applicant scoring, credit evaluation, dashboards, custom reporting, and audit trails into one system.",
    result:
      "A centralized workflow for evaluating financial information and reviewing the records behind decisions. See the project details for the documented feature set.",
    image: financialsystemImg,
    alt: "Enterprise financial management platform dashboard built by QllmSoft",
    link: "/finance-management-system",
  },
  {
    title: "QllmDocs document management",
    industry: "Document workflows",
    problem:
      "Teams need to find the right document, control access, and keep track of changes without relying on scattered email attachments.",
    approach:
      "QllmDocs is a separate document-management product associated with QllmSoft. It combines document organization, access permissions, audit history, and AI-assisted search.",
    result:
      "Explore the product's document workflows and available capabilities, then assess whether it fits your storage, access, and integration requirements.",
    image: QLLMDOCSImg,
    alt: "QllmDocs secure document management dashboard built by QllmSoft",
    link: "/ai-document-management-software",
  },
];

const stepIconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const engagementSteps = [
  {
    n: "01",
    title: "Define the work before estimating it",
    icon: (
      <svg {...stepIconProps}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    ),
    body: (
      <>
        Identify the users, workflows, integrations and constraints. Agree on deliverables,
        assumptions and acceptance criteria so proposals can be compared on the same basis.
      </>
    ),
  },
  {
    n: "02",
    title: "Agree on ownership and handover",
    icon: (
      <svg {...stepIconProps}>
        <circle cx="8" cy="15" r="4" />
        <path d="M10.8 12.2 20 3" />
        <path d="m16 7 3 3" />
        <path d="m14 9 2 2" />
      </svg>
    ),
    body: (
      <>
        Confirm source-code rights, repository access, documentation and hosting ownership.
        Identify third-party subscriptions and licenses that will remain part of the system.
      </>
    ),
  },
  {
    n: "03",
    title: "Plan security around the data",
    icon: (
      <svg {...stepIconProps}>
        <path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6z" />
        <path d="m9 12 2.2 2.2L15.5 10" />
      </svg>
    ),
    body: (
      <>
        Use guidance such as the{" "}
        <a
          href="https://owasp.org/www-project-top-ten/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="font-semibold text-slate-900 underline decoration-indigo-400 decoration-2 underline-offset-4 transition-colors hover:text-indigo-600"
        >
          OWASP Top 10
        </a>{" "}
        to inform risk assessment. Define access controls, validation and testing around the
        data involved; a checklist alone does not establish that an application is secure.
      </>
    ),
  },
  {
    n: "04",
    title: "Decide how the system will be maintained",
    icon: (
      <svg {...stepIconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    body: (
      <>
        Assign responsibility for monitoring, backups, updates and incident response.
        Confirm the initial support period and ongoing maintenance scope in the agreement.
      </>
    ),
  },
];

/* Services shown in the "What we build" coverflow carousel */
const coverflowServices = homeServices.filter(
  (service) => service.id <= 4 || service.id === 8
);

const Home = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  const blogPreviewSlugs = [
    "marketing-tech-stack-for-enterprises",
    "custom-vs-saas-ecommerce-for-growing-smbs",
    "role-based-vs-policy-based-authorization-asp-net-core",
    "when-internal-software-slows-teams-instead-of-helping",
  ];
  const insightPosts = blogPreviewSlugs
    .map((key) => ({ key, post: blogPostsData[key] }))
    .filter(({ post }) => Boolean(post));
  const [insightIndex, setInsightIndex] = useState(0);
  const [isInsightsPaused, setIsInsightsPaused] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (
      !insightPosts.length ||
      isInsightsPaused ||
      prefersReducedMotion
    ) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setInsightIndex((current) => (current + 1) % insightPosts.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [insightPosts.length, isInsightsPaused, prefersReducedMotion]);

  const showPreviousInsight = () => {
    setInsightIndex((current) => (current - 1 + insightPosts.length) % insightPosts.length);
  };
  const showNextInsight = () => {
    setInsightIndex((current) => (current + 1) % insightPosts.length);
  };

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta
          name="description"
          content={PAGE_DESCRIPTION}
        />
        <meta
          name="keywords"
          content="custom software development company, enterprise software development, custom software solutions, software outsourcing services"
        />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://qllmsoft.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qllmsoft.com/" />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta
          property="og:description"
          content={PAGE_DESCRIPTION}
        />
        <meta property="og:image" content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />

        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFounder)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebsite)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaHomePage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaHomeService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaHomeFAQ)}</script>
      </Helmet>

      <main className="home-page" id="main-content" role="main">
        <HeroSlider />

        {/* ── ENTITY DEFINITION ── first sentence answers who QllmSoft is directly */}
        <section className="section about-section bg-light" ref={aboutRef} aria-labelledby="about-heading">
          <div className="container">
            <div className="about-content">
              <div className={`about-diagram animate__animated ${aboutInView ? "animate__fadeInLeft" : ""}`}>
                <div className="diagram-orbit diagram-orbit-outer" aria-hidden="true" />
                <div className="diagram-orbit diagram-orbit-inner" aria-hidden="true" />
                <div className="diagram-trace diagram-trace-one" aria-hidden="true" />
                <div className="diagram-trace diagram-trace-two" aria-hidden="true" />
                <div className="diagram-core">
                  <img src={qllmsoftLogo} alt="QllmSoft" />
                </div>
                <div className="diagram-node diagram-node-ai">
                  <span>01</span>
                  <strong>AI Systems</strong>
                </div>
                <div className="diagram-node diagram-node-web">
                  <span>02</span>
                  <strong>Web Platforms</strong>
                </div>
                <div className="diagram-node diagram-node-mobile">
                  <span>03</span>
                  <strong>Mobile Apps</strong>
                </div>
                <div className="diagram-node diagram-node-cloud">
                  <span>04</span>
                  <strong>Cloud Scale</strong>
                </div>
              </div>
              <div className={`about-text animate__animated ${aboutInView ? "animate__fadeInRight" : ""}`}>
                <h2 id="about-heading" className="section-title">
                  Software that connects the work across your business
                </h2>
                <p className="direct-answer">
               Founded in  2015,  <span className="mustard-highlight">QllmSoft</span> is a <strong>custom software development company</strong>
                 . When standard, ready made software is not enough for your business, we step in to create custom web applications, mobile application, and system integrations. We specialize in helping teams , When standard software packages fall short.To build the right solution, we start by understanding your teams's daily workflow and the existing tools you already use.
                </p>
                <p>
                 Led by Founder Zain Ul Abedin. Our team builds software using ASP.NET Core, C#, React, Angular, SQL Server, and Mobile tools like Flutter And React Native. We select the best tech stack for your project by looking at your current systems, device needs, integrations, and future maintenance requirements. We also provide AI-powered solutions to help businesses automate tasks and gain insights from their data.
                </p>
                <p>
                  You can read feedbacks from our previous clients on our {" "}
                  <a href="https://www.upwork.com/freelancers/zainulabedinpk" target="_blank" rel="noopener noreferrer">
                    Upwork
                  </a>
                  , and {" "}
                  <a href="https://www.freelancer.com/u/mrprogrmmr" target="_blank" rel="noopener noreferrer">
                    Freelancer profiles.
                  </a>
                  Before choosing a development partner, we recommend asking for work samples that match your daily workflow and clearly discussing who handles what during delivery.
                </p>
                <Link to="/about" className="btn btn-primary" aria-label="Learn more about QllmSoft">
                  Read the full company story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILDce */}
        <section className="section services-section" aria-labelledby="services-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="services-heading">What we build</h2>
              <p>
               Pick a starting point based on the specific solution you need to build. Each service page outlines the project scope, key implementation choices, and the information required to get our discussion started.
              </p>
            </div>

            <ServiceCoverflow services={coverflowServices} />

            <div className="csd-about" style={{ marginTop: "32px" }}>
              <p>
                <strong>
                  <Link to="/custom-software-development-services">Custom software development</Link>
                </strong>{" "}
                helps teams replace spreadsheet handoffs, approval bottlenecks or disconnected records.
                First assess whether configuring an existing product or adding an integration would meet
                the need before committing to a custom system.
              </p>
              <p>
                <strong>
                  <Link to="/website-development-services">Website development</Link>
                </strong>{" "}
                focuses on public-facing business sites and content that help prospective customers
                understand your offer. Plan content editing, forms, analytics and technical SEO together.
              </p>
              <p>
                <strong>
                  <Link to="/web-application-development-services">Web application development</Link>
                </strong>{" "}
                covers customer portals, staff applications and SaaS platforms. Define who can access
                each record, how tasks move between users, and which systems the application connects to.
              </p>
              <p>
                <strong>
                  <Link to="/api-development-services">API development</Link>
                </strong>{" "}
                covers the backend layer connecting a frontend, a database, and third party services such as
                payment gateways or CRMs, using REST, GraphQL, or SOAP depending on what the integration
                actually requires.
              </p>
              <p>
                <strong>
                  <Link to="/mobile-app-development">Mobile app development</Link>
                </strong>{" "}
                covers Android and iOS products for customers or staff working on the move. Native and
                cross-platform approaches both need device testing, backend planning and release support.
              </p>
              <p>
                <strong><Link to="/ecommerce-development-services">Custom ecommerce development</Link></strong>{" "}
                addresses checkout rules, catalog operations and connections to inventory or order systems.
                Consider a focused integration before replacing a platform that otherwise serves the business.
              </p>
            </div>

            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <Link to="/services" className="btn btn-primary" aria-label="See the full QllmSoft service catalog">
                Explore all services
              </Link>
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── short, links out to dedicated industry pages where they exist */}
        <section className="section" aria-labelledby="industries-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="industries-heading">Industry workflows and requirements</h2>
              <p>
                Each sector has different users, records, integrations and risk considerations. These pages
                describe industry-specific applications and the requirements to assess before a project begins.
              </p>
            </div>
            <div className="why-grid">
              <article className="why-card">
                <h3><Link to="/healthcare-software-development-pakistan">Healthcare</Link></h3>
                <p>Clinic booking systems, patient portals, and hospital management platforms built with role based access controls around sensitive patient data.</p>
              </article>
              <article className="why-card">
                <h3><Link to="/finance-management-system">Finance and fintech</Link></h3>
                <p>Financial reporting dashboards, budgeting and approval systems, and payment integrations, including the platform detailed in the case study below.</p>
              </article>
              <article className="why-card">
                <h3><Link to="/education-software-development-pakistan">Education</Link></h3>
                <p>School management systems, learning management platforms, and online examination tools for institutions managing multiple campuses.</p>
              </article>
              <article className="why-card">
                <h3><Link to="/ecommerce-development-services">Logistics and eCommerce</Link></h3>
                <p>Inventory tracking, delivery routing tools, and custom storefronts for retailers who have outgrown what a template store platform can support.</p>
              </article>
              <article className="why-card">
                <h3><Link to="/real-estate-software-development">Real estate</Link></h3>
                <p>Property listing portals, tenant management platforms, and lease tracking systems for agencies and property managers.</p>
              </article>
              <article className="why-card">
                <h3>HR and enterprise operations</h3>
                <p>Payroll systems, employee portals, and attendance tracking tools for operations heavy organizations replacing manual processes.</p>
              </article>
            </div>
          </div>
        </section>

        {/*
        +ENGAGEMENT STEPS  */}
        <section className="relative py-16 sm:py-20 lg:py-24" aria-labelledby="why-heading">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
              <h2
                id="why-heading"
                className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                What the engagement actually looks like
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                Make the delivery responsibilities clear before development starts.
              </p>
            </div>

            <ol className="grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {engagementSteps.map((step, i) => (
                <li key={step.n} className="relative">
                  <article className="home-engagement-card group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#022038]/50 hover:bg-white hover:shadow-xl hover:shadow-[#022038]/10 sm:p-7">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-1 -top-3 select-none text-7xl font-bold leading-none text-slate-900 opacity-[0.1] transition-all duration-300 group-hover:text-[#022038] group-hover:opacity-[0.16]"
                    >
                      {step.n}
                    </span>

                    <div className="home-engagement-icon relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#022038] shadow-sm transition-colors duration-300 group-hover:border-[#022038]/40 group-hover:bg-[#022038] group-hover:text-white">
                      {step.icon}
                    </div>

                    <h3 className="mb-3 text-lg font-semibold leading-snug text-slate-900">
                      <span className="sr-only">Step {Number(step.n)}: </span>
                      {step.title}
                    </h3>
                    <p className="text-[0.95rem] leading-7 text-slate-600">{step.body}</p>
                  </article>

                  {i < engagementSteps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-5 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm lg:flex"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 6 6 6-6 6" />
                      </svg>
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── PROOF: two full case studies ── */}
        <section className="section" aria-labelledby="case-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="case-heading">Two projects that show how this works in practice</h2>
            </div>
            <div className="case-grid">
              {featuredCaseStudies.map((c) => (
                <article key={c.title} className="case-card">
                  <img src={c.image} alt={c.alt} loading="lazy" />
                  <span className="badge bg-secondary mb-2">{c.industry}</span>
                  <h3>{c.title}</h3>
                  <p><strong>Problem.</strong> {c.problem}</p>
                  <p><strong>Approach.</strong> {c.approach}</p>
                  <p><strong>Capabilities.</strong> {c.result}</p>
                  <Link to={c.link} className="story-link">Explore this solution</Link>
                </article>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <Link to="/projects" className="btn btn-primary">
                Explore the project portfolio
              </Link>
            </div>
          </div>
        </section>


          <TestimonialSection />


        <section className="section tech-section" aria-label="Technologies used by QllmSoft">
          <TechnologiesSlider />
        </section>

        {/* ── OUTSOURCING BRIEF ── */}
        <section className="section outsourcing-section">
          <div className="container">
            <div className="outsourcing-content">
              <div className="outsourcing-text">
                <h2>Outsourcing software development, briefly</h2>
                <p>
                  An external development partner can provide delivery capacity or technical skills your
                  internal team needs. It also requires clear ownership of scope, access, review and release.
                  Agree on communication, decision-making and handover before work begins.
                </p>
                <Link to="/outsource-software-development-to-pakistan" className="story-link">
                  Read the full outsourcing model
                </Link>
              </div>
              <div className="outsourcing-image">
                <img
                  src={GlobalTeamImg}
                  alt="QllmSoft team delivering software for global businesses"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section projects-section" aria-label="QllmSoft project portfolio preview">
          <ProjectSections />
        </section>

        <section className="section partners-section" aria-labelledby="partners-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="partners-heading">Trusted by clients worldwide</h2>
            </div>
            <div className="partners-grid">
              {trustedPartners.map((partner, index) => (
                <div key={index} className="partner-logo">
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" aria-label={`${partner.name}, verified QllmSoft client`}>
                    <img src={partner.logo} alt={`${partner.name}, QllmSoft client`} loading="lazy" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section blog-preview"
          aria-labelledby="blog-preview-heading"
          onMouseEnter={() => setIsInsightsPaused(true)}
          onMouseLeave={() => setIsInsightsPaused(false)}
          onFocusCapture={() => setIsInsightsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsInsightsPaused(false);
            }
          }}
        >
          <div className="container">
            <div className="section-title insights-heading">
              <h2 id="blog-preview-heading">Latest insights</h2>
              <div className="insights-controls" aria-label="Latest insight carousel controls">
                <button type="button" onClick={showPreviousInsight} aria-label="Previous insight">←</button>
                <button type="button" onClick={showNextInsight} aria-label="Next insight">→</button>
              </div>
            </div>
            <div
              className="insight-carousel-viewport"
              role="region"
              aria-label="Latest insight articles"
              aria-roledescription="carousel"
            >
              <div className="insight-carousel">
                {insightPosts.map(({ key, post }, index) => {
                  const isActive = index === insightIndex;
                  let offset = index - insightIndex;
                  if (offset > insightPosts.length / 2) {
                    offset -= insightPosts.length;
                  } else if (offset < -insightPosts.length / 2) {
                    offset += insightPosts.length;
                  }
                  const distance = Math.abs(offset);

                  return (
                    <motion.article
                      key={key}
                      className={`blog-preview-card insight-carousel-card ${isActive ? "active" : ""}`}
                      aria-hidden={!isActive}
                      inert={!isActive}
                      initial={false}
                      animate={{
                        x: offset * 255,
                        z: -distance * 90,
                        rotateY: offset * -22,
                        scale: distance === 0 ? 1 : distance === 1 ? 0.84 : 0.68,
                        opacity: distance > 1 ? 0 : distance === 1 ? 0.82 : 1,
                      }}
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 150, damping: 22 }
                      }
                      style={{
                        zIndex: insightPosts.length - distance,
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <img src={post.image} alt="" loading="lazy" />
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>
                      <Link to={`/blog/${key}`} className="blog-read-btn">Read article</Link>
                    </motion.article>
                  );
                })}
              </div>
            </div>
            <div className="insights-progress" aria-label="Choose an insight">
              {insightPosts.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={index === insightIndex ? "active" : ""}
                  aria-label={`Show insight ${index + 1}`}
                  aria-current={index === insightIndex ? "true" : undefined}
                  onClick={() => setInsightIndex(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── ENTITY LEVEL FAQ ── distinct questions from Services.jsx ── */}
        <section
          className="section faq-section"
          aria-labelledby="home-faq-heading"


        >
          <div className="container">
            <div className="section-title">
              <h2 id="home-faq-heading">Questions about QllmSoft as a company</h2>
            </div>
            <div className="faq-accordion">
              {homeFaqItems.map((item, i) => (
                <div key={item.q} className={`faq-item ${openFaq === i ? "faq-item-open" : ""}`}   >
                  <h3 >
                    <button type="button" className="faq-question" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                      <span>{item.q}</span>
                      <span className="faq-icon" aria-hidden="true">+</span>
                    </button>
                  </h3>
                  <div className="faq-answer"   >
                    <p >{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <div className="cta-content">
              <h2 id="cta-heading">What would you like your software to do better?</h2>
              <p>
                Share your current process, the people involved and the systems you need to connect.
                We can discuss the requirements, delivery options and next steps for an estimate.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary" aria-label="Get a free software development consultation">
                  Get free consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
