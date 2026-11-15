/**
 * HireAngularDevelopers.jsx
 * TARGET KEYWORDS:
 *  Primary:   hire Angular developers Pakistan
 *             hire Angular developer in Pakistan
 *  Secondary: dedicated Angular developer Pakistan, Angular development company Pakistan,
 *             Angular developer for hire Pakistan, Angular web development Pakistan,
 *             remote Angular developer Pakistan, hire Angular.js developer, Angular Pakistan
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './HireDeveloper.css';
import 'animate.css';
import { clientReviews } from "../data/clientReviews";
import { schemaOrganization } from "../data/schema";

const PAGE_URL = 'https://qllmsoft.com/hire-angular-developers-pakistan';
const PAGE_TITLE = "Hire Angular Developers in Pakistan | QllmSoft";
const PAGE_DESCRIPTION = "Hire Angular developers for existing applications, new features and migrations. Discuss your codebase, API dependencies, team responsibilities and scope.";
const OG_IMAGE  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';

const orgSchema = schemaOrganization;

const schemaService = {
  '@context':'https://schema.org','@type':'Service',
  '@id':PAGE_URL+'#service',
  serviceType:'Angular Development',
  name:'Hire Angular Developers in Pakistan',
  description:'QllmSoft provides dedicated, remote, and offshore Angular developers in Pakistan. Expert Angular engineers for enterprise SPAs, progressive web apps, corporate portals, and full-stack Angular + ASP.NET Core solutions for global businesses.',
  provider:{'@id':'https://qllmsoft.com/#organization'},
  areaServed:['Pakistan','United States','United Kingdom','UAE','Saudi Arabia'],
  url:PAGE_URL,
  hasOfferCatalog:{
    '@type':'OfferCatalog',name:'Angular Developer Hiring Models',
    itemListElement:[
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Dedicated Angular Developer Pakistan'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Remote Angular Developer Pakistan'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Full-Stack Angular + ASP.NET Core Developer'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Angular Enterprise Application Development Pakistan'}},
    ],
  },
  // NOTE: no aggregateRating here. The individual Review blocks rendered
  // in the testimonials section (with Review/Rating microdata) are the
  // correct, safe way to surface star ratings. A hardcoded
  // AggregateRating with an invented ratingValue/reviewCount is exactly
  // the kind of unverifiable structured data Google's spam policies
  // target — remove it, don't just lower the numbers.
};

const schemaWebPage = {
  '@context':'https://schema.org','@type':'WebPage',
  '@id':PAGE_URL+'#webpage',
  name:'Hire Angular Developers in Pakistan | QllmSoft',
  url:PAGE_URL,
  description:'Hire expert Angular developers in Pakistan from QllmSoft. Dedicated, remote, and offshore Angular engineers delivering enterprise web apps, SPAs, and full-stack solutions.',
  isPartOf:{'@id':'https://qllmsoft.com/#website'},
  about:{'@id':PAGE_URL+'#service'},
  inLanguage:'en-US',
  // aggregateRating deliberately removed — see note on schemaService above.
};

const schemaBreadcrumb = {
  '@context':'https://schema.org','@type':'BreadcrumbList',
  itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:'https://qllmsoft.com/'},
    {'@type':'ListItem',position:2,name:'Services',item:'https://qllmsoft.com/services'},
    {'@type':'ListItem',position:3,name:'Hire Angular Developers Pakistan',item:PAGE_URL},
  ],
};

const FAQ_DATA = [
  {q:"What should we define before hiring an Angular developer?",a:"Describe the product, Angular version, component library, existing APIs, test setup, and the work your team needs help delivering. Identify whether you need frontend capacity, a migration, or responsibility for a complete application. These are different engagements."},
  {q:"How are Angular developer rates and project costs estimated?",a:"The level of responsibility, application complexity, existing code quality, required availability, and backend work affect the proposal. Agree on expected deliverables, review responsibilities, engagement hours, and change handling. Compare total scope rather than headline hourly rates alone."},
  {q:"Should our team choose Angular or React?",a:"Consider your current application, developer experience, UI requirements, libraries, and maintenance plans. Angular includes an integrated framework and tooling; React is a UI library used with other tools. Neither choice guarantees better security or performance. Review the workload and team before deciding."},
  {q:"How is onboarding planned?",a:"Start dates depend on team availability, repository and environment access, documentation, and the scope of the role. Agree on the first tasks, review process, communication times, and acceptance criteria before scheduling an engineer."},
  {q:"Can the engagement include the backend?",a:"Where agreed, Angular work can include integration with an ASP.NET Core backend and SQL Server. Clarify ownership of API contracts, authentication, data modeling, deployments, and tests so frontend delivery is not blocked by unassigned backend work."},
  {q:"Can you help migrate an AngularJS or older Angular application?",a:"Begin with a dependency and application review. AngularJS and modern Angular are different frameworks; migration may require substantial redesign of components and services. Plan compatibility, incremental delivery where practical, regression tests, and the supported target version before estimating the work."},
];

const schemaFAQ = {
  '@context':'https://schema.org','@type':'FAQPage',
  mainEntity:FAQ_DATA.map(({q,a})=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})),
};

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const id = `ang-faq-${index}`;
  return (
    <div className={`faq-item ${open?'faq-item--open':''}`}   >
      <button className="faq-question" onClick={()=>setOpen(o=>!o)} aria-expanded={open} aria-controls={id} >
        <span>{faq.q}</span><span className="faq-icon" aria-hidden="true">{open?'−':'+'}</span>
      </button>
      {open&&<div id={id} className="faq-answer"   ><p >{faq.a}</p></div>}
    </div>
  );
};

const HireAngularDevelopers = () => {
  const { ref:skillsRef,   inView:skillsInView   } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:servicesRef, inView:servicesInView  } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:stackRef,    inView:stackInView     } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:modelsRef,   inView:modelsInView    } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:processRef,  inView:processInView   } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:compareRef,  inView:compareInView   } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:industryRef, inView:industryInView  } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:reviewRef,   inView:reviewInView    } = useInView({ triggerOnce:true, threshold:0.08 });

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
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
        <meta property="og:image:alt" content="Hire Angular Developers Pakistan — QllmSoft" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Hire Angular Developers Pakistan" />
        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="hd-page" style={{'--hd-accent':'#1A365D','--hd-accent-light':'#EBF8FF','--hd-accent-border':'#BEE3F8'}} role="main">


        {/* HERO */}
        <header className="hd-hero" role="banner">
          <div className="hd-hero__cut" aria-hidden="true" />
          <div className="container hd-hero__inner">
            <div className="hd-hero__content">
              <div className="hd-hero__eyebrow">
                <span className="hd-hero__dot" aria-hidden="true" />
                Angular Development Capacity for Your Team
              </div>
              <h1 className="hd-hero__title">
                Hire Expert <span className="hd-hero__title-highlight">Angular Developers</span><br />
                in Pakistan
              </h1>
              <p className="hd-hero__sub">
                Add Angular development capacity to an existing product team, deliver new interface features, or assess an application migration. Define the role, codebase, API dependencies, and review process before choosing the engagement.
              </p>
              <div className="hd-hero__buttons">
                <Link to="/contact" className="hd-btn-primary" aria-label="Hire Angular developers from QllmSoft Pakistan today">Hire Angular Developers Now</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20hire%20an%20Angular%20developer!" target="_blank" rel="noopener noreferrer" className="hd-btn-whatsapp" aria-label="WhatsApp QllmSoft to hire an Angular developer">💬 WhatsApp Us</a>
              </div>
              <div className="hd-hero__stats" aria-label="QllmSoft Angular development track record">
                {[{num:"Scope",label:"Role and deliverables"},{num:"Code",label:"Dependencies reviewed"},{num:"Test",label:"Acceptance criteria"},{num:"Plan",label:"Release responsibilities"}].map(s=>(
                  <div key={s.label} className="hd-hero__stat">
                    <span className="hd-hero__stat-num">{s.num}</span>
                    <span className="hd-hero__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hd-hero__models" aria-label="Angular developer hiring options">
              <p className="hd-hero__models-title">Choose Your Hiring Model</p>
              {[
                {icon:'👤',title:'Dedicated Angular Developer', desc:'Full-time, exclusively yours',          badge:'Most Popular', badgeClass:'hd-badge-gold'},
                {icon:'🏢',title:'Enterprise Angular Team',     desc:'Full squad for complex platforms',      badge:'Enterprise',   badgeClass:'hd-badge-blue'},
                {icon:'🔗',title:'Full-Stack Angular + .NET',   desc:'Frontend + ASP.NET Core backend',       badge:'Full Stack',   badgeClass:'hd-badge-purple'},
                {icon:'⚡',title:'Fixed-Price Angular Project', desc:'Defined scope, fixed cost & timeline',  badge:'Quick Start',  badgeClass:'hd-badge-green'},
              ].map((m,i)=>(
                <div key={i} className="hd-model-card">
                  <div className="hd-model-card__left">
                    <div className="hd-model-card__icon">{m.icon}</div>
                    <div><strong>{m.title}</strong><p>{m.desc}</p></div>
                  </div>
                  <span className={`hd-model-badge ${m.badgeClass}`}>{m.badge}</span>
                </div>
              ))}
              <div className="hd-hero__tech" aria-label="Angular technologies">
                {['Angular','TypeScript','RxJS','NgRx','Angular Material','ASP.NET Core'].map(t=><span key={t} className="hd-tech-pill">{t}</span>)}
              </div>
            </aside>
          </div>
        </header>

        {/* INTRO */}
        <section className="section hd-intro" aria-labelledby="intro-heading">
          <div className="container">
            <p className="section-eyebrow">Why Hire Angular Developers from Pakistan</p>
            <div className="hd-intro__layout">
              <div className="hd-intro__text">
                <h2 id="intro-heading">Define the Role Your Product Team Needs</h2>
                <p>Hiring an Angular developer is a decision about delivery responsibility as well as framework experience. Identify the features or maintenance work you need, how the engineer will work with your team, and who owns reviews, testing, and releases.</p>
                <p>Our <strong>Angular developers in Pakistan</strong> can work on component-based interfaces, forms, routing, data access, and application maintenance. Review the existing Angular version and dependencies before selecting libraries or estimating an upgrade. Check the <a href="https://angular.dev/reference/releases" target="_blank" rel="noopener noreferrer">official Angular release and support policy</a> when choosing the target version. For a complete build, see our <Link to="/web-application-development-services">web application development services</Link>; for backend interfaces, review <Link to="/api-development-services">API development and integration</Link>.</p>
                <p>Agree on availability, communication, repository access, source-code rights, and handover in the proposal. Geography alone does not determine project cost or delivery quality. See our <Link to="/outsource-software-development-to-pakistan">software outsourcing services</Link> for broader engagement options. For a documented application scope, review our <Link to="/projects/logistics-fleet-management-system">logistics and warehouse project</Link>.</p>
              </div>
              <aside className="hd-intro__highlights" aria-label="Angular hiring advantages">
                {[
                  {icon:'🏗️',title:'Angular Specialists',      sub:'Signals, standalone, control flow'},
                  {icon:'💰',title:'Scoped Estimate',            sub:'Based on role, workload and availability'},
                  {icon:'⚡',title:'Fast Onboarding',              sub:'Schedule after scope and access review'},
                  {icon:'🔒',title:'NDA & Full IP Ownership',     sub:'Signed before work begins'},
                  {icon:'📊',title:'Enterprise Architecture',     sub:'SOLID, clean, maintainable code'},
                  {icon:'💬',title:'Direct Team Access',          sub:'No account manager middlemen'},
                ].map((h,i)=>(
                  <div key={i} className="hd-highlight">
                    <div className="hd-highlight__icon">{h.icon}</div>
                    <div><strong>{h.title}</strong><span>{h.sub}</span></div>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section hd-skills" ref={skillsRef} aria-labelledby="skills-heading">
          <div className="container">
            <p className="section-eyebrow">What Our Angular Developers Build</p>
            <div className="section-title">
              <h2 id="skills-heading">Angular Development Capabilities</h2>
              <p>Evaluate Angular engineers against your application scenarios — architecture decisions, performance under load, and maintainability over years — not just component syntax.</p>
            </div>
            <div className="hd-skills__grid">
              {[
                {icon:'🏢',title:'Enterprise Single Page Applications',desc:'Large-scale Angular SPAs for internal business tools, customer portals, and complex B2B platforms — with module federation, lazy loading, and strict TypeScript for long-term maintainability across distributed teams.',tags:['Angular','Standalone Components','Module Federation','Lazy Loading']},
                {icon:'🔄',title:'AngularJS to Angular Migration',desc:'Complete migration from AngularJS (Angular 1.x) to modern Angular — preserving your business logic, API contracts, and user experience with compatibility checks and a supported target version agreed before implementation.',tags:['AngularJS Migration','Hybrid Approach','Angular Upgrade','TypeScript']},
                {icon:'🎨',title:'Angular Material & Design Systems',desc:'Enterprise UI systems built with Angular Material, PrimeNG, or custom component libraries — with reusable components, documented interaction patterns, and accessibility testing appropriate to the users and supported devices.',tags:['Angular Material','PrimeNG','CDK','Storybook','Accessibility']},
                {icon:'📡',title:'Real-Time Angular Applications',desc:'Angular applications with live data feeds using WebSockets, SignalR, and RxJS operators — dashboards that update in real time without page refreshes, ideal for logistics, finance, and operational monitoring.',tags:['SignalR','WebSockets','RxJS','BehaviorSubject']},
                {icon:'🔗',title:'Full-Stack Angular + ASP.NET Core',desc:'End-to-end web applications with Angular frontends connected to secure ASP.NET Core Web API backends — including Entity Framework Core, SQL Server, OAuth 2.0 / JWT authentication, and Azure deployment.',tags:['ASP.NET Core','Entity Framework','SQL Server','JWT','Azure']},
                {icon:'📊',title:'Angular Dashboards & Analytics UIs',desc:'Data-rich dashboards using NgRx for complex state management, Angular CDK virtual scrolling for large datasets, and charting libraries (Highcharts, ECharts, D3.js) for meaningful visual data exploration.',tags:['NgRx','Virtual Scroll','Highcharts','D3.js','ECharts']},
              ].map((s,i)=>(
                <article key={i} className={`hd-skill-card animate__animated ${skillsInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}} itemScope itemType="https://schema.org/Service">
                  <span className="hd-skill-card__icon" aria-hidden="true">{s.icon}</span>
                  <h3 className="hd-skill-card__title" itemProp="name">{s.title}</h3>
                  <p className="hd-skill-card__desc" itemProp="description">{s.desc}</p>
                  <div className="hd-skill-card__tags">{s.tags.map(t=><span key={t} className="hd-stag">{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES (dark) */}
        <section className="section hd-services" ref={servicesRef} aria-labelledby="services-heading">
          <div className="container">
            <p className="section-eyebrow">Angular Services We Deliver</p>
            <div className="section-title">
              <h2 id="services-heading">Angular Development Services in Pakistan</h2>
              <p>From a single feature to a complete enterprise Angular platform — every engagement is scoped, structured, and delivered with full transparency.</p>
            </div>
            <div className="hd-services__grid">
              {[
                {n:'01',title:'Custom Angular Web Application Development',desc:'Bespoke Angular applications built with clean architecture, feature modules, smart/dumb component separation, and strict TypeScript — engineered for the long-term maintainability that enterprise teams demand.',tags:['Angular','TypeScript','SOLID Principles','Clean Architecture']},
                {n:'02',title:'Angular Single Page Application (SPA) Development',desc:'Fast, responsive SPAs with client-side routing, lazy-loaded feature modules, optimized bundle sizes, and server rendering where the deployment platform supports it for SEO-critical content.',tags:['Angular server rendering','SSR','Lazy Loading','Route Guards']},
                {n:'03',title:'Angular Progressive Web App (PWA) Development',desc:'Angular applications transformed into installable PWAs — offline capability through service workers, push notifications, home screen installation, and performance checks on representative devices.',tags:['Service Workers','PWA','Offline Cache','Push Notifications']},
                {n:'04',title:'Angular Enterprise Portal Development',desc:'Multi-role enterprise portals with granular role-based access control, complex form workflows, approval chains, audit logging, and deep integration with existing ERP and CRM systems via REST APIs.',tags:['RBAC','Reactive Forms','NgRx','ERP Integration']},
                {n:'05',title:'Angular Performance Optimization & Audit',desc:'Deep performance auditing of existing Angular applications — OnPush change detection strategy, async pipes, trackBy functions, bundle analysis, tree shaking, and Core Web Vitals remediation.',tags:['OnPush Strategy','Bundle Analysis','Tree Shaking','Lighthouse']},
                {n:'06',title:'Angular API Integration & State Management',desc:'Connect Angular frontends to REST APIs and GraphQL endpoints using clean service patterns, HTTP interceptors for auth and error handling, and NgRx or Akita for predictable, testable application state.',tags:['HTTP Interceptors','NgRx','Akita','Apollo GraphQL']},
              ].map((s,i)=>(
                <article key={i} className={`hd-service-card animate__animated ${servicesInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}} itemScope itemType="https://schema.org/Service">
                  <div className="hd-service-card__num" aria-hidden="true">{s.n}</div>
                  <h3 className="hd-service-card__title" itemProp="name">{s.title}</h3>
                  <p className="hd-service-card__desc" itemProp="description">{s.desc}</p>
                  <div className="hd-service-card__tags">{s.tags.map(t=><span key={t} className="hd-stag-dark">{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="section hd-stack" ref={stackRef} aria-labelledby="stack-heading">
          <div className="container">
            <p className="section-eyebrow">Technology Stack</p>
            <div className="section-title">
              <h2 id="stack-heading">Reviewing the Existing Stack</h2>
              <p>The complete technical stack our Angular developers command — from the Angular CLI to cloud deployment on Azure.</p>
            </div>
            <div className="hd-stack__grid">
              {[
                {color:'#1A365D',label:'Angular Ecosystem',items:['Angular (Standalone + Signals)','Angular CLI & Schematics','TypeScript (strict mode)','RxJS 7+','Angular server rendering (SSR)']},
                {color:'#2B6CB0',label:'State & Data',items:['NgRx (Store, Effects, Entity)','Akita State Management','Angular HTTP Client','GraphQL (Apollo Angular)','WebSockets & SignalR']},
                {color:'#edb702',label:'UI & Design',items:['Angular Material (v15+)','PrimeNG Enterprise UI','Tailwind CSS','Angular CDK','Storybook Component Docs']},
                {color:'#276749',label:'Backend & DevOps',items:['ASP.NET Core Web API','.NET 8','SQL Server / PostgreSQL','Azure Pipelines & DevOps','Docker / Kubernetes']},
              ].map((col,i)=>(
                <article key={i} className={`hd-stack-col animate__animated ${stackInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.1}s`,'--col-color':col.color}} aria-label={`${col.label} technologies`}>
                  <h3 className="hd-stack-col__label">{col.label}</h3>
                  <ul className="hd-stack-col__list">{col.items.map(item=><li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HIRING MODELS */}
        <section className="section hd-models-section" ref={modelsRef} aria-labelledby="models-heading">
          <div className="container">
            <p className="section-eyebrow">Flexible Engagement</p>
            <div className="section-title">
              <h2 id="models-heading">Angular Developer Hiring Models</h2>
              <p>Three engagement structures — each designed to match a different project size, risk profile, and budget. Agree on confidentiality, source-code ownership, availability and support in the engagement terms.</p>
            </div>
            <div className="hd-models__grid">
              {[
                {icon:'👤',badge:null,title:'Dedicated Angular Developer',subtitle:'Full-time, exclusively yours',desc:'A senior Angular engineer works exclusively on your project — embedded in your team, attending standups, using your project management tools. Full accountability, direct communication, no intermediaries.',features:['Availability and responsibilities agreed','Direct developer access daily','Integrate with your team workflow','Scale up or down monthly'],featured:false},
                {icon:'🎯',badge:'Most Popular',title:'Fixed-Price Angular Project',subtitle:'Defined scope, fixed cost',desc:'Perfect for well-scoped Angular projects. We agree on scope, timeline, and cost before development begins. Every milestone is documented and signed off — no budget surprises, no scope creep without your approval.',features:['Fixed cost, no surprises','Milestone-based delivery','Full NDA and IP transfer','Support period agreed in the proposal'],featured:true},
                {icon:'⏱️',badge:null,title:'Time & Material Retainer',subtitle:'Pay for actual hours delivered',desc:'For ongoing feature development or projects where requirements evolve. Pay only for hours delivered each sprint, with full transparency via weekly time reports and shared tracking dashboards.',features:['Weekly transparent time reporting','Adjust scope any sprint','Notice period and minimums agreed upfront','Perfect for agile product teams'],featured:false},
              ].map((m,i)=>(
                <article key={i} className={`hd-model-section-card ${m.featured?'hd-model-section-card--featured':''} animate__animated ${modelsInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.12}s`}}>
                  {m.badge&&<span className="hd-model-section-card__badge">{m.badge}</span>}
                  <div className="hd-model-section-card__icon">{m.icon}</div>
                  <h3 className="hd-model-section-card__title">{m.title}</h3>
                  <p className="hd-model-section-card__subtitle">{m.subtitle}</p>
                  <p className="hd-model-section-card__desc">{m.desc}</p>
                  <ul className="hd-model-section-card__features">{m.features.map(f=><li key={f}>{f}</li>)}</ul>
                  <Link to="/contact" className="hd-model-cta" aria-label={`Enquire about ${m.title} for Angular development`}>Enquire Now</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section hd-process" ref={processRef} aria-labelledby="process-heading">
          <div className="container">
            <p className="section-eyebrow">How We Work</p>
            <div className="section-title">
              <h2 id="process-heading">How the Engagement Is Planned</h2>
              <p>A structured, agile delivery process designed to reduce risk, maintain quality, and give you full visibility at every stage of the Angular build.</p>
            </div>
            <ol className="hd-process__steps" aria-label="Angular development process steps">
              {[
                {n:'01',icon:'📋',title:'Architecture Planning & Technical Discovery',desc:'We analyze your requirements, define the Angular module structure, choose the right state management strategy, design the component hierarchy, and plan API contracts before a single component is built.'},
                {n:'02',icon:'🎨',title:'UI/UX Design & Angular-Ready Prototyping',desc:'Figma prototypes aligned to Angular component boundaries — so what designers produce maps directly to the Angular component and service structure, eliminating friction in the handover to development.'},
                {n:'03',icon:'🏗️',title:'Agile Angular Development Sprints',desc:'2-week sprints with working Angular features deployed to a shared staging environment after each sprint. Full Jira visibility, daily standups, and code pushed to your repository from day one.'},
                {n:'04',icon:'🧪',title:'Testing, Code Review & Performance QA',desc:'Unit testing with Jasmine and Karma, E2E testing with Cypress or Playwright, senior code review against Angular style guide, and bundle analysis for load time and Core Web Vitals measurements.'},
                {n:'05',icon:'🚀',title:'Deployment, Handover & Post-Launch Support',desc:'Deployment to Azure, AWS, or your preferred platform with CI/CD pipeline configuration. Full code documentation, developer handover session, and support scope agreed before release.'},
              ].map((step,i)=>(
                <li key={i} className={`hd-process__step animate__animated ${processInView?'animate__fadeInLeft':''}`} style={{animationDelay:`${i*0.09}s`}}>
                  <div className="hd-process__step-left">
                    <div className="hd-process__step-num" aria-label={`Step ${step.n}`}>{step.n}</div>
                    <span className="hd-process__step-icon" aria-hidden="true">{step.icon}</span>
                  </div>
                  <div className="hd-process__step-body"><h4>{step.title}</h4><p>{step.desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section hd-compare" ref={compareRef} aria-labelledby="compare-heading">
          <div className="container">
            <p className="section-eyebrow">The Business Case</p>
            <div className="section-title">
              <h2 id="compare-heading">Hiring Angular Developers — Options Compared</h2>
              <p>A clear look at how hiring Angular developers from QllmSoft Pakistan compares to in-house hiring and freelancer marketplaces.</p>
            </div>
            <div className="hd-compare-wrap">
              <table className={`hd-compare-table animate__animated ${compareInView?'animate__fadeInUp':''}`} aria-label="Angular developer hiring comparison: in-house vs freelancer vs QllmSoft Pakistan">
                <caption>Angular Developer Hiring — In-House vs Freelancer vs QllmSoft Pakistan</caption>
                <thead><tr><th scope="col">Factor</th><th scope="col">In-House (US/UK)</th><th scope="col">Freelancer Marketplace</th><th scope="col" className="hd-col-highlight">QllmSoft Pakistan ✓</th></tr></thead>
                <tbody>
                  {[
  {
    "f": "Delivery ownership",
    "a": "Managed by your organization",
    "b": "Agree with the individual",
    "c": "Agree team roles and review responsibilities"
  },
  {
    "f": "Framework support",
    "a": "Maintain an upgrade plan",
    "b": "Review current experience",
    "c": "Assess version and dependency compatibility"
  },
  {
    "f": "Application experience",
    "a": "Review relevant previous work",
    "b": "Review relevant previous work",
    "c": "Discuss representative workflows and code"
  },
  {
    "f": "Code review",
    "a": "Define reviewer availability",
    "b": "Agree review responsibilities",
    "c": "Include review and acceptance criteria in scope"
  },
  {
    "f": "Onboarding",
    "a": "Depends on access and readiness",
    "b": "Depends on access and readiness",
    "c": "Schedule after access and scope are confirmed"
  },
  {
    "f": "Ownership",
    "a": "Confirm employment terms",
    "b": "Confirm contract and licenses",
    "c": "Confirm custom-code rights and third-party licenses"
  },
  {
    "f": "Maintenance",
    "a": "Assign internal ownership",
    "b": "Agree ongoing scope",
    "c": "Agree support period and maintenance responsibilities"
  }
].map((row,i)=>(
                    <tr key={i}>
                      <td className="hd-col-factor">{row.f}</td>
                      <td>{row.a}</td>
                      <td>{row.b}</td>
                      <td className="hd-col-highlight hd-col-good">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="section hd-industries" ref={industryRef} aria-labelledby="industries-heading">
          <div className="container">
            <p className="section-eyebrow">Industries We Serve</p>
            <div className="section-title">
              <h2 id="industries-heading">Examples of Application Workflows</h2>
              <p>Angular's enterprise architecture makes it a common choice for regulated, complex, and data-intensive industries. Our developers bring domain context to match.</p>
            </div>
            <div className="hd-industries__grid">
              {[
                {icon:'🏦',title:'Finance & Banking',      desc:'Trading dashboards, compliance portals, risk management UIs, and customer banking interfaces built with Angular and real-time data streams.'},
                {icon:'🏥',title:'Healthcare',             desc:'Patient management portals, clinical dashboards, EHR display interfaces, and appointment systems with sensitive-data handling requirements assessed before implementation.'},
                {icon:'🏭',title:'Manufacturing & Industry',desc:'Production monitoring dashboards, quality control interfaces, ERP-connected Angular portals, and real-time equipment status screens.'},
                {icon:'🎓',title:'Education & eLearning',  desc:'LMS administration panels, student progress dashboards, course delivery interfaces, and institutional reporting tools built with Angular Material.'},
                {icon:'🏢',title:'Enterprise & B2B SaaS',  desc:'Multi-tenant admin portals, complex approval workflow tools, data management platforms, and internal business tools for enterprise operations.'},
                {icon:'🚚',title:'Logistics & Supply Chain',desc:'Shipment tracking dashboards, warehouse management UIs, route optimization interfaces, and supply chain visibility portals built with live data.'},
              ].map((ind,i)=>(
                <article key={i} className={`hd-industry-card animate__animated ${industryInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}}>
                  <span className="hd-industry-card__icon" aria-hidden="true">{ind.icon}</span>
                  <h3 className="hd-industry-card__title">{ind.title}</h3>
                  <p className="hd-industry-card__desc">{ind.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section hd-testimonials" ref={reviewRef} aria-labelledby="reviews-heading">
          <div className="container">
            <p className="section-eyebrow">Verified Client Reviews</p>
            <div className="section-title">
              <h2 id="reviews-heading">Client Feedback on Working With QllmSoft</h2>
              <p>Independent reviews from global clients on Freelancer and Upwork.</p>
            </div>
            <div className="hd-reviews__grid">
              {clientReviews.slice(0, 3).map(r => ({name:r.name,loc:r.location,img:r.avatar,text:r.review,rating:r.rating})).map((r,i)=>(
                <article key={i} className={`hd-review-card animate__animated ${reviewInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.1}s`}}  >
                  <div className="hd-review-card__stars" aria-label={`${r.rating} out of 5 stars`}   >
                    {'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}
                  </div>
                  <p className="hd-review-card__text" >{r.text}</p>
                  <div className="hd-review-card__author"   >
                    <img src={r.img} alt={`${r.name} — QllmSoft client from ${r.loc}`} loading="lazy" width="46" height="46" />
                    <div><strong >{r.name}</strong><span>{r.loc} — Freelancer</span></div>
                  </div>
                </article>
              ))}
            </div>
            <div style={{textAlign:'center',marginTop:'28px',display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="https://www.freelancer.com/u/mrprogrmmr" target="_blank" rel="noopener noreferrer" className="hd-btn-outline" aria-label="View client reviews of QllmSoft on Freelancer">View Freelancer Reviews</a>
              <a href="https://www.upwork.com/freelancers/~0170e20f8803389a86" target="_blank" rel="noopener noreferrer" className="hd-btn-outline" aria-label="Verify QllmSoft status on Upwork">Verify Upwork Status</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section csd-faq hd-faq" aria-labelledby="faq-heading"  >
          <div className="container">
            <p className="section-eyebrow">Common Questions</p>
            <div className="section-title">
              <h2 id="faq-heading">Frequently Asked Questions — Hire Angular Developers in Pakistan</h2>
              <p>Practical answers to the questions businesses ask most before hiring Angular engineers from Pakistan.</p>
            </div>
            <div className="csd-faq__list">{FAQ_DATA.map((faq,i)=><FAQItem key={i} faq={faq} index={i} />)}</div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section hd-cta" aria-labelledby="cta-heading">
          <div className="hd-cta__bg" aria-hidden="true" />
          <div className="container hd-cta__inner">
            <div className="hd-cta__left">
              <p className="section-eyebrow" style={{color:'#edb702',textAlign:'left',margin:'0 0 12px'}}>Start Today</p>
              <h2 id="cta-heading">Ready to Hire Expert Angular Developers in Pakistan?</h2>
              <p className="hd-cta__desc">Whether you need a dedicated Angular engineer for ongoing enterprise development, a fixed-price Angular project, or a team with full-stack Angular + .NET capability — QllmSoft delivers the right expertise, on your timeline.</p>
              <div className="hd-cta__buttons">
                <Link to="/contact" className="hd-btn-primary" aria-label="Hire Angular developers from QllmSoft Pakistan — contact us now">Hire Angular Developers Now</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20hire%20an%20Angular%20developer!" target="_blank" rel="noopener noreferrer" className="hd-btn-whatsapp" aria-label="WhatsApp QllmSoft to discuss hiring an Angular developer">💬 WhatsApp Us</a>
              </div>
              <div className="hd-cta__perks">
                {['✓ Free consultation','✓ NDA on day one','✓ Fast onboarding','✓ Full IP ownership','✓ Support scope agreed'].map(p=><span key={p}>{p}</span>)}
              </div>
            </div>
            <aside className="hd-cta__right">
              <div className="hd-cta__contact-card">
                <h3>Quick Contact</h3>
                <a href="mailto:qllmsoft@gmail.com" className="hd-cta__contact-row">📧 qllmsoft@gmail.com</a>
                <a href="https://wa.me/923348229288" target="_blank" rel="noopener noreferrer" className="hd-cta__contact-row" aria-label="WhatsApp QllmSoft">💬 WhatsApp — discuss your requirements</a>
                <a href="tel:+923348229288" className="hd-cta__contact-row">📞 +92 334 8229288</a>
              </div>
              <nav className="hd-cta__related" aria-label="Related developer hiring pages">
                <p className="hd-cta__related-title">Related</p>
                <Link to="/hire-react-developers-pakistan">Hire React Developers</Link>
                <Link to="/hire-dotnet-developers-pakistan">Hire .NET Developers</Link>
                <Link to="/website-development-services">Web Development</Link>
                <Link to="/api-development-services">API Development</Link>
                <Link to="/outsource-software-development-to-pakistan">Outsource to Pakistan</Link>
              </nav>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};
export default HireAngularDevelopers;
