import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { SUCCESS_STORIES } from "@/constants";

const SuccessStories = () => {
  return (
    <section className="section-padding bg-gray-50 container">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Recent Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Take a glimpse at some of our recent events that showcase our
            expertise and creativity.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {SUCCESS_STORIES.map((story, index) => (
            <Card
              key={story.id}
              className="card-modern group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{story.title}</h3>
                  <p className="text-sm text-gray-200">{story.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link href="/showcase">
            <Button className="px-8 py-7 text-base">View Full Portfolio</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
