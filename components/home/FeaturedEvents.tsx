import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

// Sample data
const featuredEvents = [
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
  {
    id: 4,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
  {
    id: 5,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
  {
    id: 6,
    title: "Meet up Freelancer",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
  },
];

const FeaturedEvents = () => {
  return (
    <section className="section-padding bg-gray-50 container">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Events
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredEvents.map((event, index) => (
            <Card
              key={event.id}
              className="card-modern group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <p className="text-sm text-gray-200">{event.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link href="/events">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-xl">
              View More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
