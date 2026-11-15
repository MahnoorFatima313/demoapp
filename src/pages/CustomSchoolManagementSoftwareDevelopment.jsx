import React from "react";
import { Helmet } from "react-helmet-async";
import "./service-pages.css";

const PAGE_URL = 'https://qllmsoft.com/custom-school-management-software-development';
const PAGE_TITLE = 'Custom School Management Software Development | QllmSoft';
const PAGE_DESCRIPTION = 'Build school software around admissions, attendance, fees and report cards. Scope roles, data migration, payment connections and a phased rollout with QllmSoft.';
const schemas = [
  { '@context': 'https://schema.org', '@type': 'Service', '@id': PAGE_URL + '#service', name: 'Custom School Management Software Development', serviceType: 'School management software development', url: PAGE_URL, description: PAGE_DESCRIPTION, provider: { '@id': 'https://qllmsoft.com/#organization' } },
  { '@context': 'https://schema.org', '@type': 'WebPage', '@id': PAGE_URL + '#webpage', url: PAGE_URL, name: PAGE_TITLE, description: PAGE_DESCRIPTION, about: { '@id': PAGE_URL + '#service' } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://qllmsoft.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://qllmsoft.com/services' },
    { '@type': 'ListItem', position: 3, name: 'School Software Development', item: PAGE_URL },
  ] },
];

export default function CustomSchoolManagementSoftwareDevelopment() {
  return (
    <main className="svc-page">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta
          name="description"
          content={PAGE_DESCRIPTION}
        />
        <link rel="canonical" href="https://qllmsoft.com/custom-school-management-software-development" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        {schemas.map(schema => <script key={schema['@type']} type="application/ld+json">{JSON.stringify(schema)}</script>)}
      </Helmet>

      <header className="svc-hero">
        <p className="svc-hero__kicker">Education Software</p>
        <h1 className="svc-hero__title">Custom School Management Software for Your Academic and Administrative Workflows</h1>
        <p className="svc-hero__lede">
          Connect admissions, attendance, fee records and reporting around your school's
          rules. QllmSoft develops school management software for institutions that need
          workflows an existing product cannot support through configuration or integration.
          Start with the records and daily tasks that need improvement, then agree on a
          focused first release rather than replacing every tool at once.
        </p>
        <div className="svc-hero__actions">
          <a className="svc-btn svc-btn--primary" href="/contact">Discuss your school's setup</a>
          <a className="svc-btn svc-btn--ghost" href="/education-software-development-pakistan">Explore education software services</a>
        </div>
      </header>

      <section className="svc-section">
        <h2>What the system can cover</h2>
        <p className="svc-section__intro">
          Choose modules according to your academic structure, user roles and existing
          systems. Compare a ready-made SIS, configuration and integration before deciding
          to build. A custom system is worth assessing when important fee, approval or
          reporting rules remain unsupported. An LMS serves a different purpose: delivering
          courses and learning activities. It can connect to school records without becoming
          the authority for every student or finance record.
        </p>
        <dl className="svc-offerings">
          <div>
            <dt>Admissions and enrollment</dt>
            <dd>Define application stages, required documents, admissions decisions and enrollment. Agree on the student identifier and how records carry across academic years, classes or campuses. Check for duplicate applicants before importing existing data.</dd>
          </div>
          <div>
            <dt>Attendance</dt>
            <dd>Record attendance by class or lesson, with agreed late, absence and correction rules. Specify which staff can amend a record and who reviews exceptions. Parent notifications depend on the selected messaging provider, consent process and delivery status.</dd>
          </div>
          <div>
            <dt>Fee management</dt>
            <dd>Scope fee heads, billing periods, installments, concessions and arrears. Keep demands, receipts and payment allocations traceable. Bank or payment-provider connections require confirmed access and matching rules; our <a href="/blog/school-fee-reconciliation-software-pakistan">school fee reconciliation guide</a> explains the exceptions to test before rollout.</dd>
          </div>
          <div>
            <dt>Gradebook and report cards</dt>
            <dd>Agree on assessment weights, grade boundaries, promotion rules and report-card formats. Define who submits, approves and publishes results. A locked reporting period should require an authorised correction process rather than an unrecorded edit.</dd>
          </div>
          <div>
            <dt>Parent and student portal</dt>
            <dd>Give each parent or guardian access to the appropriate student's records, with account recovery and access-revocation procedures. Test sibling relationships and changed guardianship. Staff, students and parents need different permissions; hiding a menu is not sufficient access control.</dd>
          </div>
          <div>
            <dt>Staff and timetable management</dt>
            <dd>Plan classes, subjects, rooms and teacher assignments with the conflicts your school needs to detect. Identify which timetable changes affect attendance or notifications. For existing systems, review the supported interfaces through our <a href="/api-development-services">API integration services</a> before committing to automatic synchronisation.</dd>
          </div>
        </dl>
      </section>

      <section className="svc-section svc-section--mist">
        <div className="svc-section__inner">
          <h2>How we build it</h2>
          <div className="svc-process">
            <div className="svc-step">
              <div>
                <h3>Map your current process</h3>
                <p>Review sample forms, redacted student files, fee reports and the current approval process with school representatives. Identify the source of each record and the people who can approve changes. Use the <a href="/software-project-requirements-checklist">project requirements checklist</a> to capture modules, campuses, user numbers and exclusions before estimating cost and delivery time.</p>
              </div>
            </div>
            <div className="svc-step">
              <div>
                <h3>Design around your terms</h3>
                <p>Translate academic terms, grading policies and fee cycles into testable rules. Agree on data retention, staff access and backups, using references such as the <a href="https://asvs.owasp.org/" target="_blank" rel="noopener noreferrer">OWASP application security verification standard</a> to discuss relevant technical controls. This reference does not certify the finished system or establish the school's legal obligations.</p>
              </div>
            </div>
            <div className="svc-step">
              <div>
                <h3>Pilot with one class or grade</h3>
                <p>Clean and map existing records, rehearse the import and reconcile student counts and opening fee balances. Pilot with a manageable group through the agreed academic or billing cycle. Test a mid-term admission, a corrected attendance entry, a partial payment and a report-card amendment. Compare the results with approved school records before expanding.</p>
              </div>
            </div>
            <div className="svc-step">
              <div>
                <h3>Roll out school-wide with training</h3>
                <p>Agree on training, documentation, hosting ownership, support hours and the initial defect-support period. Plan the cutoff from old records and a fallback if a release fails. School staff should know how to report an exception and export their data. Additional modules and ongoing maintenance belong in an explicit follow-on scope.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="svc-cta">
        <div className="svc-cta__inner">
          <div>
            <h2>Still running your school on spreadsheets and paper?</h2>
            <p>Share your current tools, priority workflows, campus structure and sample reports with sensitive information removed. We can assess what to retain, connect or build, then define a proposal with deliverables, assumptions and acceptance criteria.</p>
          </div>
          <a className="svc-btn svc-btn--primary" href="/contact">Start the conversation</a>
        </div>
      </div>
    </main>
  );
}
