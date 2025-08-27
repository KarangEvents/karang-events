"use client";

import React from "react";
import dynamic from "next/dynamic";

const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
  { ssr: false }
);

interface Link {
  _id: string;
  instagramUrl: string;
}

const InstaGrids = ({ links }: { links: Link[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {links.map((item) => (
        <div key={item._id} className="flex justify-center">
          <InstagramEmbed url={item.instagramUrl} width="100%" />
        </div>
      ))}
    </div>
  );
};

export default InstaGrids;
