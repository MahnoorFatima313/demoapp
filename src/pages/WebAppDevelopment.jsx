/**
 * WebAppDevelopment.jsx
 * ─────────────────────────────────────────────────────────
 * TARGET KEYWORDS:
 *  Primary:   web application development services Pakistan
 *             ASP.NET Core development company Pakistan
 *  Secondary: enterprise web application development Pakistan,
 *             .NET web development company Pakistan,
 *             custom web application development Pakistan,
 *             ASP.NET Core development services, SaaS development Pakistan,
 *             hire ASP.NET Core developers Pakistan, .NET 8 web application Pakistan
 *
 * SEO: 5 JSON-LD · Single H1 · H1→H2→H3→H4 · Semantic HTML5
 *      aria-label · Review microdata · FAQPage microdata
 *      Service microdata · internal + authority outbound links
 *      Professional SVG icons, no emoji in UI
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './IndustryPage.css';
import './WebPages.css';
import 'animate.css';
import { clientReviews } from "../data/clientReviews";
import { schemaOrganization } from "../data/schema";

const PAGE_URL = 'https://qllmsoft.com/web-application-development-services';
const PAGE_TITLE = "Web Application Development: Portals & SaaS | QllmSoft";
const PAGE_DESCRIPTION = "Build a customer portal, internal web app or SaaS platform around your workflows. Discuss roles, integrations and a scoped project estimate.";
const OG_IMAGE  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';

/* ── SVG Icons ─────────────────────────────────────────── */
const IconZap        = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconShield     = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconCloud      = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
const IconCode       = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IconDatabase   = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const IconSettings   = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconRefreshCw  = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>;
const IconLayout     = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>;
const IconUsers      = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconGlobe      = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const IconTrending   = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const IconDollar     = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const IconCheck      = ({s=16}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;
const IconBox        = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;

/* ── JSON-LD ─────────────────────────────────────────── */

const schemaWebPage = {
  "@context": "https://schema.org", "@type": "WebPage",
  "@id": PAGE_URL + "#webpage", url: PAGE_URL, name: PAGE_TITLE,
  description: PAGE_DESCRIPTION, isPartOf: { "@id": "https://qllmsoft.com/#website" },
  about: { "@id": PAGE_URL + "#service" }
};
const schemaService = {
  "@id": PAGE_URL + "#service",
  '@context':'https://schema.org','@type':'Service',
  serviceType:'Web Application Development',
  name:'Web Application Development Services',
  description:"Custom web application development for business portals, SaaS platforms and enterprise workflows, including backend integrations and existing-system improvements.",
  provider:{ "@id": "https://qllmsoft.com/#organization" },
  areaServed:['United States','United Kingdom','UAE','Saudi Arabia','Pakistan'],
  url:PAGE_URL,
  hasOfferCatalog:{
    '@type':'OfferCatalog',name:'Web Application Development Services',
    itemListElement:[
      {'@type':'Offer',itemOffered:{'@type':'Service',name:"Business Web Application Development"}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'REST API and GraphQL API Development'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'SaaS Platform Development'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Enterprise Web Application Development'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Legacy .NET Framework Migration to ASP.NET Core'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Microservices Architecture Development'}},
    ],
  },
  // Fixes the same GSC Review-snippet errors found on the homepage
  // (missing itemReviewed / missing author). Update ratingValue /
  // reviewCount / reviewBody with real figures before shipping,
  // do not leave placeholder numbers live in production schema.

};
const schemaBreadcrumb = {
  '@context':'https://schema.org','@type':'BreadcrumbList',
  itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:'https://qllmsoft.com/'},
    {'@type':'ListItem',position:2,name:'Services',item:'https://qllmsoft.com/services'},
    {'@type':'ListItem',position:3,name:'Web Application Development Services',item:PAGE_URL},
  ],
};
const FAQ_DATA = [
  { q:'What web application development services does QllmSoft provide?', a:"We develop browser-based business applications, customer and staff portals, SaaS platforms, reporting tools, and supporting APIs. Scope starts with the tasks users need to complete, the data involved, and the systems the application must connect to." },
  { q:"How do you choose the technology for a web application?", a:"Start with user workflows, existing systems, hosting constraints, and the team that will maintain the application. ASP.NET Core is one option for backend services; React or Angular can provide the interface. A supported runtime and a manageable architecture matter more than a benchmark ranking." },
  { q:"What affects the cost of a web application?", a:"Cost depends on workflow complexity, user roles, integrations, data migration, reporting, and testing. Share representative screens, current process steps, expected traffic, and any existing API documentation. Agree on deliverables, exclusions, acceptance criteria, and change handling before committing to a budget." },
  { q:"Can you extend or modernize an existing application?", a:"Yes. Begin with a review of the code, dependencies, data model, and deployment process. That assessment helps decide whether to extend existing modules, replace a specific component, or plan a wider migration. Test data conversion and agree on backups, rollback, and any necessary downtime before release." },
  { q:"What determines the development timeline?", a:"The number of workflows, external integrations, data quality, and testing requirements shape the timeline. Access to existing systems, stakeholder reviews, and third-party approvals can also affect delivery. Prioritize a usable first release and agree on milestones after discovery rather than relying on a generic deadline." },
  { q:'Does QllmSoft handle deployment and ongoing maintenance after launch?', a:"Plan deployment, monitoring, backups, access management, and dependency updates before launch. Confirm who owns hosting accounts, how incidents are reported, what the initial support period covers, and how ongoing maintenance or new features will be scoped." },
];
const schemaFAQ = {
  '@context':'https://schema.org','@type':'FAQPage',
  mainEntity:FAQ_DATA.map(({q,a})=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})),
};

