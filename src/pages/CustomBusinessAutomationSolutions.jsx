import React from "react";
import { Helmet } from "react-helmet-async";
import "./custom-business-automation.css";
import TestimonialSection from "../components/TestimonialSection";

const PAGE_URL = "https://qllmsoft.com/custom-business-automation-solutions";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://qllmsoft.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://qllmsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Custom Business Automation Solutions", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Business Automation Solutions",
  serviceType: "Business process automation software development",
  provider: { "@type": "Organization", name: "QllmSoft", url: "https://qllmsoft.com" },
  areaServed: "Worldwide",
  description:
    "Custom business automation software that replaces manual approvals, spreadsheet handoffs and repeated data entry with one connected system.",
  url: PAGE_URL,
};

const signs = [
  "The same information is typed into more than one tool.",
  "Approvals stall because nobody is sure who has the request.",
  "Weekly reports are rebuilt by hand in a spreadsheet.",
  "One person holds the process in their head, or in their inbox.",
  "Mistakes keep appearing at the same handoff.",
  "Growing means hiring people just to move information around.",
];

const offerings = [
  {
    title: "Approval workflows",
    text: "Purchase requests, leave, and sign-offs routed to the right person automatically, with a visible status.",
  },
  {
    title: "Data entry and syncing",
    text: "Information typed once and pushed everywhere it's needed, instead of copied between tools by hand.",
  },
  {
    title: "Reporting and dashboards",
    text: "Numbers pulled live from your systems instead of rebuilt in a spreadsheet every week.",
  },
  {
    title: "Notifications and reminders",
    text: "The right person alerted when something needs attention, instead of finding out it was missed.",
  },
  {
    title: "Third-party integrations",
    text: "Your CRM, accounting tool, and internal systems connected so they share data instead of guarding it.",
  },
  {
    title: "Internal tools",
    text: "A small purpose-built app for a process that doesn't fit any off-the-shelf software you've tried.",
  },
];

const manualSteps = [
  "A request arrives by email or chat.",
  "Someone copies it into a spreadsheet.",
  "The approver is chased by message.",
  "Status lives in one person's inbox.",
  "The report is rebuilt at month end.",
];

const automatedSteps = [
  "The request is submitted once, in a form or through an integration.",
  "A rule routes it to the right approver.",
  "Everyone involved can see the status.",
  "Data syncs to the systems that need it.",
  "Dashboards update on their own.",
];

const steps = [
  {
    title: "Trace the process as it runs today",
    text: "We follow one task from start to finish, including every handoff and workaround, before proposing anything.",
  },
  {
    title: "Pick the highest-friction step first",
    text: "We automate the part costing the most time first, rather than rebuilding everything at once.",
  },
  {
    title: "Build and run it alongside the old process",
    text: "The new system runs in parallel until your team trusts it, so nothing falls through during the switch.",
  },
  {
    title: "Retire the manual version",
    text: "Once the automated process is holding up on its own, the spreadsheets and manual steps come off the workflow.",
  },
];

const stack = [
  { name: "ASP.NET Core and C#", note: "Fast, secure back ends" },
  { name: "SQL Server", note: "Reliable data storage" },
  { name: "REST and GraphQL APIs", note: "Clean system connections" },
  { name: "React front ends", note: "Simple, responsive screens" },
  { name: "Azure and cloud hosting", note: "Scalable deployment" },
  { name: "Role-based access", note: "The right people see the right data" },
];

const sectors = [
  {
    title: "Finance and compliance",
    text: "Multi-step approvals with a complete record of who did what and when.",
    href: "/blog/custom-software-for-financial-services-compliance-and-growth",
    anchor: "custom software for financial services",
  },
  {
    title: "Education",
    text: "Admissions, fee follow-ups and attendance alerts handled without manual chasing.",
    href: "/blog/education-software-development-pakistan",
    anchor: "education software development",
  },
  {
    title: "eCommerce and retail",
    text: "Orders, stock and fulfilment updates kept in step across your sales channels.",
    href: "/blog/scalable-ecommerce-development-for-smbs",
    anchor: "scalable eCommerce development",
  },
  {
    title: "Internal operations",
    text: "HR requests, purchase approvals and reporting for teams that outgrew spreadsheets.",
    href: "/blog/when-internal-software-slows-teams-instead-of-helping",
    anchor: "internal software that slows teams down",
  },
];

const controls = [
  {
    title: "Role-based permissions",
    text: "Each person sees and changes only what their job requires, set up around how work really flows.",
  },
  {
    title: "A clear audit trail",
    text: "Every approval and change is recorded, so questions about what happened have a straight answer.",
  },
  {
    title: "Secure connections",
    text: "Integrations use authenticated, versioned APIs rather than shared logins or manual exports.",
  },
  {
    title: "Rules you can change",
    text: "Approval limits, routing and reminders are configurable, so a new policy doesn't mean a rebuild.",
  },
];

