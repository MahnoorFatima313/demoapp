# Commercial content batch 2

Date: 2026-11-14. Branch: `seo/core-services-batch-1`. Batch 1 changes remain intact
and uncommitted. No push, deployment, URL, canonical target, redirect, robots,
sitemap, dependency, CSS, or layout changes.

## A. Pages improved

| Page URL | Primary intent | Target keyword | Content changes | Internal links added |
| --- | --- | --- | --- | --- |
| https://qllmsoft.com/web-application-development-services | Commission browser-based business software | web application development services | Distinct title and opening, workflow requirements, cost and schedule factors, maintenance responsibilities, realistic performance guidance, illustrative modernization plan | ASP.NET service link; repaired architecture article destination |
| https://qllmsoft.com/website-development-services | Commission a public-facing business site | website development services | Clearer title/H1, scope-based scheduling, platform trade-offs, technical SEO limits, realistic redesign guidance | Corrected application-service destination and anchor in hero |

Keywords are inferred from commercial intent, not verified volume or Search
Console metrics. Both URLs remain independent. The application page sells the
complete system; ASP.NET implementation remains a specialist service, and the
website page focuses on marketing sites, content and storefronts.

## B. Files modified

- `src/pages/WebAppDevelopment.jsx`
- `src/pages/WebsiteDevelopmentServices.jsx`
- `src/components/RelatedReading.jsx`: only the web application's architecture-guide slug in this batch.
- `scripts/validate-seo-batch.cjs`: added `--batch-2`, disabled browser caching, and
  stubbed remote stylesheet requests so a blocked external CSS import does not
  incorrectly fail a local stylesheet chunk. Remote fonts and other external
  resources are not part of this visual check.
- `seo-audit-inventory.json`: regenerated source inventory.
- `SEO_BATCH_2_REPORT.md`: this report.

## C. Content improvements

The application page repeated ASP.NET service positioning rather than explaining
how buyers should scope a complete product. It now introduces users, roles,
workflow rules, data ownership, integrations and acceptance criteria. Buyer FAQs
cover project cost drivers, review dependencies, release planning, backups,
rollback and maintenance ownership instead of generic price ranges and deadlines.

Removed unsupported framework-speed rankings, a requests-per-second figure,
agency cost-comparison percentages, zero-loss migration promises, and measured
case-study results for which no evidence was supplied. The modernization example
is labeled illustrative, with testable goals rather than claimed client outcomes.
The incorrect combined .NET 9/10 lifecycle statement was replaced with guidance
to check support dates and plan patching. Existing technology capabilities were
retained without claiming support for new frameworks or versions.

The website page now explains timeline dependencies and platform trade-offs.
Redesign copy no longer guarantees preserved traffic or rankings, and the SEO FAQ
distinguishes implementation work from indexing or ranking outcomes. Ecommerce
scope explains inventory sync and exception handling rather than promising
automatic real-time updates. Existing service sections and useful content remain.

This is a targeted improvement, not verification of every business claim. Existing
marketplace scores, testimonials, project counts, contractual terms and some
promotional statements remain owner-supplied information requiring evidence.
Article content and the recent ASP.NET service content were not rewritten.

## D. Internal linking changes

| Source URL | Anchor text | Destination URL | Reason |
| --- | --- | --- | --- |
| `/web-application-development-services` | ASP.NET Core development services | `/asp-net-core-development-services` | Separate complete application delivery from framework-specific implementation. |
| `/web-application-development-services` | Planning a web application's architecture and requirements | `/blog/web-application-planning-and-architecture-guide` | Correct the mismatched slug to the existing published article. |
| `/website-development-services` | Web Application Development Services | `/web-application-development-services` | Direct the hero's application/SaaS inquiry to the relevant application service. |

All paths use `https://qllmsoft.com`. Destinations were checked against source
routes/article data and the inventoried redirect rules. No redirect was created.
The source inventory still records unrelated missing pricing/team/education
destinations for later page-specific batches.

## E. Validation

- Production compilation: `npm.cmd run build --ignore-scripts` passed. Sitemap
  regeneration and react-snap lifecycle scripts were skipped deliberately.
- JSX parsing and `git diff --check`: passed.
- Source presentation check: both components' existing class, inline style, SVG
  viewBox, path and point attribute sequences match `HEAD`.
- Standalone lint: no lint command is defined; full lint coverage is not claimed.
- Browser command: `node scripts/validate-seo-batch.cjs --batch-2`.
  Results and screenshots are written to `build/seo-validation-batch2/`.
  Both pages rendered at 1440, 768 and 390 pixels with one H1, one description,
  the intended canonical, parseable Service JSON-LD, no horizontal overflow and no
  JavaScript errors. Both tested supporting destinations rendered their intended
  H1 and canonical without a redirect. No broken local main-content images were
  reported under this test's external-resource restrictions.
  The validator correctly exited nonzero: two title elements remain on each page,
  including the generic fallback title. This is unresolved shared metadata work.
  The inspected mobile application hero also has a low-contrast secondary CTA in
  this isolated rendering; compare with the baseline before any design correction.
- Before/after pixel equivalence is not claimed: no before screenshots were
  captured, and the local browser check stubs remote CSS and uses fallback fonts.
- This batch does not repair or clear the prerender/hydration metadata blocker
  documented in batch 1. Client-rendered success alone is not deployment approval.

## F. Next batch

Prioritize `/mobile-app-development` and `/ecommerce-development-services` next:
clarify platform and operational scope, explain integration/testing requirements,
and replace unsupported claims while retaining existing layouts. The shared
metadata/hydration issue still needs a separate focused investigation before
deployment. Continue to preserve indexed URLs and existing redirect decisions.

## Sources checked

- [Microsoft's current .NET support policy](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core)
- [Google's site-move guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)

The copy uses maintenance planning and cautious migration guidance rather than
hardcoded support dates or promises of unchanged search visibility.
