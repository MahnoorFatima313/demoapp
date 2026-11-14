# QllmSoft SEO audit and commercial content batch 1

Date: 2026-11-14 (Asia/Karachi). Workspace: `D:/QllmSoft-Website/demoapp` only.

Baseline: clean `main` at `cb86a73`. Working branch: `seo/core-services-batch-1`.
No push, merge, deployment, dependency installation, redirect, robots, sitemap,
canonical-target, or CSS changes were made. Changes remain uncommitted for review.
The existing homepage, articles, and ASP.NET service copy were preserved.

## Prioritized audit

| Priority | Finding and evidence | Action |
| --- | --- | --- |
| 1 | The API service title and opening copy targeted broad web development rather than API buying intent. Its introduction, comparison and architecture example contained unsupported performance promises. | Corrected in this batch. |
| 1 | Custom software cost copy contradicted the linked calculator and called it an engagement guide. Both batch pages linked to missing guides through related reading. | Corrected copy, anchors and the two affected related-reading entries. |
| 1 before deployment | The two-page react-snap run generated substantive HTML, but saved HTML contains a service title and the generic fallback title. Hydrated prerendered output also duplicated metadata. Client-only output passed before prerendering. | Deployment blocker for a focused metadata/hydration investigation. No shared entrypoint or prerender configuration changes in this batch. |
| 2 | `/web-application-development-services` is heavily ASP.NET-specific, overlapping `/asp-net-core-development-services`. The ASP.NET service has two links to nonexistent `/pricing-and-engagement-models`. | Review these two pages next. Preserve both URLs and existing ASP.NET content; fix intent and link accuracy. |
| 2 | Related reading on the web application page references missing `web-application-architecture-planning-guide`; the actual published slug is `web-application-planning-and-architecture-guide`. Education links to missing `lms-sis-integration-migration-guide`. Outsource web links to missing `/remote-dedicated-development-teams`. | Repair in the batches covering those source pages. Do not create duplicate destination pages. |
| 2 | Source inventory has 38 article entries; 11 non-redirected articles are absent from the explicit react-snap include list. Crawling is enabled, so omission from that list alone does not prove missing HTML. | Compare every intended article with a full build's rendered output before changing publishing automation. |
| 2 | Sitemap has 69 URLs. All non-redirected article entries are represented; no listed URL matched the inventoried redirect-source rules. | Preserve sitemap; validate actual IIS HTTP responses before changes. |
| 3 | AI and education related-reading lists link to article paths redirected by IIS to commercial pages. Shared service cards also contain legacy URLs. | Review shared linking data in a separate controlled batch. |
| 3 | Shared schema and page copy contain business metrics, review claims, pricing and support promises that cannot be independently verified from code. | Ask the business owner for evidence before strengthening or expanding these claims. No fabricated replacements. |
| 3 | Some source heading sequences skip levels. Changing heading elements may affect existing element-based styles. | Assess styling and accessibility together before changing these elements. |

The public homepage and both commercial URLs returned a JavaScript-only shell through
the web fetch tool. These fetches can be cached and do not establish what Googlebot
receives. Confirm deployed files and use Search Console's live URL inspection.
No Search Console export was identified locally. Keyword choices below are inferred
from page purpose, not verified search volumes, rankings, or traffic.

## Architecture and inventory

React 19, React Router 7, CRA/react-scripts 5 through CRACO 7, react-helmet-async 3,
react-snap 1.23, and IIS `public/web.config`. `src/index.js` selects hydration when
HTML already exists. `src/App.js` defines 42 routes, including parameterized
article, author, and project routes and four React navigation aliases.

`seo-audit-inventory.json` records every route's component, classification, title,
description, H1, canonical source, direct internal links, and duplicate IDs, plus
38 article records and the active IIS rewrite/redirect/410 rule inventory.
Expression-based metadata and dynamic destinations need rendered validation;
source-size counts are not visible content word counts or content quality scores.

Metadata is implemented both with page-local Helmet and shared `SEO.jsx`.
Organization facts/schema live in `src/data/schema.js`; article data and schema
live in `src/data/blogPostsData.js`, with authors in `authorsData.js` and rendering
in `BlogArticle.jsx`. Shared linking uses `CoreServiceLinks`, `RelatedSolutions`,
`ServicesData.js`, and `RelatedReading`. The sitemap generator discovers routes
and articles using regex and a hardcoded redirect exclusion list. `prebuild`
runs that generator; `postbuild` runs react-snap with 57 explicit includes and
link crawling. These settings and IIS rules were inspected and preserved.

