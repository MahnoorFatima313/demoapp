# Search Console indexing repair — 15 November 2026

## A. Pages and intent

| Page | Intent / primary topic | Changes | Contextual links |
|---|---|---|---|
| /hire-angular-developers-pakistan | Commercial: hire Angular developers in Pakistan | Specific hiring responsibilities, onboarding dependencies, balanced engagement comparison, AngularJS distinction, accurate FAQs and metadata | Web applications, APIs, outsourcing, logistics project |
| /legacy-system-modernization-services | Commercial: legacy system modernization | Assessment, retain/refactor/replace decisions, pilot planning, migration validation, rollback and realistic estimating; revised metadata and FAQs | ASP.NET Core service, migration planning guide |
| /projects/inventory-management-system | Portfolio evaluation: inventory management system | Product records and stock workflows, scoping and operating checks; removed unsupported catalog-size claim | Logistics project, custom software, APIs |
| /projects/logistics-fleet-management-system | Portfolio evaluation: logistics software | Shipment, warehouse and manifest workflows; distinguishes planning considerations from documented implementation | Inventory project, web applications, APIs |

## B. Files

Content: `src/pages/HireAngularDevelopers.jsx`, `src/pages/LegacyModernization.jsx`, `src/data/mock.js`, `src/pages/ProjectDetails.jsx`.

Publishing: `scripts/generate-sitemap.js`, `public/sitemap.xml`, `package.json`. All seven valid project records are now included in the sitemap and explicit prerender list. Sitemap entries increased from 69 to 76; existing dates were preserved and no invented project dates added.

Evidence/checks: `scripts/audit-indexing-urls.cjs`, `scripts/validate-seo-batch.cjs`, `scripts/validate-indexing-html.cjs`, `seo-indexing-live-audit.json`, `seo-indexing-validation.json`, `seo-indexing-prerender-validation.json`. Following user approval, the six rules recorded in `seo-proposed-iis-rules.xml` are now applied in local `public/web.config`; they are not deployed.

## C. Content quality

Replaced exaggerated cost, speed and outcome claims with concrete decision criteria. Angular testimonials now use existing attributed review records without fabricated Angular-specific quotations. Removed duplicate FAQ microdata while retaining the single JSON-LD representation. Project additions distinguish the existing feature record from considerations for a future implementation; no invented client results, GPS or automated-routing capability added. Existing styles and presentation attributes remain intact. This is an editorial originality review, not a claim of exhaustive external plagiarism detection.

Technical references: [Angular release policy](https://angular.dev/reference/releases), [Microsoft .NET porting guidance](https://learn.microsoft.com/en-us/dotnet/core/porting/).

## D. Internal linking and URL decisions

New contextual links connect the commercial pages to relevant services, supporting reading and project evidence. Case studies link to one another and to appropriate delivery services. Existing canonical targets and valid redirects remain unchanged.

The live audit covers all 34 URLs supplied (the report says 21 redirect examples, but only 20 were supplied). Preferred pages currently return a small React shell without route-specific canonical or H1 in the initial HTTP HTML. Google can execute JavaScript, so this observation alone does not prove the cause of exclusion. The updated local build now emits meaningful HTML for the four priority pages. Deploy the complete generated build with its IIS configuration, not only the JavaScript assets or public shell.

Valid old-URL 301s are expected exclusions; request indexing for the final preferred URL, not the redirect source. The retired Pakistani-businesses article returns 410 and remains retired. The outsourcing web-development page is live and remains self-canonical. The missing Sticker Smash project currently resolves through client routing to Projects; no replacement project was invented. Its historical intent should be verified before introducing a permanent server redirect.

[Google canonical consolidation guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) explains how redirects, canonical annotations and sitemap signals work together. None guarantees inclusion.

## E. Validation

- Production compilation completed; focused prerender completed successfully for all four pages.
- Twelve browser checks: four pages at 1440, 768 and 390 pixels. All have one title, description, canonical and H1; valid appropriate JSON-LD; no duplicate IDs, duplicate FAQ microdata, JavaScript errors, broken main images or horizontal overflow in the isolated browser checks.
- Static HTML checks passed for all four pages, including canonical and sitemap membership. Main content lengths exceed 2,000 characters for both projects and 13,000 for both services.
- Existing presentation attributes retained; no CSS files changed. Browser checks stub external styles and block remote resources, so they do not certify third-party availability.
- XML validation checks that the six approved rules appear exactly once in local `public/web.config`, preserve their exact matches/actions, and follow the canonical-domain rule. Live IIS integration requires deployment testing.
- `git diff --check` passed. No commit, push or deployment performed.

## F. Approved rules and deployment

The user approved these changes in the subsequent turn. Public response headers on 15 November identify Microsoft-IIS/10.0, ASP.NET and PleskWin, confirming that the repository's IIS configuration matches the observed server. The hosting provider itself remains unverified. The exact rules recorded in `seo-proposed-iis-rules.xml` are now applied locally:

| Source | Approved response |
|---|---|
| /contact-us | 301 to /contact |
| /digital-marketing-seo-services | 301 to /digital-marketing-services |
| /index | 301 to / |
| /qllmdocs | 301 to /ai-document-management-software |
| /custom- | 404: no verified destination |
| /search, including the placeholder query | 404: no search page is implemented |

Approved rules were inserted after the canonical-domain rule and before trailing-slash normalization. Risk: permanent redirects are cached; a future search feature must replace the search 404 rule. Rollback: remove these six added rules and restore the prior configuration; cached redirects may persist. No robots/noindex changes made.

The second editorial pass removed remaining response-time, included-support and automatic savings promises, improved modernization decision criteria and added relevant official references on all four pages. External references explain Angular support, .NET upgrades, transaction handling and HTTP integration planning; they do not substantiate invented project outcomes. Internal anchors connect to services and supporting case studies in context. No numerical quality score or exhaustive external plagiarism certification is claimed.

After deployment, inspect raw HTTP HTML and response chains for the four preferred pages and approved aliases. Confirm self-canonicals and no accidental noindex, submit the sitemap, then run Search Console live inspection/request indexing for preferred 200 URLs. Revalidate the duplicate issue only after the approved server changes are live. Google controls recrawl, canonical selection and indexing; no indexing, ranking or CTR guarantee is made.

Next batch: assess the independent outsourcing web-development page and preferred blog destinations for overlapping intent after these technical signals are deployed. Preserve retired articles and established consolidation decisions.
