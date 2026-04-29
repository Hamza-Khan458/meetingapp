# SEO Checklist

## Meta tags and Open Graph

- Define a unique title and description for the homepage and blog.
- Add Open Graph metadata to control previews on social shares.
- Add Twitter card metadata for consistent previews.

Example (Next.js Metadata API):

```ts
export const metadata = {
  title: "Meeting Cost Calculator & Time Analytics Dashboard",
  description: "Quantify meeting spend, track ROI, and uncover time waste.",
  openGraph: {
    title: "Meeting Cost Calculator",
    description: "Meeting ROI analytics for modern teams.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meeting Cost Calculator",
    description: "Meeting ROI analytics for modern teams.",
  },
};
```

## Sitemap and robots

- Add `app/sitemap.ts` and `app/robots.ts` so crawlers can index the site.
- Use `NEXT_PUBLIC_SITE_URL` for the sitemap base URL.

## Blog setup

- Add a blog index page and post pages with clear headings and summaries.
- Use structured headings (`h1`, `h2`) and short paragraphs for readability.
- Publish on a consistent cadence (weekly or bi-weekly).

## Performance optimization

- Keep hero images lightweight and use modern formats.
- Avoid rendering heavy client code on the landing page.
- Cache API responses where possible to reduce cold starts.
