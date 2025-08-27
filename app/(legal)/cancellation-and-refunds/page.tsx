import React from "react";
import { sanityFetch } from "@/sanity/client";
import { PortableText } from "@portabletext/react";

const TERMS_QUERY = `*[_type == "refundsAndReturns" && isActive == true] | order(lastUpdated desc)[0] {
  _id,
  title,
  slug,
  lastUpdated,
  content,
  isActive
}`;

const Page = async () => {
  const terms = await sanityFetch({ query: TERMS_QUERY });

  if (!terms) {
    return <div>Terms and conditions not found</div>;
  }

  return (
    <div className="!container mx-auto py-8 h-screen">
      <h1 className="text-3xl font-bold mb-4">{terms.title}</h1>
      <p className="text-gray-600 mb-6">
        Last updated: {new Date(terms.lastUpdated).toLocaleDateString()}
      </p>

      {/* Render the block content */}
      <div className="prose max-w-none">
        <PortableText value={terms.content} />
      </div>
    </div>
  );
};

export default Page;
