# Value M — valuemdelivery.com

Business growth strategy website for Value M, helping CEOs and founders between $3M and $10M fix business performance and scale without the chaos.

## Tech stack

- [Astro](https://astro.build/) v6 — static site generator
- MDX — blog post content
- Inter — self-hosted font (Regular, SemiBold, Bold, ExtraBold)
- Deployed on Cloudflare Pages

## Development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

## Project structure

```
src/
  components/       Header.astro, Footer.astro, CtaFooter.astro
  content/blog/     Blog posts (.md / .mdx)
  layouts/          Layout.astro — shared <head>, fonts, global CSS
  pages/            index.astro, blog/index.astro, blog/[slug].astro, 404.astro
  utils/            readingTime.ts
  config.ts         Shared constants: SITE_URL, CALENDLY_URL
public/
  fonts/inter/      Self-hosted Inter woff2 files
  _headers          Cloudflare Pages edge cache rules
  robots.txt
docs/
  post-template.md  Blog post frontmatter template and instructions
```

## Adding a blog post

1. Copy `docs/post-template.md` to `src/content/blog/your-post-slug.md`
2. Fill in the frontmatter fields (title, description, pubDate, author, tags, category)
3. Set `draft: true` to preview locally without publishing
4. Remove `draft: true` (or set to `false`) to publish on the next deploy

## Deployment

Every push to `main` automatically deploys via Cloudflare Pages. Lighthouse CI runs on each push and reports scores for performance, accessibility, best practices, and SEO.
