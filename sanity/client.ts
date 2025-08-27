import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "jr6j8y6w",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
