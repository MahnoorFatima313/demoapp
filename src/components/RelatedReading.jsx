import React from "react";
import { Link } from "react-router-dom";
import "./RelatedReading.css";

const RELATED_READING = {
  "/custom-software-development-services": [
    {
      slug: "custom-software-build-vs-buy-guide",
      anchor: "Deciding whether to build, buy, configure, or integrate software",
      title: "Build vs. Buy Software: A Practical Decision Guide",
    },
    {
      slug: "when-internal-software-slows-teams-instead-of-helping",
      anchor: "Recognizing when internal software is slowing teams down",
      title: "When Internal Software Slows Teams Instead of Helping",
    },
  ],
  "/web-application-development-services": [
    {
      slug: "web-application-architecture-planning-guide",
      anchor: "Planning a web application's architecture and requirements",
      title: "Planning Web Application Architecture: A Practical Guide",
    },
    {
      slug: "how-to-avoid-technical-debt-in-custom-web-software",
      anchor: "Ways to prevent technical debt in custom web software",
      title: "How to Avoid Technical Debt in Custom Web Software",
    },
    {
      slug: "legacy-system-modernization-without-downtime-or-data-loss",
      anchor: "Planning a legacy-system modernization without downtime",
      title: "Legacy System Modernization Without Downtime or Data Loss",
    },
    {
      slug: "role-based-vs-policy-based-authorization-asp-net-core",
      anchor: "Choosing an authorization model for a web application",
      title: "Role-Based vs Policy-Based Authorization in ASP.NET Core",
    },
  ],
  "/api-development-services": [
    {
      slug: "rest-graphql-api-integration-guide",
      anchor: "Choosing REST or GraphQL and planning reliable integrations",
      title: "REST, GraphQL, and API Integration: A Practical Guide",
    },
    {
      slug: "role-based-access-problems-why-teams-break-systems",
      anchor: "Avoiding access-control problems in connected systems",
      title: "Role Based Access Problems? Why Teams Break Systems to Get Work Done",
    },
    {
      slug: "role-based-vs-policy-based-authorization-asp-net-core",
      anchor: "Role-based vs. policy-based authorization for APIs",
      title: "Role-Based vs Policy-Based Authorization in ASP.NET Core",
    },
  ],
  "/mobile-app-development": [
    {
      slug: "mobile-app-development-cost-in-pakistan",
      anchor: "How mobile app development costs are estimated",
      title: "Mobile App Development Cost in Pakistan",
    },
    {
      slug: "mobile-app-devsecops-in-2026",
      anchor: "A practical guide to mobile app DevSecOps",
      title: "Mobile App DevSecOps in 2026",
    },
    {
      slug: "outsource-mobile-app-development-to-pakistan",
      anchor: "What to consider when outsourcing mobile app development",
      title: "Outsource Mobile App Development to Pakistan",
    },
  ],
  "/hire-dotnet-developers-pakistan": [
    {
      slug: "hiring-dotnet-developers-guide",
      anchor: "A practical guide to hiring .NET developers",
      title: "Hire .NET Developers in Pakistan: Complete Hiring Guide",
    },
    {
      slug: "csharp-desktop-application-development",
      anchor: "How .NET desktop application development is approached",
      title: "C# Desktop Application Development",
    },
    {
      slug: "role-based-vs-policy-based-authorization-asp-net-core",
      anchor: "Authorization choices for ASP.NET Core applications",
      title: "Role-Based vs Policy-Based Authorization in ASP.NET Core",
    },
  ],
  "/ai-powered-software-solutions": [
    {
      slug: "ai-powered-software-solutions",
      anchor: "Planning an AI implementation from use case through deployment",
      title: "Planning an AI Implementation: A Practical Guide",
    },
    {
      slug: "what-is-natural-language-search-in-document-management",
      anchor: "How natural-language search works in document management",
      title: "What Is Natural Language Search in Document Management?",
    },
    {
      slug: "how-to-organize-unorganized-documents-in-cloud-storage",
      anchor: "Practical ways to organize documents in cloud storage",
      title: "How to Organize Unorganized Documents in Cloud Storage",
    },
    {
      slug: "how-to-export-metadata-from-pdf-to-excel-automatically",
      anchor: "Automating metadata extraction from PDFs",
      title: "How to Export Metadata from PDF to Excel Automatically",
    },
  ],
  "/education-software-development-pakistan": [
    {
      slug: "education-software-development-pakistan",
      anchor: "Planning LMS and SIS workflows, integrations, and rollout",
      title: "Planning an LMS and SIS: A Practical Guide for Schools",
    },
    {
      slug: "lms-sis-integration-migration-guide",
      anchor: "Planning LMS/SIS data integration, migration, and rollout",
      title: "Planning LMS and SIS Integrations: A Data and Rollout Guide",
    },
  ],
};

