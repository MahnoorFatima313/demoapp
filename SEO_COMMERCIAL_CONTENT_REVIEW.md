# Commercial content review — 15 November 2026

## A. Pages and buying intent

| URL | Primary intent | Improvements |
|---|---|---|
| /custom-school-management-software-development | Commission school administrative software around institution-specific workflows | Explicit service H1, SIS/LMS distinction, module boundaries, guardian access, fee reconciliation, records migration, pilot examples, support and proposal inputs |
| /custom-software-development-services | Assess and commission business-specific software | Balanced build/configure/integrate decision, clearer service boundaries, requirements and acceptance criteria, realistic estimation and delivery, accurate product example |
| /api-development-services | Commission an API, backend or system connector | Contracts, data ownership, authorization, provider dependencies, failure handling, consumer compatibility, monitoring and distinct service deliverables |

## B. Files

Edited `src/pages/CustomSchoolManagementSoftwareDevelopment.jsx`, `src/pages/CustomSoftwareDevelopment.jsx` and `src/pages/ApiDevelopmentServices.jsx`. Added Service, WebPage and BreadcrumbList JSON-LD plus consistent social metadata to the school page. Its existing wrapper is now a semantic main element. Canonical URLs remain unchanged. No CSS or route changes.

Validation uses `scripts/validate-seo-batch.cjs --commercial-review` and `scripts/validate-commercial-html.cjs`, with evidence in `seo-commercial-browser-validation.json` and `seo-commercial-html-validation.json`. Earlier uncommitted blog work is preserved.

## C. Originality, flow and correctness

The school page now moves from suitability to module scope, discovery, design controls, migration/pilot and rollout responsibilities. It no longer claims an unsupported number of separate tools used by most schools or automatically included training.

The custom-software page no longer makes an absolute claim that buying a low-cost subscription always wins. It distinguishes a marketing site, browser product and an integration project. The QllmDocs example points to documented capabilities and asks buyers to verify event logging and retention instead of claiming every view/share is logged. Delivery descriptions now identify review decisions and dependencies rather than promising a particular schedule or savings.

API cards now describe different engineering decisions instead of repeating broad growth benefits. CORS is described as a browser access control rather than server-side authorization. TLS replaces outdated SSL terminology. SOAP is retained where consumers require it rather than portrayed as automatically obsolete. OpenAPI is correctly scoped to HTTP interfaces, and provider availability/account access remain external dependencies. Removed a duplicate icon property in one service-card object.

Copy was rewritten for the individual service intents. This is an editorial and local duplication review; no exhaustive external plagiarism scan or numerical originality guarantee is claimed. Existing attributed client reviews remain unchanged.

## D. Linking and technical references

School software links to the fee reconciliation guide, API service, requirements checklist and wider education service. Custom software links to the inventory migration guide and inventory project, product overview, technical debt guide and adjacent delivery services. API content links to the attendance/payroll integration guide and the appropriate web, mobile and developer engagement pages.

External references support specific technical discussions: [OWASP ASVS](https://asvs.owasp.org/), [OpenAPI specification](https://spec.openapis.org/oas/latest.html), [OWASP API Security Top 10](https://api-security.owasp.org/editions/2023/en/0x11-t10/). These are not claims of certification or guarantees of application security.

## E. Validation

Production compilation and focused prerender passed. All nine browser checks passed at 1440, 768 and 390 pixels: existing class/style attributes unchanged, unique title/description/canonical/H1, appropriate JSON-LD, no duplicate IDs, no duplicate FAQ microdata, relevant reference and internal links, no JavaScript errors, no broken main images and no horizontal page overflow in the isolated checks. Four supporting destinations rendered with the expected canonical. External resources are isolated during browser checks and their primary sources were researched separately.

Static HTML checks passed for all three pages, including Service and WebPage schema. No identical body paragraphs of 35 or more words were found across the three pages under the checker's documented exclusions. Existing client-review wording was preserved. The school page's mobile hero was visually inspected. No CSS files changed. `git diff --check` passed.

## F. Follow-up

No push or deployment. Deploy the complete production build through the normal workflow, then inspect preferred URLs and their rendered HTML. Refine content using actual sales questions and Search Console queries; indexing and ranking remain Google's decisions. Avoid adding generic FAQ or city pages merely to expand word count.
