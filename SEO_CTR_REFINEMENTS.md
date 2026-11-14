# Search snippet refinements

2026-11-14. Branch: `seo/core-services-batch-1`. Local changes only; not deployed.

## A. Pages improved

| Page URL | Primary intent | Target keyword | Content changes | Internal links added |
| --- | --- | --- | --- | --- |
| `/custom-software-development-services` | Commission business systems | custom software development services | Clearer description of manual-work replacement and project discussion; aligned social metadata | None |
| `/api-development-services` | Commission APIs/integrations | API development services | Description names CRM/ERP integrations and project planning; aligned social metadata | None |
| `/web-application-development-services` | Commission portals/SaaS | web application development | More specific title and description naming portals, SaaS, roles and integrations | None |
| `/website-development-services` | Commission business websites/storefronts | website development | Title distinguishes business/ecommerce sites; description invites a project discussion | None |

All paths use `https://qllmsoft.com`. No search-volume or CTR forecasts are assumed.

## B. Files modified

- `src/pages/CustomSoftwareDevelopment.jsx`
- `src/pages/ApiDevelopmentServices.jsx`
- `src/pages/WebAppDevelopment.jsx`
- `src/pages/WebsiteDevelopmentServices.jsx`
- `seo-audit-inventory.json`
- `SEO_CTR_REFINEMENTS.md`

Each page now defines `PAGE_TITLE` and `PAGE_DESCRIPTION` once and uses them for
its title, description, Open Graph and Twitter metadata. Canonical targets, visible
layout, schema types, URLs, styles and links were preserved.

## C. Content improvements

| Page | Preferred search title | Preferred description |
| --- | --- | --- |
| Custom software | Custom Software Development Services \| QllmSoft | Replace spreadsheet workarounds with custom business software, ERP modules and connected workflows. Discuss your requirements with QllmSoft. |
| API services | API Development & Integration Services \| QllmSoft | Connect your apps, CRM and ERP with custom REST, GraphQL or SOAP APIs. Plan integrations, backend upgrades and project scope with QllmSoft. |
| Web applications | Web Application Development: Portals & SaaS \| QllmSoft | Build a customer portal, internal web app or SaaS platform around your workflows. Discuss roles, integrations and a scoped project estimate. |
| Websites | Website Development for Business & eCommerce \| QllmSoft | Get a business website, ecommerce storefront or content-led site built around your goals. Discuss design, integrations and your project estimate. |

The first two existing titles were already direct and specific, so they were
retained. Descriptions provide concrete use cases and a relevant next step without
unverified discounts, response deadlines, prices, ratings or result guarantees.
The four titles are 47–55 characters; descriptions are 139–145 characters. These
are editorial lengths, not guaranteed display limits or a ranking requirement.

Google generates title links and snippets automatically and may choose different
text for different queries. These changes aim to improve relevance and clarity;
they do not establish that CTR has improved.

## D. Internal linking changes

None in this refinement. Existing links from the previous batches remain.

## E. Validation

Final JSX parsing and `git diff --check` passed. The source audit was regenerated.
Source metadata checks verify one page-level title and one description declaration,
with matching shared constants for social tags. This does not prove unique
rendered metadata: the shared duplicate-title/hydration problem recorded in the
earlier reports remains unresolved and must be fixed before deployment.

No CSS or visible layout changes were introduced; screenshots were not repeated
for these metadata-only edits. No standalone lint script exists. Production
compilation is recorded in the final batch status below.

Final status: `npm.cmd run build --ignore-scripts` compiled successfully. No
sitemap generation, prerender lifecycle run, push or deployment was performed.

## F. Next batch

Resolve and validate duplicate rendered titles before deploying. After an approved
release, record the deployment date and export a baseline from Search Console.
Compare the following 28 days with the preceding 28 days once sufficient
impressions are available. Segment by exact page, query, device and country;
separate branded/non-branded queries and account for changes in average position.
Evaluate qualified leads alongside CTR. This is an observational comparison,
not a controlled test or proof that metadata caused a change. Do not continually
rewrite titles while trying to measure this version.

## Official guidance

- [Google: title-link guidance](https://developers.google.com/search/docs/appearance/title-link)
- [Google: snippets and meta descriptions](https://developers.google.com/search/docs/appearance/snippet)
