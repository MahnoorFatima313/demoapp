import React from "react";
import "./DocumentControlSoftware.css";

const SITE = "https://qllmsoft.com";
const DOCS = "https://qllmdocs.com";

const featureCards = [
  {
    icon: "01",
    title: "Centralized document repository",
    text: "Bring business files into one cloud workspace instead of leaving important documents across desktops, email attachments, USB drives, and disconnected folders."
  },
  {
    icon: "02",
    title: "Metadata-based document control",
    text: "Organize documents using structured information such as title, category, company, date, amount, and custom tags so people can find records by what they contain."
  },
  {
    icon: "03",
    title: "AI-powered document search",
    text: "Use plain-language or voice queries through ASKAI to locate relevant records without remembering exact filenames or manually opening multiple folders."
  },
  {
    icon: "04",
    title: "Role-based access",
    text: "Keep sensitive documents within the right boundaries by controlling which team members can access shared documents and information."
  },
  {
    icon: "05",
    title: "Audit-ready organization",
    text: "Consistent categorization, searchable metadata, permissions, and centralized storage make it easier to retrieve the evidence your team needs during reviews."
  },
  {
    icon: "06",
    title: "Filtered data export",
    text: "Export document metadata to Excel or CSV, including filtered datasets, when teams need structured information outside the document repository."
  }
];

const workflow = [
  ["01", "Capture", "Upload documents into one controlled cloud repository rather than allowing important records to remain scattered across devices and inboxes."],
  ["02", "Classify", "Attach useful metadata such as category, company, date, amount, and custom tags so documents have searchable context."],
  ["03", "Control access", "Use administrator-managed permissions to keep shared documents available to the people who need them."],
  ["04", "Find & retrieve", "Search by filters or ask QllmDocs ASKAI for the information you need in natural language or voice."],
  ["05", "Review & export", "Retrieve the right records for daily work, audits, reporting, or handoffs and export structured metadata when required."]
];

