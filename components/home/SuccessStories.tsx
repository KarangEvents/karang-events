import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const successStories = [
  {
    id: 1,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
  {
    id: 2,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
  {
    id: 3,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
];

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
          {successStories.map((story, index) => (
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
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-xl">
              View Full Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
