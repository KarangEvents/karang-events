import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { SUCCESS_STORIES } from "@/constants";
import SectionTitle from "../common/SectionTitle";
import { ISuccessStory } from "@/types";
import { urlFor } from "@/sanity/SanityImageUrl";

const SuccessStories = ({ successStories }: { successStories: ISuccessStory[] }) => {

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <SectionTitle>
            Our Recent Success Stories
          </SectionTitle>
          <p className="text-base md:text-xl text-gray-600">
            Take a glimpse at some of our recent events that showcase our
            expertise and creativity.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {successStories.map((story, index) => (
            <Card
              key={story._id}
              className="card-modern group rounded-lg overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={urlFor(story.picture).url()}
                  alt={story.eventName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{story.eventName}</h3>
                  <p className="text-sm text-gray-200">{story.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link href="/showcase" passHref >
            <Button className="px-8 py-7 text-base">View Full Portfolio</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