## Commercial intent map

All keywords and overlap assessments are editorial hypotheses. Keep these URLs
independent while checking Search Console page/query data before consolidation.

| Route | Primary buyer intent / proposed keyword | Coverage and relationship |
| --- | --- | --- |
| `/custom-software-development-services` | Commission workflow-specific systems / custom software development services | Business systems hub; roles, workflows, integration, delivery and maintenance. |
| `/api-development-services` | Commission backend interfaces or integrations / API development services | Standalone APIs and integration scope; links to complete web application delivery. |
| `/web-application-development-services` | Commission browser-based business software / web application development services | Separate product scope from framework choice; currently overlaps ASP.NET content. |
| `/website-development-services` | Commission a business website / website development services | Separate public website and CMS intent from operational applications. |
| `/asp-net-core-development-services` | Commission .NET implementation or migration / ASP.NET Core development services | Framework-specific scope; preserve recent content and repair nonexistent pricing links. |
| `/ecommerce-development-services` | Commission a custom store / ecommerce development services | Checkout, commerce operations and ERP/WMS integration; separate from generic websites. |
| `/mobile-app-development` | Commission an app / mobile app development services | Mobile delivery, platform choices, release and maintenance. |
| `/ai-powered-software-solutions` | Add AI to business workflows / AI software development services | Scope around data and workflows; separate from QllmDocs product buying intent. |
| `/legacy-system-modernization-services` | Improve an existing system / legacy modernization services | Existing-system assessment, migration, rollout and continuity planning. |
| `/wordpress-development-services` | Commission WordPress work / WordPress development services | CMS-specific implementation. |
| `/custom-business-automation-solutions` | Automate business processes / business automation solutions | Workflow outcomes; link to API delivery when integrations are required. |
| `/custom-school-management-software-development` | Commission a school platform / school management software development | Narrow school operations scope versus broader education platforms. |
| `/hire-dotnet-developers-pakistan` | Hire engineering capacity / hire .NET developers in Pakistan | Team engagement rather than complete fixed-scope software delivery. |
| `/hire-react-developers-pakistan` | Hire frontend capacity / hire React developers in Pakistan | React team selection and responsibilities. |
| `/hire-angular-developers-pakistan` | Hire frontend capacity / hire Angular developers in Pakistan | Angular team selection and responsibilities. |
| `/outsource-software-development-to-pakistan` | Engage a delivery partner / outsource software development to Pakistan | Delivery ownership, handoffs, scope and communication. |
| `/outsource-web-development-to-pakistan` | Outsource web delivery / outsource web development to Pakistan | Differentiate website/app delivery from broader outsourcing. |
| `/outsource-api-development-to-pakistan` | Outsource backend integration / outsource API development | Engagement-specific counterpart to the API technical service page. |
| `/healthcare-software-development-pakistan` | Commission healthcare software / healthcare software development | Industry requirements; verify compliance claims. |
| `/education-software-development-pakistan` | Commission education platforms / education software development | LMS and education-system scope; compare with the narrower school page. |
| `/real-estate-software-development` | Commission property operations software / real estate software development | Industry workflows and integrations. |
| `/finance-management-system` | Evaluate financial operations software / finance management system | Clarify product versus bespoke-service buying intent before changing content. |
| `/digital-marketing-services` | Commission marketing support / digital marketing services | Distinct offering; no software keyword expansion. |
| `/ai-document-management-software` | Evaluate QllmDocs / AI document management software | Product page; keep distinct from custom AI implementation services. |

Commercial conversions should lead to the existing contact consultation flow.
Supporting calculator and requirements-checklist pages help qualify a brief;
published educational articles should answer informational questions first.

## Topic clusters and overlap review