const faqs = [
  {
    q: "What is business automation software?",
    a: "It is software that runs repeatable business processes, such as approvals, data syncing, reporting and reminders, according to rules you define, instead of people carrying out each step by hand.",
  },
  {
    q: "How do I know which process to automate first?",
    a: "Start with the step that costs the most time or causes the most errors. In our first conversation we trace one task from start to finish and point out where the biggest friction sits.",
  },
  {
    q: "Will automation replace my team?",
    a: "No. It removes the repetitive handoffs so people can spend their time on decisions and exceptions. Anything that needs human judgment, such as a high-value approval, still goes to a person.",
  },
  {
    q: "Can it connect to the tools we already use?",
    a: (
      <>
        Usually, yes. We connect CRMs, accounting tools and internal systems through APIs. Our{" "}
        <a href="/api-development-services">API development services</a> cover secure, versioned integrations, and
        we will tell you early if a tool has no usable API.
      </>
    ),
  },
  {
    q: "Do we have to replace our existing systems?",
    a: (
      <>
        Not necessarily. Often we build around what you have and connect it. If an older system is holding you back,
        we can modernize it in stages, as described in our guide to{" "}
        <a href="/blog/legacy-system-modernization-without-downtime-or-data-loss">
          legacy system modernization without downtime
        </a>
        .
      </>
    ),
  },
  {
    q: "How long does an automation project take?",
    a: "It depends on the process and how many systems it touches. We usually begin with one process and one clear outcome, then agree a plan and timeline once we have traced how the work runs today.",
  },
];

const FACES = ["front", "back", "right", "left", "top", "bottom"];

function Cube({ tone }) {
  return (
    <div className={`ba-cube ba-cube--${tone}`}>
      {FACES.map((f) => (
        <i key={f} className={`f-${f}`} />
      ))}
    </div>
  );
}