const FAQItem = ({faq,index}) => {
  const [open,setOpen]=useState(false);
  return (
    <div className={`faq-item ${open?'faq-item--open':''}`}   >
      <button className="faq-question" onClick={()=>setOpen(o=>!o)} aria-expanded={open} aria-controls={`wapp-faq-${index}`} >
        <span>{faq.q}</span><span className="faq-icon" aria-hidden="true">{open?'−':'+'}</span>
      </button>
      {open&&<div id={`wapp-faq-${index}`} className="faq-answer"   ><p >{faq.a}</p></div>}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
const WebAppDevelopment = () => {
  const {ref:advRef, inView:advInView} = useInView({triggerOnce:true,threshold:0.08});
  const {ref:svRef,  inView:svInView}  = useInView({triggerOnce:true,threshold:0.08});
  const {ref:procRef,inView:procInView}= useInView({triggerOnce:true,threshold:0.08});
  const {ref:whyRef, inView:whyInView} = useInView({triggerOnce:true,threshold:0.08});
  const {ref:revRef, inView:revInView} = useInView({triggerOnce:true,threshold:0.08});

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="keywords" content="web application development services, ASP.NET Core development company, enterprise web application development, .NET web development company, custom web application development, SaaS platform development, ASP.NET Core development services, .NET web application development, hire ASP.NET Core developers" />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Web Application Development Services, QllmSoft ASP.NET Core" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Web Application Development, QllmSoft" />
        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="ip-page" style={{'--ip-hero-from':'#06091a','--ip-hero-mid':'#1A365D','--ip-hero-to':'#2B6CB0','--ip-accent':'#edb702','--ip-icon-bg':'#EBF8FF','--ip-icon-color':'#1A365D'}} role="main">


        {/* ── HERO ── */}
        <header className="ip-hero" role="banner">
          <div className="container ip-hero__inner">
            <div className="ip-hero__content">
              <div className="ip-hero__eyebrow">
                <span className="ip-hero__dot" aria-hidden="true" />
                Business Web Application Development
              </div>

              {/* SINGLE H1 */}
              <h1 className="ip-hero__title">
                Web Application<br />
                Development Services
              </h1>

              <p className="ip-hero__sub">
                QllmSoft builds <strong>business web applications, customer portals, and SaaS platforms</strong> for teams that need shared workflows, controlled access, and connected data. We plan the interface, backend, integrations, and release around how your users work. Need a marketing website or e-commerce storefront instead? See <Link to="/website-development-services">Website Development Services</Link>.
              </p>

              <div className="ip-hero__buttons">
                <Link to="/contact" className="ip-btn-primary" aria-label="Get a free web application development quote from QllmSoft">Get a Free Quote</Link>
                <Link to="/projects" className="ip-btn-ghost" aria-label="View QllmSoft web application development projects">Explore Project Work</Link>
              </div>

              <div className="ip-hero__trust" aria-label="Trust signals">
                <span>Client feedback available</span>
                <span className="ip-hero__trust-sep" />
                <span>Security review planned</span>
                <span className="ip-hero__trust-sep" />
                <span>Discuss your scope</span>
                <span className="ip-hero__trust-sep" />
                <span>Engineering Team Since 2015</span>
              </div>
            </div>

            <aside className="ip-hero__features" aria-label="ASP.NET Core web development capabilities">
              {[
                {Icon:IconZap,      title:"Supported .NET",      desc:'Runtime selected for your requirements'},
                {Icon:IconShield,   title:'OWASP Top 10 Security',     desc:'Authentication and access controls scoped to the application'},
                {Icon:IconCloud,    title:'Azure & AWS Deployment',    desc:"Deployment automation, monitoring, and capacity planning"},
                {Icon:IconCode,     title:'Clean Architecture',         desc:'Patterns selected for the application complexity'},
                {Icon:IconDatabase, title:"Entity Framework Core",   desc:'Code-first migrations, LINQ, SQL Server'},
                {Icon:IconGlobe,    title:'Cross-Platform Deployment',  desc:'Windows, Linux, or macOS, your choice'},
              ].map((f,i)=>(
                <div key={i} className="ip-hero__feature">
                  <div className="ip-hero__feature-icon"><f.Icon s={20} /></div>
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </div>
              ))}
              <div className="ip-hero__stats" aria-label="Track record">
                {[{num:'10+',label:'Years .NET Dev'},{num:"Build",label:"Workflow-specific software"},{num:"Read",label:"Client feedback"},{num:"Read",label:"Client feedback"}].map(s=>(
                  <div key={s.label} className="ip-hero__stat">
                    <span className="ip-hero__stat-num">{s.num}</span>
                    <span className="ip-hero__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </header>

        {/* ── INTRO ── */}
        <section className="section ip-intro" aria-labelledby="intro-heading">
          <div className="container">
            <p className="section-eyebrow">Browser-Based Business Systems</p>
            <div className="ip-intro__layout">
              <div className="ip-intro__text">
                <h2 id="intro-heading">
                  Web Applications Built Around Your Workflows
                </h2>
                <p>
                  A web application supports tasks people return to: approving requests, managing records, reviewing reports, or serving customers. Before choosing a framework, define the user roles, workflow rules, data ownership, and integrations the system needs.
                </p>
                <p>
                  Our team works with ASP.NET Core, React, Angular, and SQL Server. Architecture should reflect the application requirements and the people maintaining it. For framework-specific implementation or migration, explore our <Link to="/asp-net-core-development-services">ASP.NET Core development services</Link>.</p>
                <p>
                  If you need a secure <Link to="/api-development-services">REST or GraphQL API</Link>, a multi-tenant SaaS platform, a <Link to="/legacy-system-modernization-services">legacy .NET Framework migration</Link>, or a <Link to="/website-development-services">business website</Link> alongside your application, our independently verified track record on Upwork and Freelancer speaks for itself.
                </p>
                <div className="ip-intro__badges">
                  {["Risk-Based Security",'Full IP Ownership + NDA','Fixed-Price Delivery','Azure & AWS Deployment'].map(b=>(
                    <span key={b} className="ip-badge"><IconCheck s={13} />{b}</span>
                  ))}
                </div>
              </div>
              <aside className="ip-intro__aside" aria-label="Key performance metrics">
                {[
                  {Icon:IconZap,     num:"Tests",   label:"Capacity measured against expected usage"},
                  {Icon:IconShield,  num:'OWASP',  label:'Security standard applied to every web application'},
                  {Icon:IconDollar,  num:"Scope",   label:"Estimate based on workflows and integrations"},
                  {Icon:IconTrending,num:"Build",   label:"Workflow-specific delivery"},
                ].map((s,i)=>(
                  <div key={i} className="ip-stat-card">
                    <div className="ip-stat-card__icon"><s.Icon s={20} /></div>
                    <div>
                      <span className="ip-stat-card__num">{s.num}</span>
                      <span className="ip-stat-card__label">{s.label}</span>
                    </div>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* ── WHY ASP.NET CORE ── */}
        <section className="section ip-dark-band" ref={advRef} aria-labelledby="advantage-heading">
          <div className="container">
            <p className="section-eyebrow">Technical Advantage</p>
            <div className="section-title">
              <h2 id="advantage-heading">Technical Decisions That Shape a Web Application</h2>
              <p>Choose architecture around access control, data handling, deployment, and the workload the application must support.</p>
            </div>
            <div className={`wapp-advantage__grid animate__animated ${advInView?'animate__fadeInUp':''}`}>
              {[
                {Icon:IconZap,    title:"Performance Around Your Workload",        badge:"Tests", desc:"Measure response times and capacity using realistic workflows and data. Database queries, caching, integrations, and hosting all affect application performance."},
                {Icon:IconShield, title:'Enterprise Security Built In',           badge:"Security Review", desc:'Ships with data protection APIs, CSRF prevention, XSS filters, HTTPS enforcement, and deep Azure AD and OAuth 2.0 integration. Security is architectural, not a plugin you install and forget.'},
                {Icon:IconCloud,  title:'Native Azure & Cloud Integration',       badge:'Azure-Native', desc:'As a Microsoft framework, ASP.NET Core integrates natively with Azure App Service, AKS, Azure Functions, and Azure DevOps CI/CD pipelines, reducing cloud deployment complexity and operational cost.'},
                {Icon:IconGlobe,  title:'Cross-Platform & Open Source',           badge:'Windows · Linux · macOS', desc:'Deploy on Windows Server, Linux, or macOS. Fully open source with active Microsoft development, ensuring long-term support, regular security patches, and a stable technology bet for your business.'},
                {Icon:IconDatabase,title:"Data Access with EF Core",          badge:'Code-First Migrations', desc:"Entity Framework Core supports data modeling, queries, and migrations. Provider compatibility, indexes, and query behavior should be evaluated against the application workload."},
                {Icon:IconBox,    title:'Long-Term Support Releases',             badge:"Support Lifecycle", desc:"Choose a supported .NET release and include patching and upgrade reviews in the maintenance plan. Check Microsoft support dates for the runtime, hosting environment, and dependencies."},
              ].map((a,i)=>(
                <article key={i} className="wapp-advantage-card" style={{animationDelay:`${i*0.08}s`}}>
                  <div className="wapp-advantage-card__icon"><a.Icon s={22} /></div>
                  <h3 className="wapp-advantage-card__title">{a.title}</h3>
                  <p className="wapp-advantage-card__desc">{a.desc}</p>
                  <span className="wapp-advantage-card__badge">{a.badge}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="section ip-services" ref={svRef} aria-labelledby="services-heading">
          <div className="container">
            <p className="section-eyebrow">What We Build</p>
            <div className="section-title">
              <h2 id="services-heading">Web Application Capabilities</h2>
              <p>Define the user journeys, permissions, integrations, and operational requirements first. The capabilities below can be scoped as a complete application or as improvements to an existing system.</p>
            </div>
            <div className="ip-services__grid">
              {[
                {Icon:IconLayout,   title:'ASP.NET Core MVC Web Applications',
                  desc:'Full-featured business applications built with the ASP.NET Core MVC pattern, clean controller logic, strongly-typed Razor views, and a layered architecture separating concerns across data, business, and presentation layers. Ideal for portals, CRMs, ERPs, and customer-facing platforms.',
                  tags:['MVC Pattern','Razor Views','Clean Architecture','SOLID Principles','Business Portals']},
                {Icon:IconCode,     title:'REST API & GraphQL Web API Development',
                  desc:'Secure, well-documented RESTful APIs and GraphQL endpoints built with ASP.NET Core Web API, authenticated via JWT and OAuth 2.0, documented with Swagger/OpenAPI 3.0, and tested with comprehensive unit and integration test suites built for mobile apps and third-party connectivity.',
                  tags:['REST / GraphQL','JWT Auth','Swagger / OpenAPI','OAuth 2.0','Integration Tests']},
                {Icon:IconSettings, title:'SaaS Platform Development',
                  desc:'Multi-tenant SaaS applications with per-tenant data isolation, subscription billing integration, role-based access control, and real-time dashboards, deployed to Azure App Service with auto-scaling and custom domain management. Engineered for rapid customer onboarding.',
                  tags:['Multi-Tenant','RBAC','Subscription Billing','Azure Deployment','Real-Time Dashboards']},
                {Icon:IconDatabase, title:'Enterprise System Development',
                  desc:'Large-scale enterprise systems, document management platforms, HR and payroll systems, procurement portals, and financial reporting dashboards, built with clean architecture, CQRS patterns, and domain-driven design for systems that must remain maintainable and auditable at scale.',
                  tags:['CQRS / DDD','EF Core','SQL Server','Audit Trails','Financial Systems']},
                {Icon:IconRefreshCw,title:'Legacy .NET Framework Migration',
                  desc:'Structured migration of .NET Framework 4.x and early .NET Core applications to .NET, with full dependency audit, breaking change resolution, performance profiling, and regression test coverage. Retain your business logic while gaining modern security and cloud compatibility.',
                  tags:['.NET Migration','Rollout Planning','EF6 → EF Core','Performance Profiling','LTS Upgrade']},
                {Icon:IconBox,      title:'Microservices Architecture',
                  desc:'Decomposition of monolithic .NET applications into independently deployable microservices, containerised with Docker, orchestrated with Kubernetes or Azure Container Apps, and connected via Azure Service Bus or RabbitMQ event buses. Ideal for high-scale systems requiring independent scaling.',
                  tags:['Docker / Kubernetes','Azure Container Apps','Service Bus','API Gateway','Event-Driven']},
              ].map((s,i)=>(
                <article key={i} className={`ip-service-card animate__animated ${svInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}} itemScope itemType="https://schema.org/Service">
                  <div className="ip-service-card__icon"><s.Icon s={22} /></div>
                  <h3 className="ip-service-card__title" itemProp="name">{s.title}</h3>
                  <p className="ip-service-card__desc" itemProp="description">{s.desc}</p>
                  <div className="ip-service-card__tags">{s.tags.map(t=><span key={t} className="ip-stag">{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section ip-dark-band" ref={procRef} aria-labelledby="process-heading">
          <div className="container">
            <p className="section-eyebrow">How We Deliver</p>
            <div className="section-title">
              <h2 id="process-heading">Our Web Application Development Process</h2>
              <p>Start with representative workflows, existing system documentation, and the decisions users need to make. Agree on scope, review points, testing responsibilities, and release acceptance criteria before implementation.</p>
            </div>
            <ol className="ip-process__steps" aria-label="Web application development process steps">
              {[
                {n:"01",icon:'📋',title:'Discovery & Fixed-Price Scope',              desc:'We document your functional and non-functional requirements in a detailed technical scope, including data models, user roles, integration points, and security requirements. You approve the scope and a fixed price before a single line of code is written.'},
                {n:"02",icon:'🏗️',title:'Architecture Design & Technology Selection', desc:'We design the system architecture, choosing the right patterns (Clean Architecture, CQRS, DDD) for your system\'s complexity, defining the data model, API contracts, and security architecture before development begins.'},
                {n:"03",icon:'⚙️',title:'Agile Development in 2-Week Sprints',       desc:'Development runs in two-week sprints with working software deployed to a shared staging environment after each sprint. You review real functionality, not slide decks, before we advance to the next sprint.'},
                {n:"04",icon:'🔒',title:'Security Audit, QA & Performance Testing',   desc:'Before launch: OWASP Top 10 security validation, penetration testing, load testing against agreed performance SLAs, and full regression test suite execution, covering every critical user journey in the application.'},
                {n:"05",icon:'🚀',title:'Deployment, Documentation & Post-Launch',    desc:"Plan release automation, hosting configuration, monitoring, and documentation as part of delivery. Confirm the initial support window and the ongoing maintenance responsibilities in the agreement."},
              ].map((step,i)=>(
                <li key={i} className={`ip-process__step animate__animated ${procInView?'animate__fadeInLeft':''}`} style={{animationDelay:`${i*0.09}s`}}>
                  <div className="ip-process__step-num" aria-label={`Step ${step.n}`}>{step.n}</div>
                  <span className="ip-process__step-icon" aria-hidden="true">{step.icon}</span>
                  <div className="ip-process__step-body"><h4>{step.title}</h4><p>{step.desc}</p></div>
                </li>
              ))}
            </ol>

            {/* Case Study */}
            <div className="wapp-case" aria-label="Illustrative application modernization plan">
              <div className="wapp-case__steps">
                <h3 style={{color:'#fff',fontSize:'1rem',fontWeight:'700',marginBottom:'16px'}}>Illustrative Modernization Plan</h3>
                {[
                  {n:"01",title:'Challenge',     desc:"An existing business application may struggle with growing usage, disconnected records, and workflows that are difficult to change. This is an illustrative modernization scenario."},
                  {n:"02",title:'Approach',      desc:"Assess dependencies and data flows, then plan a phased module replacement with regression testing, backup verification, and a rehearsed release process."},
                  {n:"03",title:'Outcome',       desc:"Agree on measurable acceptance criteria such as response time for key tasks, correct permissions, and data reconciliation. Verify these outcomes during testing rather than assuming an improvement."},
                ].map((step,i)=>(
                  <div key={i} className="wapp-case__step">
                    <div className="wapp-case__step-num">{step.n}</div>
                    <div className="wapp-case__step-body"><h4>{step.title}</h4><p>{step.desc}</p></div>
                  </div>
                ))}
              </div>
              <div className="wapp-case__results" aria-label="Modernization acceptance criteria">
                {[{num:"Scope",label:"Key workflow performance checks"},{num:"Review",label:"Access and dependency review"},{num:"Plan",label:"Maintainability review"},{num:"Test",label:"Backup and rollback rehearsal"}].map((r,i)=>(
                  <div key={i} className="wapp-case__result">
                    <span className="wapp-case__result-num">{r.num}</span>
                    <span className="wapp-case__result-label">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY QLLMSOFT ── */}
        <section className="section ip-why" ref={whyRef} aria-labelledby="why-heading">
          <div className="container">
            <p className="section-eyebrow">Why QllmSoft</p>
            <div className="section-title">
              <h2 id="why-heading">How We Plan Web Application Delivery</h2>
              <p>Assess a development partner by the questions they ask about your workflows, data, testing, and ongoing operations. The project agreement should make responsibilities and review points clear.</p>
            </div>
            <div className="ip-why__grid">
              {[
                {Icon:IconCode,     title:'10+ Years of Production .NET Experience',      desc:'Healthcare, finance, logistics, manufacturing, HR, and government sectors, real production experience accumulated maintaining, extending, and debugging .NET systems under real business constraints.'},
                {Icon:IconDollar,   title:"Documented Scope and Change Review",           desc:"Document the deliverables, assumptions, dependencies, and acceptance criteria. Agree on how scope changes will be assessed before they affect implementation."},
                {Icon:IconUsers,    title:"Delivery Roles and Responsibilities",      desc:"Agree who is responsible for discovery, implementation, testing, release, and ongoing support. Identify required access and external dependencies before delivery starts."},
                {Icon:IconShield,   title:"Security Requirements at Architecture Level",         desc:'Security decisions are made at the architecture stage, authentication, authorisation, data protection, and input validation are designed before development begins, not patched afterward.'},
                {Icon:IconTrending, title:'Verified Global Track Record',                 desc:"Consider marketplace feedback alongside a discussion of architecture, workflow requirements, testing, and handover for your application."},
                {Icon:IconGlobe,    title:'Scope-Based Project Planning',         desc:'Compare proposals by deliverables, integration responsibilities, testing, handover, and ongoing costs. Confirm source-code ownership and third-party licensing in the agreement.'},
              ].map((w,i)=>(
                <article key={i} className={`ip-why-card animate__animated ${whyInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}}>
                  <div className="ip-why-card__icon"><w.Icon s={20} /></div>
                  <h3 className="ip-why-card__title">{w.title}</h3>
                  <p className="ip-why-card__desc">{w.desc}</p>
                </article>
              ))}
            </div>

            {/* Trust numbers strip */}
            <div className="wapp-trust-strip" aria-label="QllmSoft key performance numbers">
              {[{num:'10+',label:'Years in .NET Development'},{num:"Build",label:"Workflow-specific software"},{num:"Read",label:"Client feedback"},{num:"Read",label:"Client feedback"},{num:"Scope",label:"Project Requirements Review"}].map((t,i,arr)=>(
                <React.Fragment key={t.label}>
                  <div className="wapp-trust-item">
                    <span className="wapp-trust-item__num">{t.num}</span>
                    <span className="wapp-trust-item__label">{t.label}</span>
                  </div>
                  {i<arr.length-1&&<div className="wapp-trust-sep" aria-hidden="true" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="section ip-stack" aria-labelledby="stack-heading">
          <div className="container">
            <p className="section-eyebrow">Technology Stack</p>
            <div className="section-title">
              <h2 id="stack-heading">ASP.NET Core Web Application Technology Stack</h2>
              <p>The complete Microsoft .NET ecosystem our engineers command, from framework to cloud deployment.</p>
            </div>
            <div className="ip-stack__grid">
              {[
                {color:'#1A365D',label:'Frameworks & Runtime', items:["ASP.NET Core","C#",'Blazor (WASM & Server)','SignalR (real-time)','Minimal APIs']},
                {color:'#2B6CB0',label:'Data & API',           items:["Entity Framework Core",'Dapper','SQL Server 2022','REST (OpenAPI 3.0)','GraphQL (Hot Chocolate)']},
                {color:'#edb702',label:'Security & Auth',      items:["OWASP Security Guidance",'JWT Tokens','OAuth 2.0 / OIDC','ASP.NET Core Identity','Azure AD / B2C']},
                {color:'#276749',label:'Cloud & DevOps',       items:['Microsoft Azure (App Service)','Azure DevOps CI/CD','Docker & Kubernetes','GitHub Actions','Application Insights']},
              ].map((col,i)=>(
                <article key={i} className="ip-stack-col" style={{'--col-color':col.color}} aria-label={`${col.label} technologies`}>
                  <h3 className="ip-stack-col__label">{col.label}</h3>
                  <ul className="ip-stack-col__list">{col.items.map(item=><li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="section ip-testimonials" ref={revRef} aria-labelledby="reviews-heading">
          <div className="container">
            <p className="section-eyebrow">Verified Client Reviews</p>
            <div className="section-title">
              <h2 id="reviews-heading">Client Feedback on Working With QllmSoft</h2>
              <p>Owner-provided client feedback with marketplace sources. Review the linked profiles for project context and current ratings.</p>
            </div>
            <div className="ip-reviews__grid">
              {clientReviews.map(review => ({ name: review.name, loc: review.location, img: review.avatar, text: review.review, rating: review.rating })).map((r,i)=>(
                <article key={i} className={`ip-review-card animate__animated ${revInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.1}s`}}  >
                  <div className="ip-review-card__stars" aria-label={`${r.rating} out of 5 stars`}   >
                    {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                  </div>
                  <p className="ip-review-card__text" >{r.text}</p>
                  <div className="ip-review-card__author"   >
                    <img src={r.img} alt={`${r.name}, client feedback profile image`} loading="lazy" width="44" height="44" />
                    <div><strong >{r.name}</strong><span>{r.loc}, Freelancer</span></div>
                  </div>
                </article>
              ))}
            </div>
            <div style={{textAlign:'center',marginTop:'24px',display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="https://www.freelancer.com/u/mrprogrmmr" target="_blank" rel="noopener noreferrer" className="ip-btn-outline" aria-label="View QllmSoft web development reviews on Freelancer">View Freelancer Reviews</a>
              <a href="https://www.upwork.com/freelancers/zainulabedinpk" target="_blank" rel="noopener noreferrer" className="ip-btn-outline" aria-label="Verify QllmSoft on Upwork">Verify Upwork Status</a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section csd-faq ip-faq" aria-labelledby="faq-heading"  >
          <div className="container">
            <p className="section-eyebrow">Common Questions</p>
            <div className="section-title">
              <h2 id="faq-heading">Web Application Development FAQ</h2>
              <p>Practical answers to the questions businesses ask most before commissioning web application development with QllmSoft.</p>
            </div>
            <div className="csd-faq__list">{FAQ_DATA.map((faq,i)=><FAQItem key={i} faq={faq} index={i} />)}</div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section ip-cta" aria-labelledby="cta-heading">
          <div className="ip-cta__bg" aria-hidden="true" />
          <div className="container ip-cta__inner">
            <div className="ip-cta__left">
              <p className="section-eyebrow" style={{color:'#edb702',textAlign:'left',margin:'0 0 12px'}}>Start Your Project</p>
              <h2 id="cta-heading">Discuss Your Web Application Requirements</h2>
              <p className="ip-cta__desc">Whether you need an enterprise portal, a REST API, a multi-tenant SaaS platform, or a .NET Framework migration, discuss the workflows, integrations, security requirements, and delivery responsibilities with our team.</p>
              <div className="ip-cta__buttons">
                <Link to="/contact" className="ip-btn-primary" aria-label="Get a free web application development quote from QllmSoft">Get a Free Quote</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20a%20web%20application%20project!" target="_blank" rel="noopener noreferrer" className="ip-btn-whatsapp" aria-label="WhatsApp QllmSoft about web application development">💬 WhatsApp Us</a>
              </div>
              <div className="ip-cta__perks">{['✓ Fixed-price scope','✓ Security requirements reviewed','✓ NDA on day one','✓ Agreed support scope'].map(p=><span key={p}>{p}</span>)}</div>
            </div>
            <aside className="ip-cta__right">
              <div className="ip-cta__contact">
                <h3>Quick Contact</h3>
                <a href="mailto:qllmsoft@gmail.com" className="ip-cta__contact-row">📧 qllmsoft@gmail.com</a>
                <a href="https://wa.me/923348229288" target="_blank" rel="noopener noreferrer" className="ip-cta__contact-row">💬 WhatsApp: discuss your project</a>
                <a href="tel:+923348229288" className="ip-cta__contact-row">📞 +92 334 8229288</a>
              </div>
              <nav className="ip-cta__related" aria-label="Related services">
                <p className="ip-cta__related-title">Related Services</p>
                <Link to="/website-development-services">Website Development</Link>
                <Link to="/api-development-services">API Development</Link>
                <Link to="/hire-dotnet-developers-pakistan">Hire .NET Developers</Link>
                <Link to="/legacy-system-modernization-services">Legacy Modernization</Link>
                <Link to="/outsource-software-development-to-pakistan">Outsource to Pakistan</Link>
              </nav>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebAppDevelopment;
