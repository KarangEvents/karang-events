import { createClient, QueryParams } from "next-sanity";

export const client = createClient({
  projectId: "jr6j8y6w",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 600, // default revalidation time in seconds
  tags = [],
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) {
  return client.fetch(query, params, {
    cache: 'force-cache', // on next v14 it's force-cache by default, in v15 it has to be set explicitly
    next: {
      revalidate: tags.length ? false : revalidate, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  })
}