| Hub | Existing supporting subjects | Review need |
| --- | --- | --- |
| Custom software | Internal workflow problems, technical debt, custom versus SaaS ecommerce, software buying guidance | Avoid commercial article titles competing with the main service. |
| Web applications | Actual `web-application-planning-and-architecture-guide`, technical debt, legacy migration | Repair the mismatched related-reading slug; distinguish apps from websites. |
| ASP.NET/backend | ASP.NET guide, authorization comparison, C# desktop, hiring guide, .NET AOT | Keep framework education separate from hiring and delivery service intent. |
| API services | Authorization/access problems, ASP.NET backend context, API buying guidance | Missing generic integration guide must not be linked as if published. |
| Ecommerce | Scaling, Shopify constraints, custom versus SaaS | Keep operational comparisons linked to the existing commerce service. |
| AI/automation | Natural-language search, document organization, PDF metadata, AI project scoping | Keep QllmDocs product capabilities separate from commissioned software. |

No merge or redirect is proposed in this batch. To decide whether overlap needs
consolidation, compare 3–6 months of query-to-page impressions, clicks, CTR and
position, conversion quality, backlinks and indexing/canonical evidence. First
try distinct titles, scope and links while preserving both URLs.

## A. Pages improved

| Page URL | Primary intent | Target keyword | Content changes | Internal links added |
| --- | --- | --- | --- | --- |
| `https://qllmsoft.com/custom-software-development-services` | Commission custom business software | custom software development services | More explicit title/H1, scope and cost factors, calculator guidance and buying FAQ | API integration link; replaced missing article link in body and related reading |
| `https://qllmsoft.com/api-development-services` | Commission APIs and integrations | API development services | Distinct metadata/H1, direct definition, scoping inputs, maintenance responsibilities, REST/GraphQL trade-offs, qualified performance copy | Contextual web application link; corrected web-platform destination and hiring anchor; repaired related reading |

## B. Files modified

