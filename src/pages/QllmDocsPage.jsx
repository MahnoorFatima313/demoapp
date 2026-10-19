import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Cloud,
  FileSpreadsheet,
  FolderLock,
  KeyRound,
  LockKeyhole,
  Search,
  ShieldCheck,
  Tags,
  UsersRound,
} from "lucide-react";
import dashboardImage from "../assets/QllmDocs.webp";
import documentsImage from "../assets/QllmDocsMainPage2.webp";
import "./QllmDocsPage.css";

const PRODUCT_URL = "https://qllmdocs.com";
const COMPANY_URL = "https://qllmsoft.com";
const PAGE_URL = `${COMPANY_URL}/ai-document-management-software`;
const TITLE = "AI Document Management Software | QllmDocs by QllmSoft";
const DESCRIPTION =
  "AI document management software for document controllers: searchable metadata, AskAI natural-language search, role-based access, encryption and Excel/CSV export.";

const features = [
  { icon: FolderLock, title: "One secure document home", text: "Bring important business files into a centralized cloud repository instead of scattered drives, inboxes, and folders." },
  { icon: Tags, title: "Metadata that makes sense", text: "Organize documents with categories, company, dates, amounts, and custom tags that reflect how your team works." },
  { icon: BrainCircuit, title: "AskAI document search", text: "Search with natural-language or voice queries to find relevant records without knowing the exact filename." },
  { icon: UsersRound, title: "Role-based access", text: "Manage access to shared documents so team members can work with the information relevant to them." },
  { icon: FileSpreadsheet, title: "Export when you need it", text: "Export document metadata to Excel or CSV, including filtered records for reporting and handoffs." },
  { icon: ShieldCheck, title: "Security built in", text: "AES-256 encryption at rest, HTTPS/TLS in transit, and two-factor authentication." },
];

const steps = [
  ["Upload", "Bring documents into one cloud workspace."],
  ["Organize", "Add categories, metadata, and tags that make records easy to identify."],
  ["Control", "Manage who can access the documents your team shares."],
  ["Find", "Use filters or ask AskAI to locate the information you need."],
  ["Export", "Take filtered document metadata into Excel or CSV."],
];

const faqs = [
  { question: "What is AI document management software?", answer: "AI document management software helps teams store, organize, secure, and retrieve business documents, with AI used to make finding information faster. In QllmDocs, AskAI lets users search in natural language or by voice, alongside metadata filters and role-based access." },
  { question: "How does QllmDocs use AI to find documents?", answer: "AskAI lets users describe the information they need in natural language or by voice. Search can also use document attributes such as category, date, company, and amount, and results are subject to the user's access permissions." },
  { question: "Can QllmDocs be used as document controller software?", answer: "QllmDocs supports day-to-day document control by helping teams categorize, find, and manage access to shared documents. If your process requires formal revision numbering, approval chains, or specialized regulated-record controls, confirm those requirements before choosing a platform; QllmDocs is focused on document organization, retrieval, and access management." },
  { question: "What is QllmDocs?", answer: "QllmDocs is a cloud document management product developed and owned by QllmSoft. It helps teams organize, protect, search, and retrieve business documents from one workspace." },
  { question: "Who builds QllmDocs?", answer: "QllmSoft designs, develops, and maintains QllmDocs in-house. It is our own product, not a third-party tool we resell." },
  { question: "Is my data secure in QllmDocs?", answer: "QllmDocs uses AES-256 encryption at rest, HTTPS/TLS in transit, two-factor authentication, and role-based access to shared documents." },
  { question: "Can I export document information?", answer: "QllmDocs supports exporting document metadata to Excel or CSV, including filtered datasets." },
];

const proof = [
  [BrainCircuit, "AI-powered search"],
  [ShieldCheck, "AES-256 encryption"],
  [UsersRound, "Role-based access"],
];

const security = [
  [LockKeyhole, "Role-based access", "Team permissions for shared documents"],
  [ShieldCheck, "Encryption", "AES-256 at rest; HTTPS/TLS in transit"],
  [KeyRound, "Two-factor authentication", "An additional account security step"],
  [Cloud, "Cloud workspace", "Access the document library online"],
];

const external = { target: "_blank", rel: "noopener noreferrer" };

function BrandMark({ className = "" }) {
  return (
    <span className={`qdocs-mark ${className}`} aria-hidden="true">
      <span>Q</span>
    </span>
  );
}

