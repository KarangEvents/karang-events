// app/sitemap.ts
import { sanityFetch } from "@/sanity/client";
import { MetadataRoute } from "next";

const EVENTS_QUERY = `*[_type == "event" && defined(slug.current)]{
  "slug": slug.current,
  _updatedAt
}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.karang.in"; // your domain

  // Fetch dynamic event slugs from Sanity
  const events: { slug: string; _updatedAt: string }[] = await sanityFetch({
    query: EVENTS_QUERY,
    revalidate: 60 * 60, // 1 hour revalidation
  });

  // Static pages (add/remove as needed)
  const staticRoutes = [
    "",
    "/events",
    "/about",
    "/faq",
    "/showcase",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // Dynamic event detail pages
  const eventRoutes = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(event._updatedAt).toISOString(),
  }));

  return [...staticRoutes, ...eventRoutes];
}
