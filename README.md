# Portfolio Blog Starter

This is a porfolio site template complete with a blog. Includes:

- MDX and Markdown support
- Optimized for SEO (sitemap, robots, JSON-LD schema)
- RSS Feed
- Dynamic OG images
- Syntax highlighting
- Tailwind v4
- Vercel Speed Insights / Web Analytics
- Geist font

## Demo

https://portfolio-blog-starter.vercel.app

## How to Use

### Local Development

Use Node.js 24 or newer, as required by `package.json`. From the project directory, run:

```bash
npm ci
npm run dev
```

Open http://localhost:3000 in your browser. Install dependencies on the machine where you run the site; copying `node_modules` between operating systems can break package links and native modules.

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/solutions/blog&project-name=blog&repository-name=blog)

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [pnpm](https://pnpm.io/installation) to bootstrap the example:

```bash
pnpm create next-app --example https://github.com/vercel/examples/tree/main/solutions/blog blog
```

Then, run Next.js in development mode:

```bash
pnpm dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/templates) ([Documentation](https://nextjs.org/docs/app/building-your-application/deploying)).

## Search visibility

Page titles, descriptions, canonical URLs, and structured data are configured in `app/lib/seo.ts`. Keep `site.url` set to the public production domain. Google site verification is preserved in `app/layout.tsx`.

After deploying SEO changes to Vercel:

1. Confirm `/robots.txt`, `/sitemap.xml`, and `/profile.jpg` load on the production domain.
2. In [Google Search Console](https://search.google.com/search-console), submit `https://swarup.vercel.app/sitemap.xml` and use URL Inspection to request indexing for `/` and `/research`.
3. Check indexing and search performance reports after Google recrawls the pages. Sitemap submission and metadata improvements do not guarantee indexing or rankings.

The sitemap omits modification dates rather than reporting a new content date on every build. If you add dates later, use actual dates of meaningful page updates.
