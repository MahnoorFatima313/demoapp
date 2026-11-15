const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const siteUrl = "https://qllmsoft.com";
const appSource = fs.readFileSync(path.join(projectRoot, "src", "App.js"), "utf8");
const blogSource = fs.readFileSync(
  path.join(projectRoot, "src", "data", "blogPostsData.js"),
  "utf8",
);
const sitemapPath = path.join(projectRoot, "public", "sitemap.xml");
const existingSitemap = fs.existsSync(sitemapPath)
  ? fs.readFileSync(sitemapPath, "utf8")
  : "";

const existingEntries = new Map();
for (const entry of existingSitemap.matchAll(/<url\b[^>]*>[\s\S]*?<\/url>/g)) {
  const location = entry[0].match(/<loc>\s*([^<]+)\s*<\/loc>/);
  if (location) {
    existingEntries.set(location[1].trim(), entry[0].trim());
  }
}

const routes = new Set();
const redirectRoutes = new Set([
  "/document-controller-software",
  "/qllmdocs",
  // Redirected by web.config: never list these in the sitemap
  "/document-control-software",
  "/outsource-mobile-app-development-to-pakistan",
  "/mobile-app-development-cost-in-pakistan",
  "/blog/outsource-software-development-to-pakistan",
  "/blog/ai-powered-software-solutions",
  "/blog/education-software-development-pakistan",
  "/blog/hire-angular-developers-pakistan",
  "/best-software-house-in-pakistan",
  "/website-development-cost-in-pakistan",
  "/top-software-house-in-pakistan",
  "/best-software-house-in-lalamusa",
  "/asp-net-core-development",
  "/csharp-desktop-application-development",
  "/scalable-ecommerce-development-for-smbs",
  "/resources",
]);
for (const match of appSource.matchAll(/<Route\b[^>]*\bpath="([^"]+)"/gs)) {
  const route = match[1];
  if (!route.includes(":") && !redirectRoutes.has(route)) {
    routes.add(route);
  }
}

for (const match of blogSource.matchAll(/^  "([^"]+)": \{$/gm)) {
  const route = `/blog/${match[1]}`;
  if (!redirectRoutes.has(route)) {
    routes.add(route);
  }
}

// Project detail routes are parameterized in App.js. Read their actual data
// rather than silently omitting them or guessing URLs from unrelated exports.
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const projectAst = parser.parse(
  fs.readFileSync(path.join(projectRoot, "src", "data", "mock.js"), "utf8"),
  { sourceType: "module", plugins: ["jsx"] },
);
traverse(projectAst, {
  VariableDeclarator({ node }) {
    if (node.id.name !== "projectsData") return;
    for (const project of node.init.elements) {
      const slug = project.properties.find(property => property.key.name === "slug")?.value.value;
      if (slug) routes.add(`/projects/${slug}`);
    }
  },
});

const entries = [...routes].map((route) => {
  const location = `${siteUrl}${route}`;
  return (
    existingEntries.get(location) ||
    [
      "  <url>",
      `    <loc>${location}</loc>`,
      "    <changefreq>monthly</changefreq>",
      "    <priority>0.7</priority>",
      "  </url>",
    ].join("\n")
  );
});

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries,
  "</urlset>",
  "",
].join("\n");

fs.writeFileSync(sitemapPath, sitemap);
console.log(`Generated sitemap with ${entries.length} URLs.`);
