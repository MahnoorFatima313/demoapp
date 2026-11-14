/**
 * EcommerceDevelopmentServices.jsx
 * ─────────────────────────────────────────────────────────────
 * /ecommerce-development-services
 *
 * CORE SECTION PILLAR — Semantic SEO Master Guide, Section 7.
 * Anchors existing blog posts:
 * - scalable-ecommerce-development-for-smbs
 * - shopify-isnt-scaling-what-companies-do-next
 * - custom-vs-saas-ecommerce-for-growing-smbs
 *
 * RE-OPTIMIZATION NOTES:
 *  - Removed the fabricated Service-level AggregateRating (5.0★ / 50
 *    reviews, hardcoded with no source). Unverifiable review counts are
 *    a direct Google structured-data policy violation and risk a manual
 *    action — remove until you have a real, attributable review feed.
 *  - Linked Service → Organization via @id instead of duplicating the
 *    Organization block, and added a Service @id so WebPage can
 *    reference it directly.
 *  - IMPORTANT — FLAGGED, NOT CHANGED: both hero and process images are
 *    hotlinked directly from images.unsplash.com. That's worth fixing
 *    before this page competes for a #1 ranking: (1) generic stock
 *    photos of an unrelated dashboard don't support the "real product,
 *    real expertise" signal Google's quality raters look for on
 *    commercial pages; (2) hotlinking someone else's CDN is a page-speed
 *    and reliability risk outside your control; (3) Unsplash's API terms
 *    require attribution you're not currently providing. Recommend
 *    swapping these for actual project screenshots (as the other
 *    industry pages do) and self-hosting them.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './EcommerceDevelopmentServices.css';
import { schemaOrganization } from "../data/schema";

const PAGE_URL = 'https://qllmsoft.com/ecommerce-development-services';
const OG_IMAGE = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';
const PAGE_TITLE = "Custom Ecommerce Development & Integrations | QllmSoft";
const PAGE_DESCRIPTION =
  "Build a custom storefront around your checkout, pricing and inventory workflows. Discuss ecommerce integrations, migration and ongoing costs with QllmSoft.";

const DATE_PUBLISHED = '2026-07-19';
const DATE_MODIFIED  = "2026-11-14";
const orgSchema = schemaOrganization;


const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': PAGE_URL + '#service',
  serviceType: 'E-Commerce Development',
  name: 'Custom E-Commerce Development Services',
  description:
    "QllmSoft develops custom ecommerce storefronts and integrations around catalog, checkout, pricing, inventory, and order-management requirements.",
  provider: { '@id': 'https://qllmsoft.com/#organization' },
  areaServed: ['Pakistan', 'United States', 'United Kingdom', 'UAE', 'Saudi Arabia'],
  url: PAGE_URL,
  // NOTE: no aggregateRating here — see file header. Don't reintroduce a
  // hardcoded rating/review count without a live, attributable source.
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'E-Commerce Engineering Offerings',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Headless & Custom E-Commerce Architecture' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify & WooCommerce Migration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Gateway Payment Integration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ERP, WMS, and Inventory Middleware Sync' } },
    ],
  },
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://qllmsoft.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://qllmsoft.com/services' },
    { '@type': 'ListItem', position: 3, name: 'E-Commerce Development Services', item: PAGE_URL },
  ],
};

const schemaWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': PAGE_URL + '#webpage',
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://qllmsoft.com/#website' },
  about: { '@id': PAGE_URL + '#service' },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
};

const FAQ_DATA = [
  {
    q: "When is a custom ecommerce platform worth considering?",
    a: "Consider custom development when required pricing rules, order workflows, or system integrations cannot be maintained reliably in the current setup. First assess configuration, existing extensions, and integration changes. A custom build brings more control, but also responsibility for hosting, security updates, and maintenance.",
  },
  {
    q: "How should inventory and order synchronization work?",
    a: "Define which system owns product, stock, customer, and order records. Agree on identifiers, update frequency, stock reservation rules, and how failed or repeated updates are handled. An API or middleware layer can connect the systems, but provider limits and operational processes determine the synchronization design.",
  },
  {
    q: "How do you plan an ecommerce platform migration?",
    a: "Inventory products, variants, customers, orders, integrations, and current URLs. Check what can be exported and whether credentials or payment tokens can be transferred. Rehearse data migration, reconcile records, review any required URL mapping, and agree on cutover and rollback before launch. Search performance can fluctuate.",
  },
  {
    q: "How are checkout security and payment responsibilities handled?",
    a: "Plan account permissions, server-side validation, secure connections, and payment-provider integration together. Hosted or tokenized payment flows can limit the sensitive data your application handles. Using a gateway does not by itself establish compliance; confirm applicable responsibilities with your payment provider and security advisers.",
  },
  {
    q: "What affects ecommerce development cost and delivery time?",
    a: "Catalog complexity, pricing rules, payment and shipping integrations, data cleanup, and order-management workflows shape the estimate. Compare the full operating cost: implementation, hosting, monitoring, maintenance, provider charges, and future changes. Custom software is not automatically cheaper than a hosted platform.",
  },
  {
    q: "What needs maintaining after the store launches?",
    a: "Plan for dependency updates, payment and shipping API changes, failed-sync alerts, backups, and recovery testing. Confirm who manages hosting, security updates, incident response, and routine catalog changes. Agree on support scope and response expectations separately from new feature development.",
  },
];

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const COMPARISON_ROWS = [
  {
    "aspect": "Checkout & Business Rules",
    "saas": "Available features and extension points depend on the platform and plan.",
    "custom": "Business rules can be implemented directly, with ongoing responsibility for testing and updates."
  },
  {
    "aspect": "ERP & System Integration",
    "saas": "Existing connectors may fit standard workflows; assess API limits and exception handling.",
    "custom": "Custom connectors can match specific workflows, but still depend on external APIs and data quality."
  },
  {
    "aspect": "Total Operating Cost",
    "saas": "Include subscription, extensions, transaction charges where applicable, and implementation work.",
    "custom": "Include development, hosting, monitoring, maintenance, third-party services, and payment fees."
  },
  {
    "aspect": "Performance & Reliability",
    "saas": "Managed infrastructure can reduce operations work; themes, extensions, and integrations still affect performance.",
    "custom": "Performance depends on implementation, infrastructure, testing, and the team operating the system."
  },
  {
    "aspect": "Data & Code Access",
    "saas": "Review export options, platform terms, and access to your business records.",
    "custom": "Confirm source-code rights, repository access, data exports, and third-party licenses in the agreement."
  }
];

const CAPABILITIES = [
  { icon: '⚡', title: 'Headless & Custom Storefronts', desc: "A separate storefront interface connected to a commerce backend. Review catalog rendering, caching, content editing, and checkout requirements before choosing a headless approach." },
  { icon: '💳', title: 'Multi-Gateway Payment Integration', desc: "Integrate payment providers available to your business and markets. Plan hosted or tokenized payment flows, refunds, failed payments, and order-status updates." },
  { icon: '🔄', title: 'ERP & WMS Middleware', desc: 'Automated sync linking your storefront to warehouse inventory, accounting, and fulfillment.' },
  { icon: '🛡️', title: 'OWASP-Aligned Security', desc: 'Defense-in-depth practices, database encryption, and access controls protecting transaction data.' },
  { icon: '📈', title: 'Elastic Scaling for Peak Traffic', desc: "Plan and load-test for expected peak traffic, checkout concurrency, database load, and external provider limits." },
  { icon: '🔁', title: 'Platform Migration', desc: 'Careful data mapping of customer records, orders, and SEO signals when moving off Shopify or WooCommerce.' },
];

const EcommerceDevelopmentServices = () => {
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
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="ecom-page" role="main">

        {/* HERO SECTION */}
        <header className="ecom-hero">
          <div className="container">
            <div className="ecom-hero__grid">
              <div className="ecom-hero__content">
                <div className="ecom-hero__badge">
                  <span className="ecom-hero__badge-dot" aria-hidden="true" />
                  Custom E-Commerce Engineering for Growing & Enterprise Businesses
                </div>

                <h1 className="ecom-hero__title">
                  E-Commerce Development <span className="ecom-accent">Services</span>
                </h1>

                <p className="ecom-hero__direct-answer">
                  QllmSoft develops custom storefronts and commerce integrations for businesses with specific pricing, checkout, inventory, or order-management requirements. Start with the workflows your current setup cannot support, then assess whether an integration or a wider rebuild is justified.
                </p>

                <div className="ecom-hero__buttons">
                  <Link to="/contact" className="btn btn-primary" aria-label="Talk to QllmSoft about a custom e-commerce build">
                    Discuss Your Store Requirements
                  </Link>
                  <a
                    href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20scaling%20out%20of%20our%20current%20e-commerce%20platform."
                    target="_blank" rel="noopener noreferrer"
                    className="btn ecom-btn-whatsapp"
                    aria-label="WhatsApp QllmSoft about a custom e-commerce build"
                  >
                    <span aria-hidden="true">💬</span> WhatsApp Engineering Team
                  </a>
                </div>
              </div>

              <div className="ecom-hero-visual-card">
                <div className="ecom-hero-browser-bar">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="browser-title">Ecommerce Development Services by QllmSoft</span>
                </div>
                <div className="ecom-hero-image-wrapper">
                  {/* TODO: replace with a real QllmSoft project screenshot —
                      see file header note on stock imagery. */}
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                    alt="E-commerce admin dashboard showing order and inventory data"
                    className="ecom-hero__image"
                    width="600"
                    height="450"
                    loading="eager"
                  />
                  <div className="ecom-hero-floating-badge">
                    <span className="icon">⚡</span>
                    <div>
                      <strong>Built for Speed</strong>
                      <small>Custom Headless Architecture</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* WHEN TO GO CUSTOM / COMPARISON */}
        <section className="section ecom-when" aria-labelledby="when-heading">
          <div className="container">
            <p className="section-eyebrow">When to Consider Custom</p>
            <div className="section-title">
              <h2 id="when-heading">Does Your Store Need Custom Development?</h2>
              <p>
                Hosted platforms and existing commerce software can support many growing stores. Consider a custom build when a documented business requirement cannot be met reliably through configuration or a focused integration.
              </p>
            </div>
            <div className="ecom-table-wrap">
              <table className="ecom-table" aria-label="Comparison of SaaS e-commerce platforms vs. custom-built e-commerce solutions">
                <caption className="ecom-table__caption">Existing Platform vs. Custom E-Commerce — What Actually Changes</caption>
                <thead>
                  <tr>
                    <th scope="col">Factor</th>
                    <th scope="col">Existing Commerce Platform</th>
                    <th scope="col" className="ecom-col--highlight">QllmSoft Custom Build</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={i}>
                      <td className="ecom-col--factor">{row.aspect}</td>
                      <td>{row.saas}</td>
                      <td className="ecom-col--highlight">{row.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="ecom-when__note">
              Related reading: {' '}
              <Link to="/blog/shopify-isnt-scaling-what-companies-do-next">Shopify isn't scaling — what companies do next</Link>,{' '}
              <Link to="/blog/custom-vs-saas-ecommerce-for-growing-smbs">custom vs. SaaS e-commerce for growing SMBs</Link>, and {' '}
              <Link to="/blog/scalable-ecommerce-development-for-smbs">scalable e-commerce development for SMBs</Link>.
            </p>
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section className="section ecom-capabilities" aria-labelledby="capabilities-heading">
          <div className="container">
            <p className="section-eyebrow">Core Engineering Capabilities</p>
            <div className="section-title">
              <h2 id="capabilities-heading">Built Around Your Actual Workflows</h2>
              <p>We build every layer of your commerce infrastructure around your specific business model and inventory rules — not a generic template.</p>
            </div>
            <div className="ecom-capabilities__grid">
              {CAPABILITIES.map((c, i) => (
                <article key={i} className="ecom-capability-card">
                  <span className="ecom-capability-card__icon" aria-hidden="true">{c.icon}</span>
                  <h3 className="ecom-capability-card__title">{c.title}</h3>
                  <p className="ecom-capability-card__desc">{c.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="section ecom-process" aria-labelledby="process-heading">
          <div className="container">
            <div className="section-header-centered">
              <p className="section-eyebrow">How We Work</p>
              <div className="section-title">
                <h2 id="process-heading">Our Development Process</h2>
                <p>A phased approach built to reduce migration risk and keep the platform stable at each step.</p>
              </div>
            </div>

            <div className="ecom-process__grid">
              <div className="ecom-process__steps-wrapper">
                <ol className="ecom-process__steps" aria-label="QllmSoft e-commerce development process">
                  {[
                    { n: '01', title: 'Technical Discovery & Scoping', desc: 'We review your current data, ERP endpoints, SKU structure, and workflow pain points to define clear architecture requirements.' },
                    { n: '02', title: 'System Architecture & UX Design', desc: 'Database models, storefront components, and user flows designed around conversion, not just aesthetics.' },
                    { n: '03', title: 'Iterative Sprint Engineering', desc: 'Two-week sprints building core commerce features, payment integration, and inventory sync, with test coverage on each.' },
                    { n: '04', title: "Migration & URL Review", desc: "Rehearse catalog and order-data transfer, reconcile records, preserve useful URLs where possible, and review any required redirect mapping before release." },
                    { n: '05', title: 'Deployment, Monitoring & Support', desc: 'Staged rollout with uptime monitoring, error tracking, and an ongoing maintenance option.' },
                  ].map((step, i) => (
                    <li key={i} className="ecom-process__step">
                      <span className="ecom-process__step-num" aria-label={`Step ${step.n}`}>{step.n}</span>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="ecom-process__sidebar">
                <div className="ecom-process__visual-card">
                  <div className="ecom-process-image-container">
                    {/* TODO: replace with a real migration/architecture
                        diagram from an actual project — see file header. */}
                    <img
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80"
                      alt="Data migration and deployment workflow illustration"
                      className="ecom-process__image"
                      width="500"
                      height="600"
                      loading="lazy"
                    />
                  </div>
                  <div className="ecom-process__image-caption">
                    <span>🔒 Planned Migration & Rollback</span>
                    <p>Rehearse data transfer, reconcile records, and agree on a recovery plan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES — Internal Linking Matrix */}
        <section className="section ecom-related" aria-labelledby="related-heading">
          <div className="container">
            <h2 id="related-heading" className="ecom-related__heading">Complementary Services</h2>
            <nav className="ecom-related__links" aria-label="Related QllmSoft services">
              <Link to="/web-application-development-services">Web Application Development</Link>
              <Link to="/custom-software-development-services">Custom Software Development</Link>
              <Link to="/api-development-services">API Development Services</Link>
            </nav>
            <p className="ecom-related__note">
              Use our <Link to="/software-project-requirements-checklist">software project requirements checklist</Link> to organize catalog rules and integration needs, or return to the <Link to="/">homepage</Link>.
            </p>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section ecom-faq" aria-labelledby="faq-heading"  >
          <div className="container">
            <p className="section-eyebrow">Technical Questions</p>
            <div className="section-title">
              <h2 id="faq-heading">Frequently Asked Questions</h2>
            </div>
            <div className="ecom-faq__list">
              {FAQ_DATA.map((faq, i) => (
                <div key={i} className="ecom-faq__item"   >
                  <h3  className="ecom-faq__q">{faq.q}</h3>
                  <div   >
                    <p  className="ecom-faq__a">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="section ecom-cta" aria-labelledby="cta-heading">
          <div className="container ecom-cta__inner">
            <h2 id="cta-heading">Discuss Your Ecommerce Requirements</h2>
            <p>Talk to our engineering team about your scaling challenges and what a custom build would actually look like.</p>
            <div className="ecom-cta__buttons">
              <Link to="/contact" className="btn btn-primary" aria-label="Contact QllmSoft about a custom e-commerce build">
                Discuss Your Ecommerce Project
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default EcommerceDevelopmentServices;
