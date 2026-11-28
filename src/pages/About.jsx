/**
 * About.jsx, QllmSoft
 * ─────────────────────────────────────────────────────────────────
 * SEO STRATEGY (2026):
 *
 * Positioning: Global software development partner.
 * Pakistan is referenced as the company's origin and delivery base
 * (for E-E-A-T, trust, and legitimate long-tail search demand), but
 * the page's primary identity, headings, and CTAs are written for a
 * worldwide audience — not a "local agency" framing.
 *
 * Primary Keywords:
 *   software development company
 *   custom software development company
 *   enterprise software development partner
 *   software development partner for startups
 *
 * Secondary / Long-tail Keywords:
 *   software development company Pakistan
 *   outsource software development to Pakistan
 *   about QllmSoft
 *   QllmSoft reviews
 *
 * E-E-A-T Signals:
 *   ✓ Founder profile with LinkedIn
 *   ✓ Founded date and history
 *   ✓ Verified review platforms (Upwork, Freelancer)
 *   ✓ Specific project counts and client countries
 *   ✓ Industry sectors served
 *   ✓ Team capabilities listed concretely
 *
 * SEO:
 *   ✓ react-helmet-async → full meta tags, OG, Twitter
 *   ✓ JSON-LD → Organization + AboutPage + BreadcrumbList
 *   ✓ Single H1 → keyword-rich, identity-affirming, globally framed
 *   ✓ H1→H2→H3 hierarchy → strict
 *   ✓ Internal links → all key service pages
 *   ✓ External links → Upwork, Freelancer, LinkedIn
 *   ✓ Semantic HTML5 → main, section, article, aria-labels
 *   ✓ DESIGN UNCHANGED → all existing CSS classes preserved
 */

import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ceoImg from "../assets/ceo-qllmsoft.webp";
import LeadMagnetBanner from "../components/LeadMagnetBanner";
import {
  Eye,
  Target,
  Users,
  Zap,
  Shield,
  Check,
  Headphones,
  Linkedin,
} from "lucide-react";

import { aboutContent } from "../data/mock";
import "./About.css";
import { schemaOrganization } from "../data/schema";

/* ─── JSON-LD: Organization ────────────────────────────────────── */
const orgSchema = schemaOrganization;

/* ─── JSON-LD: AboutPage ────────────────────────────────────────── */
const schemaAboutPage = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://qllmsoft.com/about#webpage",
  url: "https://qllmsoft.com/about",
  name: "About QllmSoft, a Software Development Company Serving Clients Worldwide",
  description:
    "Learn about QllmSoft, a software development company that has delivered 50+ projects for clients across North America, Europe, and the Middle East since 2015. 100% Upwork Job Success Score, 100% on-time delivery.",
  isPartOf: { "@id": "https://qllmsoft.com/#website" },
  about: { "@id": "https://qllmsoft.com/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://qllmsoft.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://qllmsoft.com/about",
      },
    ],
  },
};

/* ─── Feature Card (unchanged design) ──────────────────────────── */
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card reveal">
    <div className="feature-icon">
      <Icon size={24} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);



const industries = [
  {
    icon: "bi-heart-pulse",
    title: "Healthcare",
    to: "/healthcare-software-development-pakistan",
    desc: "Hospital management systems, telemedicine platforms, clinic software, EMR/EHR tools, and patient portals.",
  },
  {
    icon: "bi-bank",
    title: "Finance & FinTech",
    desc: "Financial management platforms, accounting automation, real-time reporting dashboards, and secure payment integrations.",
  },
  {
    icon: "bi-mortarboard",
    title: "Education",
    to: "/education-software-development-pakistan",
    desc: "School management systems, LMS platforms, eLearning apps, and student information systems.",
  },
  {
    icon: "bi-truck",
    title: "Logistics & Warehouse",
    desc: "Inventory management systems, warehouse automation, delivery tracking, and supply chain visibility tools.",
  },
  {
    icon: "bi-cart-check",
    title: "eCommerce & Retail",
    desc: "Custom eCommerce platforms, inventory control, order management, and multi-vendor marketplace builds.",
  },
  {
    icon: "bi-people",
    title: "HR & Enterprise Operations",
    desc: "Payroll systems, employee portals, attendance tracking, leave management, and performance review tools.",
  },
];



