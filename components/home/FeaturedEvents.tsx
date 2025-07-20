import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { FEATURED_EVENTS } from "@/constants";

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
          {FEATURED_EVENTS.map((event, index) => (
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
            <Button className="px-8 py-7 text-base">View More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
