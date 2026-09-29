/**
 * generate-feeds.mjs
 *
 * Reads src/app/data/blogPosts.ts and generates:
 *   - public/rss.xml      (for LinkedIn/Zapier and any RSS reader)
 *   - public/sitemap.xml  (regenerated in full, so it can never go stale again)
 *
 * Run this as a "prebuild" step so Vercel always ships fresh feeds:
 *   package.json ->  "prebuild": "node generate-feeds.mjs"
 *   vercel.json  ->  "buildCommand": "npm run build"   (so prebuild actually fires)
 *
 * Matches the real BlogPost interface:
 *   { slug, title, excerpt, category, readTime, publishedAt,
 *     author: { name, role }, tags, content?, heroImage?, linkedinBlurb? }
 *
 * HOW THIS WORKS NOW (fixed):
 * Earlier versions of this script tried to pull each field out of
 * blogPosts.ts with regular expressions. That's fragile — if a value ever
 * failed to match, every post silently fell back to "today" as its
 * publishedAt, which is why every item in the feed ended up sharing the
 * exact same pubDate (the build time) instead of each post's own date.
 *
 * This version instead strips the handful of TypeScript-only bits out of
 * blogPosts.ts (the `interface` block and the `: BlogPost[]` / `: Record<...>`
 * type annotations), writes the result out as a plain, temporary .mjs file,
 * and actually imports it — so we get the real JavaScript objects exactly as
 * written, with no guessing. Real dates, real nested author.name, real
 * heroImage/linkedinBlurb, whatever fields exist.
 *
 * heroImage (optional): path to an image in /public, e.g.
 *   heroImage: '/blog-images/basket-analysis.jpg'
 * — used as the blog page's hero image AND passed into the RSS <enclosure>,
 * which is what Zapier's "Media URL" field should map to for a LinkedIn
 * post thumbnail. Posts without one just get no image — nothing breaks.
 *
 * linkedinBlurb (optional): controls exactly what text appears in the RSS
 * <description> (and therefore what Zapier posts to LinkedIn), instead of
 * falling back to the excerpt. Write it in your own voice per post, e.g.:
 *
 *   linkedinBlurb: "Here's our latest blog on basket analysis. Sounds
 *     complicated, but really it isn't — and at order level it can add
 *     40% more sales. Read more:",
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = "https://palmai.io";
const BLOG_POSTS_PATH = path.join(__dirname, "src/app/data/blogPosts.ts");
const RSS_OUTPUT_PATH = path.join(__dirname, "public/rss.xml");
const SITEMAP_OUTPUT_PATH = path.join(__dirname, "public/sitemap.xml");
const TMP_MODULE_PATH = path.join(__dirname, ".blogPosts.generated.mjs");

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

// Load the real blogPosts array by stripping TypeScript-only syntax and
// importing the file as plain JavaScript — no regex field-guessing.
async function loadBlogPosts() {
  const tsSource = fs.readFileSync(BLOG_POSTS_PATH, "utf-8");

  const jsSource = tsSource
    // Drop the `export interface BlogPost { ... }` block entirely.
    .replace(/export interface BlogPost\s*\{[\s\S]*?\n\}\n/, "")
    // Drop `: BlogPost[]` and similar array type annotations.
    .replace(/:\s*BlogPost\[\]/g, "")
    // Drop `: Record<BlogPost['category'], string>` and similar.
    .replace(/:\s*Record<[^>]+>/g, "");

  fs.writeFileSync(TMP_MODULE_PATH, jsSource);
  try {
    // Cache-bust the import so repeated local runs always pick up edits.
    const mod = await import(`${pathToFileURL(TMP_MODULE_PATH).href}?t=${Date.now()}`);
    return mod.blogPosts;
  } finally {
    fs.unlinkSync(TMP_MODULE_PATH);
  }
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Best-effort guess at an image's mime type from its extension, for the
// RSS <enclosure type="..."> attribute (some feed readers care about this).
function guessImageType(imagePath) {
  const ext = imagePath.split(".").pop().toLowerCase();
  const types = { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp", gif: "image/gif" };
  return types[ext] || "image/jpeg";
}

// `publishedAt` is stored as a date-only string, e.g. "2026-08-19". Parsing
// that directly gives UTC midnight, which is what we want for a stable,
// per-post pubDate that never drifts to the build time.
function postDate(publishedAt) {
  return new Date(`${publishedAt}T00:00:00Z`);
}

function buildRss(posts) {
  const items = posts
    .slice()
    .sort((a, b) => postDate(b.publishedAt) - postDate(a.publishedAt))
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = postDate(post.publishedAt).toUTCString();
      // Prefer a hand-written LinkedIn caption over the raw excerpt, so the
      // auto-posted text sounds like Jon rather than boilerplate summary copy.
      const description = post.linkedinBlurb || post.excerpt;
      const authorName = post.author?.name || "Jonathan Pritchard";

      const imageUrl = post.heroImage ? `${SITE_URL}${post.heroImage}` : "";
      const enclosure = imageUrl
        ? `\n      <enclosure url="${imageUrl}" type="${guessImageType(post.heroImage)}" />`
        : "";

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(description)}</description>
      <author>${escapeXml(authorName)}</author>${enclosure}
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
    <lastmod>${post.publishedAt}</lastmod>
    <priority>0.6</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticUrls}${postUrls}
</urlset>
`;
}

async function main() {
  const posts = await loadBlogPosts();

  if (!Array.isArray(posts) || posts.length === 0) {
    console.warn(
      "⚠️  No posts loaded from blogPosts.ts — check that the file still exports `blogPosts` as an array."
    );
  }

  // Sanity-check: flag any post missing a usable publishedAt so it's
  // obvious in the build log rather than silently collapsing dates again.
  for (const post of posts || []) {
    if (!post.publishedAt || Number.isNaN(postDate(post.publishedAt).getTime())) {
      console.warn(`⚠️  Post "${post.slug}" has a missing or unparseable publishedAt — check the date format (YYYY-MM-DD).`);
    }
  }

  fs.writeFileSync(RSS_OUTPUT_PATH, buildRss(posts));
  fs.writeFileSync(SITEMAP_OUTPUT_PATH, buildSitemap(posts));

  const withImages = posts.filter((p) => p.heroImage).length;
  console.log(`✅ Generated rss.xml and sitemap.xml with ${posts.length} blog post(s) (${withImages} with a heroImage), each with its own publishedAt date.`);
}

main();
