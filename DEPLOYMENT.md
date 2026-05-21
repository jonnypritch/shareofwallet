# ShareOfWallet — Vercel Deployment Guide

## Tech Stack
- React 18 + TypeScript
- Vite 6
- Tailwind CSS 4
- shadcn/ui components
- lucide-react icons

---

## Deploy to Vercel (5 minutes)

### Option A — GitHub (recommended)

1. Push this project to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial ShareOfWallet site"
   git remote add origin https://github.com/YOUR_USERNAME/shareofwallet
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub

3. Vercel auto-detects Vite. Settings should be:
   - Framework: Vite
   - Build Command: `vite build`
   - Output Directory: `dist`
   - Install Command: `npm install` (or `pnpm install`)

4. Click Deploy. Done.

5. Add your custom domain: Project Settings → Domains → `shareofwallet.co.uk`
   - In your domain registrar (Hostinger), add a CNAME record:
     - Name: `@` or `www`
     - Value: `cname.vercel-dns.com`

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## Local Development

```bash
npm install
npm run dev
# Opens at http://localhost:5173
```

---

## Adding a Blog Article

1. Open `src/app/data/blogPosts.ts`
2. Add a new entry to the `blogPosts` array:

```typescript
{
  slug: 'your-article-slug-here',
  title: 'Your Full Article Title',
  excerpt: 'One or two sentence summary shown on the blog listing page.',
  category: 'basket-analysis', // one of: basket-analysis | customer-analysis | share-of-wallet | sales-strategy
  readTime: 7,  // estimated minutes (word count ÷ 200)
  publishedAt: '2025-05-21',
  author: { name: 'ShareOfWallet', role: 'Data & Insights' },
  tags: ['basket analysis', 'wholesale', 'distributors'],
  content: `
    <h2>Your first section heading</h2>
    <p>Your article body in HTML...</p>
    <h2>Second section</h2>
    <p>More content...</p>
  `,
}
```

3. Save the file. The article appears immediately on `/blog`.

---

## Content Workflow (weekly)

```
Monday     → Paste approved article into blogPosts.ts → git push → auto-deploys
Wednesday  → Same
Friday     → Same + share TikTok script from Claude Project
End of month → Use YouTube outline from Claude Project
```

---

## File Structure

```
src/
  app/
    App.tsx                    ← Main router (add new pages here)
    data/
      blogPosts.ts             ← ✏️  ADD ARTICLES HERE
    pages/
      BlogPage.tsx             ← Blog listing page
      BlogPostPage.tsx         ← Individual article page
      FeaturesPage.tsx
      PricingPage.tsx
      AboutPage.tsx
      ContactPage.tsx
      SolutionsPage.tsx
      ElectricalWholesalePage.tsx
      PlumbersMerchantPage.tsx
    components/
      Navigation.tsx           ← Top nav (Blog link added)
      FeaturesSection.tsx
      StatsSection.tsx
      TestimonialSection.tsx
      CustomerLogosSection.tsx
      FinalCTASection.tsx
      CategoryDashboardMockup.tsx
      DashboardMockup.tsx
      WalletShareMockup.tsx
      CustomerPriorityMockup.tsx
      OpportunityAlertMockup.tsx
  styles/
    index.css
    globals.css
    default_theme.css
assets/
  palm-ai-logo-colour.png
  palm-ai-logo-white.png
  palm-ai-mark-green.png
```

---

## SEO Checklist per Article

- [ ] Primary keyword in title, first paragraph, one H2
- [ ] Meta description 150–160 chars (add to blogPosts.ts as `metaDescription` field)
- [ ] Slug is descriptive and keyword-rich (max 6 words)
- [ ] Tags include the main keyword and 2–3 related terms
- [ ] Article links to at least one other article (internal linking)
- [ ] CTA at end points to shareofwallet.co.uk or /contact

---

## Claude Project Setup

The file `CLAUDE_PROJECT_SYSTEM_PROMPT.md` in this repo is your Claude Project system prompt.

**To set it up:**
1. Go to claude.ai → Projects → New Project
2. Name it: "ShareOfWallet Content Engine"
3. In Project Instructions, paste the full contents of `CLAUDE_PROJECT_SYSTEM_PROMPT.md`
4. Upload brand assets (Palm AI logo files) to the Project knowledge
5. Optionally upload this README as reference

**Each week, to generate content:**
- Start a new chat inside the Project
- Type: `Write an article about: [your topic]`
- Claude will produce the full SEO article ready to paste into blogPosts.ts
- Review, approve, then ask: `Now produce the LinkedIn post, TikTok script, and YouTube outline`