/* ═══════════════════════════════════════════════════════════
   ABOUT PAGE
═══════════════════════════════════════════════════════════ */
const About = () => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 },
    );

    reveals.forEach((el) => observer.observe(el));

    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  const serviceLinks = [
    { to: "/services", label: "All Services" },
    { to: "/custom-software-development-services", label: "Custom Software" },
    { to: "/web-application-development-services", label: "Web Applications" },
    { to: "/mobile-app-development", label: "Mobile Apps" },
    { to: "/ai-powered-software-solutions", label: "AI Solutions" },
    { to: "/outsource-software-development-to-pakistan", label: "Outsourcing" },
    { to: "/legacy-system-modernization-services", label: "Legacy Modernization" },
    { to: "/hire-dotnet-developers-pakistan", label: "Hire Developers" },
    { to: "/healthcare-software-development-pakistan", label: "Healthcare Software" },
    { to: "/education-software-development-pakistan", label: "Education Software" },
  ];

  return (
    <>
      <Helmet>
        {/* Title, identity + brand, globally framed */}
        <title>
          About QllmSoft | Software Development Company Serving Clients Worldwide
        </title>

        {/* Description, E-E-A-T + commercial intent, global framing */}
        <meta
          name="description"
          content="QllmSoft has been building custom software for businesses worldwide since 2015. 50+ projects, clients across North America, Europe, and the Middle East, 100% Upwork Job Success Score."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="software development company, custom software development company, enterprise software development partner, software development agency, outsource software development, about QllmSoft, software development company Pakistan"
        />

        <meta name="author" content="QllmSoft" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href="https://qllmsoft.com/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qllmsoft.com/about" />
        <meta property="og:site_name" content="QllmSoft" />
        <meta
          property="og:title"
          content="About QllmSoft | Software Development Company Serving Clients Worldwide"
        />
        <meta
          property="og:description"
          content="10+ years building software for businesses worldwide. 50+ projects delivered, 100% Upwork Job Success Score. Custom web apps, mobile apps, and AI-powered solutions."
        />
        <meta
          property="og:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="QllmSoft Software Development Company, About Us"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About QllmSoft | Software Development Company"
        />
        <meta
          name="twitter:description"
          content="Custom software development for businesses worldwide since 2015. 50+ projects delivered for clients across North America, Europe, and the Middle East."
        />
        <meta
          name="twitter:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />

        {/* Geo (legitimate business address, kept for trust signals) */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lalamusa, Punjab, Pakistan" />
        <meta name="geo.position" content="32.7003;73.9451" />
        <meta name="ICBM" content="32.7003, 73.9451" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">
          {JSON.stringify(schemaAboutPage)}
        </script>
      </Helmet>

      <main className="about-page">
        {/* ── HERO ── */}
        <section className="about-hero reveal" aria-labelledby="about-hero-h1">
          <div className="container">
            {/* ✅ SINGLE H1, identity keyword, globally framed */}
            <h1 id="about-hero-h1" style={{ color: "white" }}>
              A Software Development Company Building Real Products for
              Businesses Worldwide Since 2015
            </h1>
            <p style={{ color: "white" }}>
              10+ years. 50+ projects shipped for clients across North
              America, Europe, and the Middle East.
            </p>
            <a href="#company" className="btn btn-primary">
              Discover More
            </a>
          </div>
        </section>
<section
  id="company"
  className="section company-story reveal"
  aria-labelledby="company-heading"
>
  <div className="container" >
    <div className="section-title" >
      <h2 id="company-heading"  >
        About QllmSoft, a Software Development Partner for Growing Businesses
      </h2>
    </div>

    <div className="story-card">
      <p>
      In 2015, QllmSoft started as a small team of engineers tired of seeing great ideas ruined by bad software. Ten years later, we are a full service software company that has delivered over 50 production systems across four continents for both startups building new products and established companies replacing outdated software
      </p>

      <p>
       We work like an in-house engineering team, not just a code for hire vendor. We look at the business reason behind every feature before pricing it, and we will tell you honestly if a requested change creates unnecessary risk. With architects and specialists across web, mobile, cloud, and AI-plus deep experience in healthcare, logistics, finance, and retail we hit the ground running from day one.
      </p>

      <p>
    We begin every engagement with a thorough discovery phase. We map your workflows, document the scope, and provide a fixed price proposal for sign off before coding starts. Taking time upfront prevents costly surprises later, which is why clients across three continents stay with us for the long haul.
      </p>

      <h4>What We Build</h4>

      <ul className="story-list">
        <li>
          <strong>Enterprise Web Applications:</strong> Internal portals,
          customer-facing platforms, SaaS products, and business management
          tools built to hold up under real daily use, not just demo traffic.
        </li>

        <li>
          <strong>Mobile Applications:</strong> Cross-platform Android and iOS
          apps with offline support, push notifications, and clean UX, taken
          from a first prototype through to a full enterprise rollout.
        </li>

        <li>
          <strong>Business Automation Systems:</strong> Software that replaces
          manual, error-prone processes, covering things like payroll,
          inventory, document approvals, and cross-department reporting.
        </li>

        <li>
          <strong>AI-Powered Software Solutions:</strong> Practical machine
          learning, natural language processing, and computer vision features
          built into existing business software, aimed at measurable results
          rather than one-off demos.
        </li>

        <li>
          <strong>Legacy System Modernisation:</strong> Phased migrations from
          outdated platforms to modern, maintainable systems that preserve
          existing business logic and keep teams working while the transition
          happens.
        </li>
      </ul>

      <p>
       We have delivered projects across finance, healthcare, document management, eCommerce, HR and payroll, and warehouse operations including  our {" "}
        <Link to="/finance-management-system" className="story-link">
          finance management system
        </Link>{" "}
      platform centered on budgets, approvals, and real-time reporting.
      </p>

      <p>
      Our results are publicly verified, not just promised in a presentation. You
        can check our record on{" "}
        <a
          href="https://www.upwork.com/freelancers/~0170e20f8803389a86"
          target="_blank"
          rel="noopener noreferrer"
          className="story-link"
          aria-label="Verify QllmSoft 100% Job Success Score on Upwork"
        >
          Upwork (100% Job Success Score)
        </a>{" "}
        and{" "}
        <a
          href="https://www.freelancer.com/u/mrprogrmmr"
          target="_blank"
          rel="noopener noreferrer"
          className="story-link"
          aria-label="View QllmSoft 5-star reviews on Freelancer"
        >
          Freelancer (5-Star Rating)
        </a>
        , where clients have left feedback after the project shipped, not
        before.
      </p>
    </div>
  </div>
</section>

        {/* ── STATS BAND ── */}
        <section
          className="section about-stats"
          aria-label="QllmSoft company statistics"
        >
          <div className="container">
            <div className="about-stats-grid">
              <div className="about-stat reveal delay-1">
                <span className="about-stat-value">10+</span>
                <span className="about-stat-label">Years in Operation</span>
                <span className="about-stat-note">Founded 2015</span>
              </div>
              <div className="about-stat reveal delay-2">
                <span className="about-stat-value">50+</span>
                <span className="about-stat-label">Projects Delivered</span>
                <span className="about-stat-note">Across 6 Industries</span>
              </div>
              <div className="about-stat reveal delay-3">
                <span className="about-stat-value">4</span>
                <span className="about-stat-label">Continents Served</span>
                <span className="about-stat-note">Clients Worldwide</span>
              </div>
              <div className="about-stat reveal delay-4">
                <span className="about-stat-value">100%</span>
                <span className="about-stat-label">On-Time Delivery</span>
                <span className="about-stat-note">Every Project, Every Time</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section
          className="section services-features reveal"
          aria-labelledby="capabilities-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="capabilities-heading">
                Why Businesses Choose QllmSoft as Their Software Development
                Partner
              </h2>
            </div>

            <div className="features-grid">
              <FeatureCard
                icon={Users}
                title="10+ Years of Proven Delivery"
                description=" We have shipped more than 50 software systems across four continents since 2015 and delivered every single one on schedule."
              />
              <FeatureCard
                icon={Shield}
                title="Security Built In From the Start"
                description="Rather than treating security as an afterthought, we build it into the core architecture from day one using OWASP Top 10 best practices across all web, mobile, and API builds."
              />
              <FeatureCard
                icon={Zap}
                title="One Team, Full-Stack Capability"
                description="With web, mobile, backend, cloud, and AI experts on the same team, one unified group owns your project from start to finish no juggling multiple contractors."
              />
              <FeatureCard
                icon={Check}
                title="Fixed-Price, On-Time Delivery"
                description="We lock in the project scope before coding begins, protecting you from surprise hourly bills and unexpected invoices later on."
              />
              <FeatureCard
                icon={Headphones}
                title="30-Day Post-Launch Support Included"
                description="We do not disappear after launch. Every project includes 30 days of active monitoring and priority support, with flexible options for ongoing maintenance."
              />
            </div>
          </div>
        </section>

{/* Industries Section */}
<section className="ind-section" aria-labelledby="industries-heading">
  <div className="ind-container">
    <div className="ind-header">
      <span className="ind-eyebrow">What We Cover</span>
      <h2 id="industries-heading">Industries We Serve</h2>
      <p className="ind-subtext">
        A decade of project work across these sectors means we bring some
        domain context to a project, not just engineers who can write code
        against a spec.
      </p>
    </div>

    <ul className="ind-grid">
      {industries.map((item, i) => (
        <motion.li
          key={item.title}
          className="ind-card"
          initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: i * 0.08, ease: [0.2, 0.75, 0.25, 1] }}
          whileHover={reduceMotion ? undefined : { y: -7, scale: 1.015 }}
        >
          <span className="ind-number" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="ind-icon" aria-hidden="true">
            <i className={`bi ${item.icon}`}></i>
          </div>
          <h3 className="ind-title">
            {item.to ? <Link to={item.to}>{item.title}</Link> : item.title}
          </h3>
          <p className="ind-desc">{item.desc}</p>
          {item.to && (
            <span className="ind-arrow" aria-hidden="true">
              <i className="bi bi-arrow-right"></i>
            </span>
          )}
        </motion.li>
      ))}
    </ul>
  </div>
