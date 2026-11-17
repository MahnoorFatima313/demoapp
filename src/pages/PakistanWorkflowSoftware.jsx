import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { schemaOrganization } from "../data/schema";
import "./PakistanWorkflowSoftware.css";

const pages = {
  "payroll-software-development-pakistan": {
    title: "Payroll Software Development in Pakistan | QllmSoft",
    description: "Custom payroll software for Pakistani businesses: attendance inputs, salary rules, approvals, payslips, audit trails and integrations designed around your finance workflow.",
    h1: "Payroll software built around how Pakistani businesses actually pay people",
    intro: "Replace spreadsheet handoffs and repeated payroll calculations with a controlled payroll workflow that your HR and finance teams can explain, review and run on time.",
    audience: "Designed for growing companies, multi-branch employers and organisations that need payroll connected to attendance, HR, accounting or banking workflows.",
    points: ["Employee records, departments, branches and salary components", "Attendance, leave, overtime and approval rules kept separate from final payroll", "Reviewable payroll runs with locking, corrections and downloadable payslips", "Exports and APIs for accounting, attendance devices and approved payment workflows"],
    faqs: [["Can payroll software calculate every Pakistani salary rule automatically?", "It can implement the rules your organisation approves, but tax, benefits and statutory treatment should be confirmed with your payroll or legal adviser. The software should preserve the source inputs, calculation version and approval trail rather than hide assumptions."], ["Can you connect attendance devices to payroll?", "Yes. We first verify the device model, export method, employee identifiers, shift boundaries and exception process. Approved attendance should feed payroll; a missing punch should not silently become an automatic deduction."], ["Should we buy an off-the-shelf payroll product or build one?", "Buy when a supported product matches your rules and integrations. Custom development is sensible when branches, approvals, legacy systems or reporting requirements create workarounds that a standard product cannot handle reliably."]],
    links: [{ href: "/custom-business-automation-solutions", label: "business automation solutions" }, { href: "/blog/biometric-attendance-payroll-integration-pakistan", label: "attendance and payroll integration guide" }]
  },
  "inventory-management-software-pakistan": {
    title: "Inventory Management Software in Pakistan | QllmSoft",
    description: "Custom inventory management software for Pakistani distributors, retailers and manufacturers, with multi-location stock, purchasing, transfers, approvals and reliable reporting.",
    h1: "Inventory management software for Pakistani distributors and growing retailers",
    intro: "Know what is available, where it is held and why the balance changed. We build inventory workflows around real products, units, locations, suppliers and approval responsibilities.",
    audience: "A practical fit for businesses moving beyond Excel, operating multiple godowns or branches, or reconciling stock with sales, purchasing and accounting systems.",
    points: ["Product masters with SKUs, barcodes, pack sizes, units and reorder levels", "Purchasing, receiving, transfers, sales issues, returns and adjustments", "Separate stock by branch, godown, batch or status without hiding damaged goods", "Import validation, role-based approvals and reports that preserve movement history"],
    faqs: [["Can the system handle cartons and loose pieces?", "Yes, when the business defines a base unit and approved conversions for each product. The system should show the conversion used and prevent an ambiguous pack size from changing stock silently."], ["Can we migrate from Excel?", "A safe migration starts with a cleaned product master, opening balances, locations and a documented cutoff. We test imports, duplicates and rejected rows before the new system becomes the operational stock record."], ["Does inventory software need an accounting integration?", "Not always. Some businesses need controlled exports; others need a two-way integration. The right design depends on which system owns products, purchases, costs, invoices and financial postings."]],
    links: [{ href: "/projects/inventory-management-system", label: "inventory management project" }, { href: "/blog/excel-to-inventory-software-migration-pakistan", label: "Excel-to-inventory migration guide" }]
  },
  "clinic-management-software-pakistan": {
    title: "Clinic Management Software Development Pakistan | QllmSoft",
    description: "Custom clinic management software for Pakistani practices: appointments, patient records, billing, staff access, reports and integrations designed for your clinic workflow.",
    h1: "Clinic management software designed for Pakistani healthcare workflows",
    intro: "Give reception, clinicians and accounts teams one dependable workflow for appointments, patient records, billing and follow-up—without forcing the clinic to change how it delivers care overnight.",
    audience: "Suitable for independent clinics, specialist practices and multi-location healthcare groups that need clearer coordination, controlled access and better operational reporting.",
    points: ["Appointment booking, queues, reminders and provider availability", "Patient profiles, visit notes, documents and consent-aware access", "Invoices, packages, payments and outstanding balances linked to visits", "Branch, staff and audit controls with exports or integrations where approved"],
    faqs: [["Can clinic software replace our existing patient system?", "It can, but replacement should follow a records and workflow assessment. If the current system exports usable data, a focused integration or staged migration may be safer than replacing everything at once."], ["How do you protect patient information?", "Access is designed around roles, least privilege, secure authentication, audit events, backups and controlled exports. The clinic remains responsible for defining its legal, clinical and retention requirements."], ["Can the software support multiple clinic branches?", "Yes. Branches, providers, rooms, services and reporting periods can be modelled separately while authorised managers receive an organisation-wide view."]],
    links: [{ href: "/healthcare-software-development-pakistan", label: "healthcare software development services" }, { href: "/api-development-services", label: "API development and integrations" }]
  }
};

