import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { client } from "@/sanity/client";
import { IEvent } from "@/types";
import { urlFor } from "@/sanity/SanityImageUrl";

const EVENTS_QUERY = `*[_type == "event" && featured == true]{
  _id,
  title,
  "slug": slug.current,
  image,
  date,
  location,
  "city": city->name,
  "category": category->name,
  price,
  rating,
  shortDescription,
  capacity,
  featured,
  tags,
  contactInfo,
  gallery
} | order(date desc)`;

const options = { next: { revalidate: 30 } };

const FeaturedEvents = async () => {
  const featured: IEvent[] = await client.fetch(EVENTS_QUERY, {}, options);
  return (
    <section className="section-padding bg-gray-50 container">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Events
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((event) => (
            <Link href={`/events/${event.slug}`} key={event._id} passHref>
              <Card className="cursor-pointer bg-transparent shadow-none !border-0 group">
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <Image
                    src={urlFor(event.image).url()}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 space-y-1.5">
                  <h3 className="font-semibold text-xl capitalize tracking-normal">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    {event?.shortDescription || event.category}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/events" passHref>
            <Button className="px-8 py-7 text-base">View More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
