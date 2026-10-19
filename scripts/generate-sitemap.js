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
const redirectRoutes = new Set(["/qllmdocs"]);
for (const match of appSource.matchAll(/<Route\b[^>]*\bpath="([^"]+)"/gs)) {
  const route = match[1];
  if (!route.includes(":") && !redirectRoutes.has(route)) {
    routes.add(route);
  }
}

for (const match of blogSource.matchAll(/^  "([^"]+)": \{$/gm)) {
  routes.add(`/blog/${match[1]}`);
}

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