const ARTICLE_SERVICE_LINKS = {
  "when-internal-software-slows-teams-instead-of-helping": {
    path: "/custom-software-development-services",
    label: "custom software development services for workflow-specific systems",
  },
  "role-based-access-problems-why-teams-break-systems": {
    path: "/api-development-services",
    label: "API development services for secure application integrations",
  },
  "how-to-avoid-technical-debt-in-custom-web-software": {
    relatedServices: [
      {
        path: "/custom-software-development-services",
        label: "custom software development services for maintainable business systems",
      },
      {
        path: "/web-application-development-services",
        label: "web application development services for maintainable web systems",
      },
    ],
  },
  "legacy-system-modernization-without-downtime-or-data-loss": {
    path: "/web-application-development-services",
    label: "web application development services for modernizing business systems",
  },
  "role-based-vs-policy-based-authorization-asp-net-core": {
    relatedServices: [
      {
        path: "/api-development-services",
        label: "API development services for secure application integrations",
      },
      {
        path: "/web-application-development-services",
        label: "web application development services with role- and policy-based access",
      },
    ],
  },
  "mobile-app-development-cost-in-pakistan": {
    path: "/mobile-app-development",
    label: "mobile app development services for your project",
  },
  "mobile-app-devsecops-in-2026": {
    path: "/mobile-app-development",
    label: "mobile app development services with security built into delivery",
  },
  "outsource-mobile-app-development-to-pakistan": {
    path: "/mobile-app-development",
    label: "mobile app development services for a dedicated project team",
  },
  "hiring-dotnet-developers-guide": {
    path: "/hire-dotnet-developers-pakistan",
    label: "hire .NET developers in Pakistan",
  },
  "csharp-desktop-application-development": {
    path: "/hire-dotnet-developers-pakistan",
    label: "hire .NET developers in Pakistan for desktop application projects",
  },
  "what-is-natural-language-search-in-document-management": {
    path: "/ai-powered-software-solutions",
    label: "custom AI-powered software solutions",
  },
  "how-to-organize-unorganized-documents-in-cloud-storage": {
    path: "/ai-powered-software-solutions",
    label: "AI-powered software solutions for document workflows",
  },
  "how-to-export-metadata-from-pdf-to-excel-automatically": {
    path: "/ai-powered-software-solutions",
    label: "AI-powered software solutions for document data extraction",
  },
  "scalable-ecommerce-development-for-smbs": {
    path: "/ecommerce-development-services",
    label: "custom e-commerce development services for growing businesses",
  },
  "shopify-isnt-scaling-what-companies-do-next": {
    path: "/ecommerce-development-services",
    label: "custom e-commerce development services when Shopify reaches its limits",
  },
  "custom-vs-saas-ecommerce-for-growing-smbs": {
    path: "/ecommerce-development-services",
    label: "custom e-commerce development services for businesses comparing platforms",
  },
};

export function RelatedReading({ servicePath }) {
  const articles = RELATED_READING[servicePath] || [];
  if (!articles.length) return null;

  return (
    <section className="related-reading" aria-labelledby="related-reading-title">
      <div className="container">
        <h2 id="related-reading-title">Further reading</h2>
        <ul>
          {articles.map(({ slug, anchor, title }) => (
            <li key={slug}>
              <Link to={`/blog/${slug}`}>{anchor}</Link>
              <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ArticleServiceLink({ slug }) {
  const service = ARTICLE_SERVICE_LINKS[slug];
  if (!service) return null;
  const relatedServices = service.relatedServices || [service];

  return (
    <aside className="article-service-link">
      {relatedServices.map(({ path, label }) => (
        <p key={path}>
          For a project-specific approach, explore our{" "}
          <Link to={path}>{label}</Link>.
        </p>
      ))}
    </aside>
  );
}