</section>
{/* End of Industries Section */}



        {/* ── VISION / MISSION ── */}
        <section
          className="section vision-mission reveal"
          aria-labelledby="vm-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="vm-heading">Our Vision & Mission</h2>
            </div>

            <div className="vm-stack">
              <motion.div
                className="vm-row"
                initial={reduceMotion ? false : { opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, ease: [0.2, 0.75, 0.25, 1] }}
              >
                <article className="vm-terminal-window">
                  <div className="vm-terminal-bar">
                    <span className="vm-terminal-controls" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="vm-terminal-label">qllmsoft / vision</span>
                    <span className="vm-terminal-state">CONNECTED</span>
                  </div>
                  <div className="vm-content">
                    <p className="vm-terminal-command" aria-hidden="true">
                      <span>qllmsoft@about:~$</span> cat vision.md
                    </p>
                    <div className="vm-icon" aria-hidden="true">
                      <Eye size={24} />
                    </div>
                    <h3>Our Vision</h3>
                    <p>{aboutContent.vision}</p>
                    <span className="vm-terminal-meta" aria-hidden="true">
                      process complete <i /> exit code 0
                    </span>
                  </div>
                </article>
              </motion.div>

              <motion.div
                className="vm-row reverse"
                initial={reduceMotion ? false : { opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, ease: [0.2, 0.75, 0.25, 1] }}
              >
                <article className="vm-terminal-window">
                  <div className="vm-terminal-bar">
                    <span className="vm-terminal-controls" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="vm-terminal-label">qllmsoft / mission</span>
                    <span className="vm-terminal-state">RUNNING</span>
                  </div>
                  <div className="vm-content">
                    <p className="vm-terminal-command" aria-hidden="true">
                      <span>qllmsoft@about:~$</span> cat mission.md
                    </p>
                    <div className="vm-icon" aria-hidden="true">
                      <Target size={24} />
                    </div>
                    <h3>Our Mission</h3>
                    <p>{aboutContent.mission}</p>
                    <span className="vm-terminal-meta" aria-hidden="true">
                      process complete <i /> exit code 0
                    </span>
                  </div>
                </article>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CEO SECTION ── */}
        <section
          className="section ceo-section reveal"
          aria-labelledby="ceo-heading"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className="container">
            <motion.div
              className="ceo-card"
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.2, 0.75, 0.25, 1] }}
            >
              <aside className="ceo-profile">
                <div className="ceo-image">
                  <img
                    src={ceoImg}
                    alt="Zain Ul Abedin, Founder and CEO of QllmSoft"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                <span className="ceo-profile-kicker">Leadership profile</span>
                <div className="ceo-identity">
                  <h3 itemProp="name">Zain Ul Abedin</h3>
                  <span itemProp="jobTitle">Founder &amp; CEO, QllmSoft</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/zain-ul-abedin-b09a613b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-btn"
                  aria-label="Connect with Zain Ul Abedin on LinkedIn"
                  itemProp="sameAs"
                >
                  <Linkedin size={18} />
                  <span>Connect on LinkedIn</span>
                </a>
              </aside>

              <div className="ceo-content">
                <span className="ceo-message-label">A note from our founder</span>
                <h2 id="ceo-heading">Message from the CEO</h2>

                <p>
                 I launched QllmSoft in 2015 with a small team and a clear goal: deliver working software on a predictable timeline. Ten years on, our team and project scope have grown, but that focus remains unchanged. A 100% on time delivery record and a verified 100% Upwork Job Success Score matter more to me than any award.
                </p>

                <p>
                 The first thing I share with new team members is that we are not here to sell a specific tech stack we are here to fix real business problems using whatever tools make the most sense for the client's budget, schedule, and setup. Leading with practicality is a tougher pitch than hyping trendy frameworks, yet it is the exact reason early clients still trust us with new projects years later.
                </p>

              </div>
            </motion.div>
          </div>
        </section>

        {/* ── INTERNAL LINKS ── */}
        <section
          className="section about-explore-section"
          aria-labelledby="explore-heading"
        >
          <div className="container">
            <motion.div
              className="section-title reveal"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="explore-heading">
                Explore What QllmSoft Can Build for Your Business
              </h2>
            </motion.div>
            <nav aria-label="QllmSoft services navigation" className="about-service-marquee">
              <motion.div
                className="about-service-track"
                animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
                transition={reduceMotion ? undefined : { duration: 34, ease: "linear", repeat: Infinity }}
              >
                {[false, true].map((duplicate) => (
                  <div
                    className="about-service-group"
                    key={duplicate ? "duplicate" : "primary"}
                    aria-hidden={duplicate || undefined}
                  >
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        tabIndex={duplicate ? -1 : undefined}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </motion.div>
            </nav>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="section cta-section reveal"
          aria-labelledby="cta-heading"
        >
          <div className="container" style={{ textAlign: "center" }}>
            <div className="cta-content">
              <h2 id="cta-heading">
                Ready to Work with a Software Development Partner You Can
                Rely On?
              </h2>
              <p  style={{ color: "white", marginTop: "10px" }}>
                Tell us your challenge. We'll review your requirements, send
                a detailed fixed-price proposal within 24 hours, and set up
                a free discovery call, no commitment required.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </section>
        <div className="about-calculator-promo">
          <LeadMagnetBanner variant="calculator" />
        </div>
      </main>
    </>
  );
};

export default About;