function QllmDocsPage() {
  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          "@id": `${PAGE_URL}#product`,
          name: "QllmDocs",
          alternateName: "QllmDocs AI Document Management Software",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: DESCRIPTION,
          url: PRODUCT_URL,
          image: "https://qllmdocs.com/images/dashboard-qllmdocs-new.png",
          featureList: [
            "AI-powered document search (AskAI) with natural-language and voice queries",
            "Metadata, categories and custom tags",
            "Role-based access",
            "AES-256 encryption at rest, HTTPS/TLS in transit, two-factor authentication",
            "Export of document metadata to Excel or CSV",
          ],
          publisher: { "@type": "Organization", name: "QllmSoft", url: COMPANY_URL },
        },
        {
          "@type": "WebPage",
          "@id": `${PAGE_URL}#webpage`,
          url: PAGE_URL,
          name: TITLE,
          description: DESCRIPTION,
          about: { "@id": `${PAGE_URL}#product` },
          inLanguage: "en-US",
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "QllmSoft", item: COMPANY_URL },
            { "@type": "ListItem", position: 2, name: "AI Document Management Software", item: PAGE_URL },
          ],
        },
      ],
    }),
    []
  );

  const onMove = useCallback((e) => {
    if (e.pointerType === "touch") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${-12 + x * 10}deg`);
    el.style.setProperty("--rx", `${2 - y * 8}deg`);
  }, []);
  const onLeave = useCallback((e) => {
    e.currentTarget.style.removeProperty("--ry");
    e.currentTarget.style.removeProperty("--rx");
  }, []);

  return (
    <main className="qdocs-page" id="main-content">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="https://qllmdocs.com/images/dashboard-qllmdocs-new.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="qdocs-hero">
        <div className="qdocs-hero__floor" aria-hidden="true" />
        <div className="qdocs-orb qdocs-orb--one" aria-hidden="true" />
        <div className="qdocs-orb qdocs-orb--two" aria-hidden="true" />
        <div className="qdocs-container">
          <a className="qdocs-brandbar" href={COMPANY_URL}>
            <strong>QllmSoft</strong>
            <i aria-hidden="true" />
            <span>Product</span>
            <b>QllmDocs</b>
          </a>
        </div>
        <div className="qdocs-container qdocs-hero__grid">
          <div className="qdocs-hero__copy">
            <h1>AI Document Management Software to Organize, Search and Control Business Documents</h1>
            <p>
              <strong>QllmDocs</strong> is AI document management software and a document controller
              tool for teams that need a clear way to organize, secure, and retrieve business
              documents. Add useful metadata, control access, and find information with AskAI.
            </p>
            <div className="qdocs-actions">
              <a className="qdocs-button qdocs-button--primary" href={PRODUCT_URL} {...external}>
                Explore QllmDocs <ArrowUpRight size={18} />
              </a>
              <a className="qdocs-button qdocs-button--secondary" href="#qdocs-features">
                Discover features <ArrowDown size={17} />
              </a>
            </div>
            <ul className="qdocs-proof">
              {proof.map(([Icon, label]) => (
                <li key={label}><Icon size={17} /> {label}</li>
              ))}
            </ul>
          </div>

          <div className="qdocs-stage" onPointerMove={onMove} onPointerLeave={onLeave}>
            <div className="qdocs-scene">
              <div className="qdocs-ring" aria-hidden="true" />
              <div className="qdocs-layer qdocs-layer--back" aria-hidden="true">
                <img src={documentsImage} alt="" width="1200" height="760" decoding="async" />
              </div>
              <div className="qdocs-layer qdocs-layer--front">
                <div className="qdocs-window"><i /><i /><i /><span>QllmDocs · Document workspace</span></div>
                <img
                  src={dashboardImage}
                  alt="QllmDocs AI document management dashboard with Ask AI, filters, and export controls"
                  width="1200"
                  height="760"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <div className="qdocs-float qdocs-float--search">
                <span><Search size={17} /></span>
                <div><strong>Find by meaning</strong><small>AskAI search</small></div>
              </div>
              <div className="qdocs-float qdocs-float--secure">
                <span><LockKeyhole size={17} /></span>
                <div><strong>Access controlled</strong><small>For your team</small></div>
              </div>
              <div className="qdocs-float qdocs-float--brand">
                <div><strong>By QllmSoft</strong><small>Built in-house</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qdocs-origin" aria-labelledby="qdocs-origin-title">
        <div className="qdocs-container qdocs-origin__inner">
          <div className="qdocs-origin__badge">
            <div>
              <strong>QllmSoft</strong>
              <span>Software development company</span>
            </div>
          </div>
          <div className="qdocs-origin__copy">
            <h2 id="qdocs-origin-title">Created in-house. Ready for your document workflows.</h2>
            <p>
              QllmDocs is QllmSoft’s own product, not a third-party tool we resell. We built it
              to bring document storage, useful context, access controls, and AI-assisted
              retrieval together in one focused workspace.
            </p>
          </div>
          <div className="qdocs-origin__links">
            <a className="qdocs-text-link" href={PRODUCT_URL} {...external}>
              Visit qllmdocs.com <ArrowUpRight size={16} />
            </a>
            <Link className="qdocs-text-link" to="/document-control-software">
              Document control software <ArrowUpRight size={16} />
            </Link>
            <a className="qdocs-text-link" href={COMPANY_URL}>
              More from QllmSoft <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="qdocs-section" id="qdocs-features">
        <div className="qdocs-container">
          <div className="qdocs-heading">
            <span className="qdocs-section-label">One workspace, useful capabilities</span>
            <h2>AI document management features for everyday team workflows</h2>
            <p>Organize documents, manage access, and retrieve the right information from one workspace.</p>
          </div>
          <div className="qdocs-feature-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="qdocs-feature" key={title}>
                <span className="qdocs-feature__icon"><Icon size={22} strokeWidth={1.8} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qdocs-showcase">
        <div className="qdocs-container qdocs-showcase__grid">
          <div className="qdocs-showcase__copy">
            <span className="qdocs-section-label">AI document search for document controllers</span>
            <h2>Find documents by their details, not only by folder or filename.</h2>
            <p>
              Document controllers can add details like category, company, date, amount, and custom tags.
              Then filter the library or use AskAI to retrieve relevant documents using
              plain language or voice.
            </p>
            <ul className="qdocs-check-list">
              {["Structured metadata and categories", "Attribute-based filters", "AskAI natural-language and voice search", "Metadata export to Excel or CSV"].map((t) => (
                <li key={t}><Check size={17} /> {t}</li>
              ))}
            </ul>
            <a className="qdocs-text-link" href={`${PRODUCT_URL}/#features`} {...external}>
              View QllmDocs features <ArrowUpRight size={16} />
            </a>
          </div>
          <figure className="qdocs-showcase__image">
            <img src={documentsImage} alt="QllmDocs document table showing categories, dates, tags, status, and export tools" width="1200" height="760" loading="lazy" decoding="async" />
            <figcaption>Document details, filters, AskAI, and export in one workspace.</figcaption>
          </figure>
        </div>
      </section>

      <section className="qdocs-section qdocs-workflow">
        <div className="qdocs-container">
          <div className="qdocs-heading">
            <span className="qdocs-section-label">A simple document workflow</span>
            <h2>From scattered files to findable information</h2>
          </div>
          <ol className="qdocs-steps">
            {steps.map(([title, text], i) => (
              <li key={title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="qdocs-security">
        <div className="qdocs-container qdocs-security__inner">
          <div>
            <span className="qdocs-section-label">Privacy and control</span>
            <h2>Keep access and protection part of the workflow.</h2>
            <p>
              QllmDocs combines role-based access with encryption and two-factor
              authentication. AI-assisted search respects the permissions applied to
              each user, helping teams find relevant records within their authorized access.
            </p>
          </div>
          <div className="qdocs-security__cards">
            {security.map(([Icon, title, text]) => (
              <article key={title}><Icon size={22} /><strong>{title}</strong><span>{text}</span></article>
            ))}
          </div>
        </div>
      </section>

      <section className="qdocs-faq qdocs-section">
        <div className="qdocs-container qdocs-faq__inner">
          <div className="qdocs-heading">
            <span className="qdocs-section-label">Quick answers</span>
            <h2>AI document management software questions</h2>
          </div>
          <div className="qdocs-faq__list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="qdocs-cta">
        <div className="qdocs-container qdocs-cta__inner">
          <div>
            <span className="qdocs-cta__brand">A product from QllmSoft</span>
            <h2>See AI document management software built for easier organization and retrieval.</h2>
            <p>See how QllmDocs helps teams organize business documents, manage access, and find important information with AskAI.</p>
          </div>
          <a className="qdocs-button qdocs-button--primary" href={PRODUCT_URL} {...external}>
            Explore QllmDocs <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default QllmDocsPage;