const faqs = [
  {
    q: "What is document control software?",
    a: "Document control software is a digital system used to organize, identify, protect, retrieve, distribute, and manage business documents and documented information. Depending on the platform, it can include features such as metadata, permissions, approvals, revision tracking, audit trails, retention rules, search, and centralized storage. The exact controls vary by product and by the organization’s process."
  },
  {
    q: "What is the difference between document control software and document management software?",
    a: "Document management software is the broader category covering digital storage, organization, search, access, sharing, and retrieval. Document control focuses more specifically on keeping important documented information identifiable, available to authorized users, and protected from inappropriate use. Many modern document management systems provide document-control capabilities without being a dedicated quality-management application."
  },
  {
    q: "Can document control software help with ISO 9001 documentation?",
    a: "It can support the operational side of document control by providing centralized storage, identification, retrieval, access management, and organized documented information. ISO 9001:2015 gives organizations flexibility in determining the amount and form of documented information required for their quality management system, so software should support—not replace—your documented processes and quality controls."
  },
  {
    q: "Is QllmDocs a document control system?",
    a: "QllmDocs is a cloud document management platform with capabilities that support practical document control, including structured metadata, categorization, advanced filtering, AI-powered search, role-based access, encryption, two-factor authentication, and document metadata export. Organizations with specialized requirements for formal approval chains, revision numbering, or highly regulated records should map those requirements against the platform before implementation."
  },
  {
    q: "How does AI improve document control?",
    a: "AI can reduce the friction of retrieval. Instead of remembering a filename or navigating several folder levels, users can describe what they need in natural language. QllmDocs ASKAI can combine document attributes such as category, date, company, and amount to narrow results while respecting the access permissions applied to the user."
  },
  {
    q: "What documents can be managed with document control software?",
    a: "Common examples include contracts, invoices, purchase records, policies, procedures, reports, project documents, HR records, client files, compliance evidence, certificates, drawings, specifications, and operational records. The right document structure depends on the organization and the controls required for each document class."
  },
  {
    q: "Is cloud document control software suitable for small businesses?",
    a: "Yes. A cloud system can give a small business a centralized document repository without requiring it to maintain its own file server. The key is choosing a platform with an appropriate permission model, search capability, security controls, storage limits, and pricing structure."
  },
  {
    q: "How should a business choose document control software?",
    a: "Start with the workflow rather than the feature list. Identify document types, users, access rules, search requirements, retention needs, audit expectations, integrations, storage volume, and reporting requirements. Then compare products against those requirements and test the most important workflows with representative documents before rollout."
  }
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function DocumentControlSoftware() {
  const pageUrl = `${SITE}/document-control-software`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Document Control Software | Smart Document Control & Management",
    url: pageUrl,
    description:
      "An in-depth guide to document control software, document controller software, document management, document security, metadata, AI search and practical document control workflows.",
    publisher: {
      "@type": "Organization",
      name: "QllmSoft",
      url: SITE
    },
    about: [
      "Document control software",
      "Document controller software",
      "Document management software",
      "Document control system",
      "Cloud document management"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a
      }
    }))
  };

  return (
    <main className="dcs-page">
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <section className="dcs-hero">
        <div className="dcs-orb dcs-orb-one" />
        <div className="dcs-orb dcs-orb-two" />

        <div className="dcs-container dcs-hero-grid">
          <div className="dcs-hero-copy">
            <span className="dcs-eyebrow">DOCUMENT CONTROL SOFTWARE</span>
            <h1>Document Control Software for a More Organized, Searchable Business</h1>
            <p className="dcs-lead">
              Stop treating document control as a maze of folders, filenames, email attachments, and
              spreadsheets. Modern document control software gives teams a structured place to store,
              identify, secure, retrieve, and work with important business information.
            </p>

            <div className="dcs-actions">
              <a className="dcs-btn dcs-btn-primary" href={`${DOCS}/`}>
                Explore QllmDocs <Arrow />
              </a>
              <a className="dcs-btn dcs-btn-ghost" href="#how-it-works">
                See how it works
              </a>
            </div>

            <div className="dcs-proof-row">
              <div><strong>Cloud</strong><span>Access from anywhere</span></div>
              <div><strong>AI</strong><span>Natural-language search</span></div>
              <div><strong>RBAC</strong><span>Role-based access</span></div>
            </div>
          </div>

          <div className="dcs-hero-visual">
            <div className="dcs-glass-card dcs-dashboard-card">
              <div className="dcs-window-bar">
                <span />
                <span />
                <span />
                <b>Document Control Workspace</b>
              </div>
              <div className="dcs-dashboard">
                <div className="dcs-sidebar">
                  <div className="dcs-mini-logo">Q</div>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="dcs-dash-main">
                  <div className="dcs-dash-top">
                    <div>
                      <small>DOCUMENT LIBRARY</small>
                      <strong>Controlled files</strong>
                    </div>
                    <span className="dcs-live">● Live</span>
                  </div>
                  <div className="dcs-stat-grid">
                    <div><small>Documents</small><strong>2,486</strong><span>+12.4%</span></div>
                    <div><small>Categories</small><strong>18</strong><span>Organized</span></div>
                    <div><small>AI searches</small><strong>742</strong><span>This month</span></div>
                  </div>
                  <div className="dcs-search-demo">
                    <span>⌕</span>
                    <span>Show approved contracts from March...</span>
                    <b>ASKAI</b>
                  </div>
                  <div className="dcs-file-list">
                    <div><span className="dcs-file-icon">PDF</span><div><b>Supplier Agreement</b><small>Legal · March 18 · Approved</small></div><em>Protected</em></div>
                    <div><span className="dcs-file-icon">DOC</span><div><b>Quality Procedure</b><small>Quality · March 12 · Controlled</small></div><em>Protected</em></div>
                    <div><span className="dcs-file-icon">XLS</span><div><b>Vendor Register</b><small>Finance · March 08 · Active</small></div><em>Protected</em></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dcs-float-card dcs-float-top">⌁ <b>AI retrieval</b><small>Find documents by meaning</small></div>
            <div className="dcs-float-card dcs-float-bottom">✓ <b>Access controlled</b><small>Only authorized users</small></div>
          </div>
        </div>
      </section>

      <section className="dcs-intro dcs-section">
        <div className="dcs-container dcs-narrow">
          <span className="dcs-kicker">WHY DOCUMENT CONTROL MATTERS</span>
          <h2>Document control is about more than storing files</h2>
          <p>
            A business can have thousands of files and still have poor document control. The problem
            usually appears when people cannot answer simple questions quickly: Where is the current
            document? Who can access it? What does this file relate to? Which client, project, supplier,
            date, or transaction does it belong to? Can the team retrieve the evidence needed for a review?
          </p>
          <p>
            This is why document control software and document management software are increasingly
            connected. Storage is only the foundation. Effective control depends on identification,
            organization, permissions, retrieval, and a process that makes information dependable for
            the people who use it.
          </p>
          <div className="dcs-callout">
            <strong>Good document control reduces uncertainty.</strong>
            <span>
              Instead of relying on one employee remembering a folder path, a filename, or an old email,
              the organization creates a repeatable system for finding and handling information.
            </span>
          </div>
        </div>
      </section>

      <section className="dcs-image-section dcs-section">
        <div className="dcs-container dcs-image-grid">
          <div>
            <span className="dcs-kicker">FROM FILE STORAGE TO DOCUMENT CONTROL</span>
            <h2>Give every document useful context</h2>
            <p>
              Folder structures are familiar, but they can become difficult to maintain as teams,
              customers, projects, and document volumes grow. Metadata adds another layer of context:
              category, company, date, amount, custom tags, and other attributes can describe what a file
              is instead of only describing where someone saved it.
            </p>
            <p>
              QllmDocs is designed around this principle. Its document repository combines metadata,
              filtering, categorization, AI search, access controls, and cloud storage so users can move
              from “I think it is in that folder” to a repeatable retrieval workflow.
            </p>
            <a className="dcs-inline-link" href={`${DOCS}/document-tagging-software`}>
              Learn about document tagging and metadata <Arrow />
            </a>
          </div>
          <figure className="dcs-image-frame">
            <img
              src="https://qllmdocs.com/images/dashboard-qllmdocs-new.png"
              alt="QllmDocs document management dashboard for organized document control"
              loading="lazy"
            />
            <figcaption>QllmDocs combines centralized storage, metadata, filtering, and document access controls.</figcaption>
          </figure>
        </div>
      </section>

      <section className="dcs-section dcs-features-section">
        <div className="dcs-container">
          <div className="dcs-section-heading">
            <span className="dcs-kicker">CORE CAPABILITIES</span>
            <h2>What to look for in document control software</h2>
            <p>
              The best system depends on your workflow, but these capabilities form a useful evaluation
              framework for teams comparing document control systems.
            </p>
          </div>
          <div className="dcs-feature-grid">
            {featureCards.map((item) => (
              <article className="dcs-feature-card" key={item.title}>
                <span className="dcs-feature-number">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dcs-section dcs-dark-section" id="how-it-works">
        <div className="dcs-container dcs-workflow-grid">
          <div className="dcs-sticky-copy">
            <span className="dcs-kicker dcs-kicker-light">A PRACTICAL WORKFLOW</span>
            <h2>How a document control system fits into daily work</h2>
            <p>
              Document control software becomes valuable when it supports the real journey of a file,
              from arrival to retrieval. A simple, repeatable workflow also makes onboarding easier because
              staff do not need to invent their own filing system.
            </p>
            <a className="dcs-btn dcs-btn-light" href={`${DOCS}/document-collaboration-software`}>
              Explore document collaboration <Arrow />
            </a>
          </div>

          <div className="dcs-workflow-list">
            {workflow.map(([number, title, text]) => (
              <div className="dcs-workflow-item" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dcs-section">
        <div className="dcs-container dcs-two-col">
          <div>
            <span className="dcs-kicker">DOCUMENT CONTROLLER SOFTWARE</span>
            <h2>What document controllers need from software</h2>
            <p>
              A document controller is often responsible for keeping organizational documentation
              identifiable, accessible, organized, and distributed according to the company’s process.
              The job can involve large volumes of technical documents, quality records, contracts,
              procedures, forms, drawings, reports, certificates, or project correspondence.
            </p>
            <p>
              Good document controller software should therefore reduce administrative friction rather
              than add another layer of manual work. Search should be fast. Document attributes should be
              easy to filter. Access should be manageable. Information should be available to authorized
              users without forcing the controller to answer every “where is this file?” question.
            </p>
            <p>
              For teams evaluating a platform, it is useful to separate general document management
              capabilities from specialized controls. Requirements such as formal revision numbering,
              approval gates, electronic signatures, retention schedules, engineering transmittals, or
              regulated records management may require dedicated workflows or configuration beyond a
              general-purpose document repository.
            </p>
          </div>

          <div className="dcs-checklist-card">
            <span>CONTROL CHECKLIST</span>
            <h3>Questions to ask before choosing a platform</h3>
            <ul>
              <li>Can users find documents without knowing the exact filename?</li>
              <li>Can documents be categorized and described with useful metadata?</li>
              <li>Can administrators manage access for different users?</li>
              <li>Can the system handle sensitive business information securely?</li>
              <li>Can teams retrieve records quickly during an audit or review?</li>
              <li>Can filtered document information be exported for reporting?</li>
              <li>Does the platform fit the company’s existing workflow?</li>
              <li>Are specialized approval or revision controls actually required?</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="dcs-image-section dcs-section dcs-soft-bg">
        <div className="dcs-container dcs-image-grid dcs-image-grid-reverse">
          <figure className="dcs-image-frame">
            <img
              src="https://qllmdocs.com/images/documents-qllmdocs-new.png"
              alt="QllmDocs organized document library with searchable document records"
              loading="lazy"
            />
            <figcaption>A searchable document library gives teams a clearer path from information to action.</figcaption>
          </figure>
          <div>
            <span className="dcs-kicker">SMART DOCUMENT MANAGEMENT</span>
            <h2>QllmDocs turns document storage into a searchable workspace</h2>
            <p>
              QllmDocs is a cloud document management platform developed by QllmSoft for individuals,
              professionals, and teams. It is designed to centralize documents and make them easier to
              organize, retrieve, and share under administrator-managed access.
            </p>
            <p>
              The platform uses structured metadata such as document title, category, company, date,
              amount, and custom tags. Users can combine filters and use ASKAI to search with natural
              language or voice. That makes the system useful for teams that have outgrown simple folders
              but do not want a complicated enterprise implementation just to answer everyday document
              questions.
            </p>
            <p>
              QllmDocs also provides encryption, HTTPS/TLS for data in transit, role-based permissions,
              optional two-factor authentication, and Excel/CSV export for document metadata. Its plans
              are designed to accommodate individual users as well as growing teams.
            </p>
            <a className="dcs-inline-link" href={`${DOCS}/`}>
              See QllmDocs features and plans <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="dcs-section">
        <div className="dcs-container dcs-content-width">
          <span className="dcs-kicker">DOCUMENT CONTROL BEST PRACTICES</span>
          <h2>Build a document control process people will actually follow</h2>
          <p>
            Software works best when the organization has a clear process behind it. Before migrating
            thousands of files, define what the business considers a controlled document, which metadata
            matters, who should access each category, and how employees are expected to retrieve information.
            A system that contains every historical file but has no consistent structure can reproduce the
            same problem in digital form.
          </p>

          <div className="dcs-best-practices">
            <article><b>1</b><div><h3>Define document categories</h3><p>Use categories that reflect how your team works. Avoid creating dozens of labels that employees cannot remember or apply consistently.</p></div></article>
            <article><b>2</b><div><h3>Choose meaningful metadata</h3><p>Capture attributes that help people identify and retrieve a document later. Examples include client, supplier, project, date, amount, department, and status.</p></div></article>
            <article><b>3</b><div><h3>Design access around responsibility</h3><p>Not every employee needs access to every document. Use role-based permissions and review access as teams and responsibilities change.</p></div></article>
            <article><b>4</b><div><h3>Make retrieval the priority</h3><p>A document system succeeds when users can find information quickly. Test common searches with real examples instead of measuring the system only by storage capacity.</p></div></article>
            <article><b>5</b><div><h3>Separate requirements from assumptions</h3><p>If your organization requires formal approvals, revision history, signatures, retention rules, or industry-specific controls, document those requirements before selecting software.</p></div></article>
          </div>

          <div className="dcs-source-note">
            <strong>Standards context:</strong> ISO explains that ISO 9001:2015 gives organizations flexibility over the amount and form of documented information needed for their quality management system. The goal is effective planning, operation, control, and evidence—not simply creating more documents.
            <a href="https://www.iso.org/iso/documented_information.pdf" target="_blank" rel="noopener noreferrer"> Read ISO guidance <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="dcs-section dcs-compare-section">
        <div className="dcs-container">
          <div className="dcs-section-heading">
            <span className="dcs-kicker">CHOOSE THE RIGHT APPROACH</span>
            <h2>Document control software vs. folders and basic cloud storage</h2>
            <p>
              Traditional folders are not inherently wrong. They become difficult when document volume,
              teams, permissions, and retrieval requirements grow beyond what a simple hierarchy can handle.
            </p>
          </div>

          <div className="dcs-table-wrap">
            <table>
              <thead><tr><th>Capability</th><th>Folders / basic storage</th><th>Document control platform</th></tr></thead>
              <tbody>
                <tr><td>Centralized storage</td><td>Usually</td><td>Yes</td></tr>
                <tr><td>Structured metadata</td><td>Limited</td><td>Core capability</td></tr>
                <tr><td>Advanced filtering</td><td>Basic or manual</td><td>Designed for retrieval</td></tr>
                <tr><td>Natural-language search</td><td>Usually unavailable</td><td>Available in AI-enabled platforms</td></tr>
                <tr><td>Role-based access</td><td>Varies</td><td>Designed into the system</td></tr>
                <tr><td>Audit/review retrieval</td><td>Often manual</td><td>Centralized and searchable</td></tr>
                <tr><td>Metadata export</td><td>Usually manual</td><td>Available in QllmDocs</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="dcs-section dcs-security">
        <div className="dcs-container dcs-security-grid">
          <div>
            <span className="dcs-kicker">SECURITY & ACCESS</span>
            <h2>Document control must include information security</h2>
            <p>
              Business documents can contain contracts, financial information, employee records, customer
              data, pricing, project information, and other material that should not be universally accessible.
              A document repository should therefore be evaluated as an information-security system as well
              as a productivity tool.
            </p>
            <p>
              QllmDocs states that documents are protected with AES-256 encryption at rest, TLS/HTTPS in
              transit, administrator-managed role-based access, and optional two-factor authentication.
              These controls help create a stronger boundary around shared documents than leaving sensitive
              files in unmanaged local folders or email threads.
            </p>
          </div>
          <div className="dcs-security-panel">
            <div><span>🔐</span><b>AES-256</b><small>Encryption at rest</small></div>
            <div><span>🛡</span><b>RBAC</b><small>Role-based permissions</small></div>
            <div><span>✓</span><b>HTTPS / TLS</b><small>Protected data transfer</small></div>
            <div><span>2FA</span><b>Optional</b><small>Additional account protection</small></div>
          </div>
        </div>
      </section>

      <section className="dcs-section dcs-faq">
        <div className="dcs-container dcs-content-width">
          <span className="dcs-kicker">FAQ</span>
          <h2>Document control software questions</h2>
          <div className="dcs-faq-list">
            {faqs.map(({ q, a }) => (
              <details key={q}>
                <summary>{q}<span>+</span></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="dcs-cta">
        <div className="dcs-container dcs-cta-inner">
          <div>
            <span className="dcs-kicker dcs-kicker-light">READY TO ORGANIZE YOUR DOCUMENTS?</span>
            <h2>Move from scattered files to smarter document control.</h2>
            <p>
              Explore QllmDocs and see how centralized storage, metadata, AI-powered retrieval, and
              role-based access can fit into your document workflow.
            </p>
          </div>
          <div className="dcs-actions">
            <a className="dcs-btn dcs-btn-white" href={`${DOCS}/`}>
              Try QllmDocs <Arrow />
            </a>
            <a className="dcs-btn dcs-btn-outline-white" href={`${SITE}/contact`}>
              Talk to QllmSoft
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