- `src/pages/CustomSoftwareDevelopment.jsx`
- `src/pages/ApiDevelopmentServices.jsx`
- `src/components/RelatedReading.jsx` (only the two batch pages' reading entries)
- `scripts/audit-seo.cjs` (new, read-only source inventory)
- `scripts/validate-seo-batch.cjs` (new, local browser and presentation checks)
- `seo-audit-inventory.json` (generated audit artifact)
- `SEO_BATCH_1_REPORT.md` (this report)

## C. Content improvements

Existing useful service sections, product details, process, CTAs and testimonials
were retained. The API page no longer opens with zero-downtime promises; GraphQL
is explained through field selection and trade-offs rather than an invented 60%
improvement. The unsupported 80% database reduction and seamless millions-of-users
claim were replaced with caching, capacity planning, provider limits and testing.
The architecture walkthrough is explicitly illustrative and its results strip is
now design goals. Existing business metrics remain owner-supplied claims requiring
verification, not independently validated results.

The custom software page now identifies migration, access to third-party systems,
stakeholder review, acceptance criteria and support arrangements as scoping inputs.
Its cost calculator link accurately describes a planning estimate. Its WebPage
modification date records this actual editing date; article publication dates and
authorship were not changed. The API duplicate section ID was disambiguated.
New copy avoids invented results, services, deadlines and certifications.

## D. Internal linking changes

Source/destination paths below are on `https://qllmsoft.com`.

| Source URL | Anchor text | Destination URL | Reason |
| --- | --- | --- | --- |
| `/custom-software-development-services` | API development and integration services | `/api-development-services` | Explain CRM/ERP data exchange requirements. |
| `/custom-software-development-services` | comparison of custom and SaaS ecommerce | `/blog/custom-vs-saas-ecommerce-for-growing-smbs` | Replace a nonexistent generic guide with a real, explicitly ecommerce-specific comparison. |
| `/custom-software-development-services` | Comparing custom software and SaaS for ecommerce operations | `/blog/custom-vs-saas-ecommerce-for-growing-smbs` | Repair the corresponding related-reading entry. |
| `/custom-software-development-services` | software development cost calculator | `/software-development-cost-calculator` | Correct the old engagement-guide anchor; destination unchanged. |
| `/api-development-services` | web application development services | `/web-application-development-services` | Offer complete application delivery alongside standalone API work. |
| `/api-development-services` | web platforms | `/web-application-development-services` | Replace a website-service destination with the intended application service. |
| `/api-development-services` | dedicated .NET developers | `/hire-dotnet-developers-pakistan` | Accurately describe the existing hiring destination. |
| `/api-development-services` | Understanding ASP.NET Core for backend applications | `/blog/asp-net-core-development` | Replace a missing API guide with existing backend education. |

Existing valid requirements-checklist, technical-debt article and contact links
remain. The source audit checks literal links and related-reading data against
actual routes/articles and active IIS redirect rules. Other dynamic shared
navigation and live production response codes require separate validation.

## E. Validation

- Production compilation: `npm.cmd run build --ignore-scripts` passed on final page source.
  Lifecycle scripts were deliberately skipped to preserve the sitemap; react-snap
  was then run separately for just the two edited routes with crawling disabled.
- Prerender generation: both routes produced nonempty HTML with their H1 and service
  content. This was a focused run, not certification of full-site prerender coverage.
- Metadata: client-only browser checks passed. Saved prerendered HTML contains two
  titles, and subsequent hydration duplicated metadata. **Unresolved; do not deploy
  this local build.** Detailed hydrated results are in `build/seo-validation/results.json`.
  The final hydrated run recorded three titles and two descriptions per edited
  page, plus React error #418 (hydration mismatch). Static HTML observations are
  separately retained in `build/seo-validation/prerender-html.json`.
- Destination validation: both replacement article URLs rendered their actual H1
  and expected canonical, and the API destination rendered without redirecting.
  The web application destination hit a CSS chunk-load error and H1 timeout in
  this local run, although the named CSS file exists. Treat its rendered check as
  unresolved; route/source existence alone is not a passing browser check.
- Browser checks: desktop 1440, tablet 768 and mobile 390 pixels; screenshots saved
  under `build/seo-validation/`. No before-screenshot baseline was available, so
  pixel equivalence is not claimed. Review screenshots alongside the baseline site.
  The inspected mobile custom-software hero shows its eyebrow partly behind the
  fixed header; header and spacing styles were untouched. Compare with the baseline
  and approve any required design correction separately.
- Presentation: source AST comparisons against `HEAD` confirm existing class and
  inline-style attribute sequences are unchanged in both page components. No CSS files changed.
- Images: external requests were intentionally blocked in local browser runs; an
  absolute production API illustration was blocked at desktop width. This does not
  prove that production asset is missing. Other network-dependent UI is outside
  this test's scope.
- Lint: no standalone lint script is defined. CRACO production compilation passed;
  JSX parsing and `git diff --check` also passed. No claim of full lint coverage.
- Existing skipped heading levels and legacy/shared links remain follow-up items.
- No indexing, ranking, conversion lift or AI citation outcome is claimed.

Repeat source audit: `node scripts/audit-seo.cjs`.
Repeat browser checks after compiling: `node scripts/validate-seo-batch.cjs`.
The browser validator intentionally exits nonzero if duplicate rendered metadata
is present, while retaining screenshots and detailed observations.

## F. Next batch

Review `/web-application-development-services` and
`/asp-net-core-development-services` together: distinguish complete application
delivery from framework-specific services, repair existing missing links, and
preserve the recent ASP.NET work. Investigate the metadata/hydration blocker before
deploying any batch. Keep website and ecommerce services as the following small
commercial batch rather than expanding this change across the whole site.

## Deployment and rollback

Review the diff against `cb86a73` and retain this branch. Resolve duplicate titles
and hydrated metadata; run a full build with sitemap changes reviewed, then inspect
every intended prerendered route. Check the two edited pages on all three viewport
sizes, open FAQs, test contact links and verify external images. Validate actual
IIS statuses, canonical URLs, JSON-LD and Search Console live output. Deployment
and pushing require the owner's explicit approval. To roll back later, revert the
reviewed batch commit; while uncommitted, selectively restore only the reviewed
batch files after preserving any subsequent work. No rollback command was run.

## Primary documentation consulted

- [Google: helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google: structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [GraphQL: field selection](https://graphql.org/learn/queries/)
- [GraphQL: security and demand controls](https://graphql.org/learn/security/)
- [React: hydration mismatch error #418](https://react.dev/errors/418)

These support useful buyer information, accurate markup and realistic GraphQL
trade-offs. Google states that AI features require the usual SEO fundamentals;
no special AI schema or guaranteed inclusion is offered by this batch.
