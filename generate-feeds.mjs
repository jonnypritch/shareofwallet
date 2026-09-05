/**
 * generate-feeds.mjs
 *
 * Reads src/app/data/blogPosts.ts and generates:
 *   - public/rss.xml      (for LinkedIn/Zapier and any RSS reader)
 *   - public/sitemap.xml  (regenerated in full, so it can never go stale again)
 *
 * Run this as a "prebuild" step so Vercel always ships fresh feeds:
 *   package.json ->  "prebuild": "node generate-feeds.mjs"
 *
 * ASSUMPTIONS ABOUT blogPosts.ts — adjust the field names below (marked ⚠️)
 * if your actual interface differs. It expects each post to export at least:
 *   { slug, title, excerpt, date, author }
 * "date" should be an ISO string (e.g. "2026-09-04") or parseable by `new Date()`.
 *
 * OPTIONAL: add a `linkedinBlurb` field to any post to control exactly what
 * text appears in the RSS <description> (and therefore what Zapier posts to
 * LinkedIn), instead of falling back to the excerpt. Write it in your own
 * voice when you write the post — e.g.:
 *
 *   linkedinBlurb: "Here's our latest blog on basket analysis. Sounds
 *     complicated, but really it isn't — and at order level it can add
 *     40% more sales. Read more:",
 *
 * Posts without a linkedinBlurb just fall back to using the excerpt, so this
 * is fully optional per post.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = "https://palmai.io";
const BLOG_POSTS_PATH = path.join(__dirname, "src/app/data/blogPosts.ts");
const RSS_OUTPUT_PATH = path.join(__dirname, "public/rss.xml");
const SITEMAP_OUTPUT_PATH = path.join(__dirname, "public/sitemap.xml");

// Static routes that should always be in the sitemap alongside blog posts.
// ⚠️ Update this list if you add/rename pages.
const STATIC_ROUTES = [
  { path: "/", priority: "1.0" },
  { path: "/features", priority: "0.8" },
  { path: "/pricing", priority: "0.8" },
  { path: "/about", priority: "0.6" },
  { path: "/contact", priority: "0.6" },
  { path: "/solutions", priority: "0.7" },
  { path: "/solutions/electrical-wholesale", priority: "0.7" },
  { path: "/solutions/plumbers-merchant", priority: "0.7" },
  { path: "/solutions/tool-hire", priority: "0.7" },
  { path: "/solutions/foodservice-wholesale", priority: "0.7" },
  { path: "/blog", priority: "0.8" },
  { path: "/privacy-policy", priority: "0.3" },
];

function extractBlogPosts(tsSource) {
  // Pulls out each post object's slug/title/excerpt/date/author fields with a
  // permissive regex-based parse (no TS compiler dependency). ⚠️ If your
  // field names differ, adjust the capture groups below.
  const posts = [];
  const objectBlocks = tsSource.split(/\{\s*\n/).slice(1); // rough split per post object

  const fieldRegex = (field) =>
    new RegExp(`${field}\\s*:\\s*["'\`]([\\s\\S]*?)["'\`]\\s*,`, "m");

  for (const block of objectBlocks) {
    const slugMatch = block.match(fieldRegex("slug"));
    const titleMatch = block.match(fieldRegex("title"));
    const excerptMatch = block.match(fieldRegex("excerpt"));
    const dateMatch = block.match(fieldRegex("date"));
    const authorMatch = block.match(fieldRegex("author"));
    const linkedinBlurbMatch = block.match(fieldRegex("linkedinBlurb"));

    if (slugMatch && titleMatch) {
      posts.push({
        slug: slugMatch[1],
        title: titleMatch[1],
        excerpt: excerptMatch ? excerptMatch[1] : "",
        date: dateMatch ? dateMatch[1] : new Date().toISOString(),
        author: authorMatch ? authorMatch[1] : "Jonathan Pritchard",
        linkedinBlurb: linkedinBlurbMatch ? linkedinBlurbMatch[1] : "",
      });
    }
  }
  return posts;
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildRss(posts) {
  const items = posts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      // Prefer a hand-written LinkedIn caption over the raw excerpt, so the
      // auto-posted text sounds like Jon rather than boilerplate summary copy.
      const description = post.linkedinBlurb || post.excerpt;
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(description)}</description>
      <author>${escapeXml(post.author)}</author>
    </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Palm AI Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Insights for builders' merchants, plumbers' merchants, tool hire, electrical and foodservice wholesalers.</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>
`;
}

function buildSitemap(posts) {
  const staticUrls = STATIC_ROUTES.map(
    (r) => `
  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <priority>${r.priority}</priority>
  </url>`
  ).join("");

  const postUrls = posts
    .map(
      (post) => `
  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString().split("T")[0]}</lastmod>
    <priority>0.6</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticUrls}${postUrls}
</urlset>
`;
}

function main() {
  const tsSource = fs.readFileSync(BLOG_POSTS_PATH, "utf-8");
  const posts = extractBlogPosts(tsSource);

  if (posts.length === 0) {
    console.warn(
      "⚠️  No posts parsed from blogPosts.ts — check the field names in extractBlogPosts() match your actual interface."
    );
  }

  fs.writeFileSync(RSS_OUTPUT_PATH, buildRss(posts));
  fs.writeFileSync(SITEMAP_OUTPUT_PATH, buildSitemap(posts));

  console.log(`✅ Generated rss.xml and sitemap.xml with ${posts.length} blog post(s).`);
}

main();
