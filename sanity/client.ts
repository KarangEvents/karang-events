import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ii6f8npo",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