export default function PakistanWorkflowSoftware() {
  const { slug } = useParams();
  const page = pages[slug] || pages["payroll-software-development-pakistan"];
  const url = `https://qllmsoft.com/${slug}`;
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: page.title.replace(" | QllmSoft", ""), provider: { "@type": "Organization", name: "QllmSoft", url: "https://qllmsoft.com" }, areaServed: { "@type": "Country", name: "Pakistan" }, url, description: page.description };
  return <>
    <Helmet>
      <title>{page.title}</title><meta name="description" content={page.description} /><link rel="canonical" href={url} />
      <meta property="og:title" content={page.title} /><meta property="og:description" content={page.description} /><meta property="og:url" content={url} /><meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script><script type="application/ld+json">{JSON.stringify(serviceSchema)}</script><script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <main className="pws-page" id="main-content"><section className="pws-hero"><div className="pws-container"><p className="pws-eyebrow">Pakistan-focused software development <span aria-hidden="true">✦</span></p><h1>{page.h1}</h1><p className="pws-lead">{page.intro}</p><div className="pws-actions"><Link className="pws-button pws-button--primary" to="/contact">Discuss your workflow <span aria-hidden="true">↗</span></Link><Link className="pws-text-link" to="/services">Explore all services <span aria-hidden="true">→</span></Link></div></div><div className="pws-hero-glow" aria-hidden="true" /></section>
      <section className="pws-section pws-section--light"><div className="pws-container"><div className="pws-section-heading"><p className="pws-kicker">Built for the work behind the dashboard</p><h2>What the software should make easier</h2><p>{page.audience}</p></div><div className="pws-feature-grid">{page.points.map((point, index) => <article className="pws-feature-card" key={point}><span className="pws-feature-number">0{index + 1}</span><h3>{point.split(",")[0]}</h3><p>{point}</p><span className="pws-card-arrow" aria-hidden="true">↗</span></article>)}</div></div></section>
      <section className="pws-section pws-process-section"><div className="pws-container pws-process-grid"><div><p className="pws-kicker">A clearer route from problem to product</p><h2>Plan the workflow before choosing features</h2></div><div className="pws-process-copy"><p>Start with the records, decisions and exceptions your team handles every day. We map the current process, identify where data is re-entered, define permissions and agree which system owns each record. That produces a practical scope instead of a long feature list that does not match operations.</p><p>Explore our {page.links.map((link, index) => <React.Fragment key={link.href}>{index > 0 ? " and " : ""}<Link to={link.href}>{link.label}</Link></React.Fragment>)} for related guidance and examples.</p></div></div></section>
      <section className="pws-section pws-section--light"><div className="pws-container"><div className="pws-section-heading"><p className="pws-kicker">Useful answers before you commit</p><h2>Questions businesses ask before commissioning a system</h2></div><div className="pws-faq-grid">{page.faqs.map(([q, a]) => <details className="pws-faq" key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section>
      <section className="pws-cta-section"><div className="pws-container pws-cta"><div><p className="pws-kicker">Make the next decision easier</p><h2>Ready to scope a Pakistan-based workflow?</h2><p>Send the current process, the systems involved and the outcome you need. We will help you decide whether configuration, integration or custom development is the most responsible next step.</p></div><Link className="pws-button pws-button--light" to="/contact">Book a discovery call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  </>;
}