export default function CustomBusinessAutomationSolutions() {
  return (
    <div className="ba-page">
      <Helmet>
        <title>Custom Business Automation Solutions | QllmSoft</title>
        <meta
          name="description"
          content="Custom business automation software from QllmSoft: replace manual approvals, spreadsheet handoffs, and repeated data entry with one connected system."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Custom Business Automation Solutions | QllmSoft" />
        <meta
          property="og:description"
          content="Replace manual approvals, spreadsheet handoffs and repeated data entry with one connected system."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* HERO */}
      <header className="ba-hero">
        <span className="ba-shape ba-shape--blob ba-shape--blob-a" aria-hidden="true" />
        <span className="ba-shape ba-shape--tri" aria-hidden="true" />
        <div className="ba-wrap ba-hero__grid">
          <div className="ba-hero__copy">
           
            <p className="ba-kicker">Business Automation</p>
            <h1 className="ba-hero__title">Replace the spreadsheet relay race with one system</h1>
            <p className="ba-hero__lede">
              If a task moves between three people, two spreadsheets, and an email thread before it's done, that's not a
              training problem, it's a tooling problem. We build software that runs the process itself, so approvals,
              updates, and reports happen without someone chasing them.
            </p>
            <div className="ba-actions">
              <a className="ba-btn ba-btn--primary" href="/contact">Describe your process</a>
              <a className="ba-btn ba-btn--ghost" href="/ai-powered-software-solutions">See our AI-powered work</a>
            </div>
            <ul className="ba-points">
              <li>Scoped around your real process</li>
              <li>Runs beside the old way until you trust it</li>
              <li>Secure, role-based access</li>
            </ul>
          </div>

          <div className="ba-scene" aria-hidden="true">
          
            <div className="ba-glass ba-glass--a">
              <p className="ba-glass__label">Purchase request</p>
              <div className="ba-track">
                <span className="is-done" />
                <span className="is-done" />
                <span className="is-now" />
                <span />
              </div>
              <p className="ba-glass__status"><b>Step 3 of 4</b> · Awaiting finance</p>
            </div>
            <div className="ba-glass ba-glass--b">
              <p className="ba-glass__label">Synced automatically</p>
              <ul className="ba-dots">
                <li>CRM</li>
                <li>Accounting</li>
                <li>Reports</li>
              </ul>
            </div>
            <span className="ba-sq ba-sq--y" />
            <span className="ba-sq ba-sq--n" />
            <span className="ba-sq ba-sq--g" />
          </div>
        </div>
      </header>

      {/* SIGNS */}
      <section className="ba-section ba-section--signs">
        <div className="ba-wrap ba-split">
          <div>
            <p className="ba-kicker">Is it time?</p>
            <h2 className="ba-h2">Signs your process is ready for automation</h2>
            <p className="ba-intro">
              You don't need a huge operation to benefit. If two or three of these sound familiar, a focused automation
              project will likely pay for itself in saved time and fewer mistakes.
            </p>
          </div>
          <ul className="ba-signs">
            {signs.map((s) => (
              <li key={s}>
                <span className="ba-tick" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="ba-section">
        <span className="ba-shape ba-shape--ring" aria-hidden="true" />
        <div className="ba-wrap">
          <p className="ba-kicker ba-center">What we automate</p>
          <h2 className="ba-h2 ba-center">Where automation usually pays off first</h2>
          <p className="ba-intro ba-center">These are the processes clients most often ask us to take off their hands.</p>
          <div className="ba-cards">
            {offerings.map((o, i) => (
              <article className="ba-card" key={o.title}>
                <span className={`ba-ico ba-ico--${(i % 6) + 1}`} aria-hidden="true" />
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </article>
            ))}
          </div>
          <p className="ba-note">
            Need a tool built around one specific process? Our{" "}
            <a href="/web-application-development-services">web application development services</a> cover custom
            internal apps and dashboards.
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="ba-section ba-section--mist">
        <div className="ba-wrap">
          <p className="ba-kicker ba-center">The difference</p>
          <h2 className="ba-h2 ba-center">The same task, before and after</h2>
          <div className="ba-compare">
            <div className="ba-panel ba-panel--before">
              <h3>Manual process</h3>
              <ol>
                {manualSteps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
            <div className="ba-arrow" aria-hidden="true" />
            <div className="ba-panel ba-panel--after">
              <h3>Automated process</h3>
              <ol>
                {automatedSteps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="ba-section">
        <div className="ba-wrap">
          <p className="ba-kicker ba-center">Our approach</p>
          <h2 className="ba-h2 ba-center">How we scope this</h2>
          <div className="ba-steps">
            {steps.map((s, i) => (
              <div className="ba-step" key={s.title}>
                <span className="ba-step__num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="ba-section ba-section--tint">
        <span className="ba-shape ba-shape--blob ba-shape--blob-b" aria-hidden="true" />
        <div className="ba-wrap">
          <p className="ba-kicker ba-center">Technology</p>
          <h2 className="ba-h2 ba-center">What we build with</h2>
          <p className="ba-intro ba-center">
            Proven, secure tools, chosen to fit your existing systems rather than force a replacement.
          </p>
          <ul className="ba-stack">
            {stack.map((t) => (
              <li key={t.name}>
                <strong>{t.name}</strong>
                <span>{t.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTORS */}
      <section className="ba-section">
        <div className="ba-wrap">
          <p className="ba-kicker ba-center">Where it fits</p>
          <h2 className="ba-h2 ba-center">Automation across different kinds of teams</h2>
          <div className="ba-cards ba-cards--four">
            {sectors.map((s) => (
              <article className="ba-card ba-card--sector" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a className="ba-more" href={s.href}>Read about {s.anchor}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTROL */}
      <section className="ba-section ba-section--mist">
        <div className="ba-wrap ba-split">
          <div>
            <p className="ba-kicker">Control and trust</p>
            <h2 className="ba-h2">Automation that stays under your control</h2>
            <p className="ba-intro">
              Good automation makes work faster without making it harder to supervise. When access is too rigid, teams
              invent workarounds, which we explain in{" "}
              <a href="/blog/role-based-access-problems-why-teams-break-systems">
                role-based access problems and why teams break systems
              </a>
              . We design permissions and records so that doesn't happen.
            </p>
          </div>
          <div className="ba-controls">
            {controls.map((c) => (
              <div className="ba-control" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


 <section className="section testimonial-section" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="sr-only">Client reviews</h2>
          <TestimonialSection />
        </section>




      {/* FAQ */}
      <section className="ba-section">
        <div className="ba-wrap ba-faq">
          <p className="ba-kicker ba-center">Questions</p>
          <h2 className="ba-h2 ba-center">Frequently asked questions</h2>
          <div className="ba-faq__list">
            {faqs.map((f) => (
              <details className="ba-faq__item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="ba-cta">
        <span className="ba-shape ba-shape--ring ba-shape--ring-cta" aria-hidden="true" />
        <div className="ba-wrap ba-cta__inner">
          <div>
            <h2>Know exactly which process is wasting your time?</h2>
            <p>Tell us how it works today and we'll tell you what's realistic to automate first.</p>
            <p className="ba-cta__contact">
              Prefer to write? <a href="mailto:qllmsoft@gmail.com">qllmsoft@gmail.com</a> or WhatsApp{" "}
              <a href="tel:+923348229288">+92 334 8229288</a>
            </p>
          </div>
          <a className="ba-btn ba-btn--yellow" href="/contact">Talk to us</a>
        </div>
      </div>
    </div>
  );
}