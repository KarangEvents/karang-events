import React from "react";
import { client } from "@/sanity/client";

const TERMS_QUERY = `*[_type == "privacyPolicy" && isActive == true] | order(lastUpdated desc)[0] {
  _id,
  title,
  slug,
  lastUpdated,
  content,
  isActive
}`;

const Page = async () => {
  const terms = await client.fetch(TERMS_QUERY);

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
        {terms.content &&
          terms.content.map((block: any, index: number) => {
            if (block._type === "block") {
              return (
                <div key={index}>
                  {block.children.map((child: any, childIndex: number) => (
                    <span key={childIndex}>
                      {child.marks?.includes("strong") ? (
                        <strong>{child.text}</strong>
                      ) : child.marks?.includes("em") ? (
                        <em>{child.text}</em>
                      ) : (
                        child.text
                      )}
                    </span>
                  ))}
                </div>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default Page;
