"use client";

import React from "react";
import { Calendar, MapPin, Star, MessageCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { IEvent } from "@/types";
import { urlFor } from "@/sanity/SanityImageUrl";
import type { SanityImageObject } from "@sanity/image-url/lib/types/types";

interface EventCardProps {
  event: IEvent;
  openEnquiryForm: (event: IEvent) => void; // Function to open enquiry form
}

const EventCard = ({ event, openEnquiryForm }: EventCardProps) => {
  return (
    <Card key={event._id} className="overflow-hidden card-hover h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={urlFor(event.image as SanityImageObject).url()}
          alt={event.title}
          fill
          className="object-cover "
        />
        <div className="absolute top-2 right-2 bg-purple text-white text-xs font-medium px-2 py-1 rounded">
          {event.category}
        </div>
      </div>
      <CardContent className="p-4 flex flex-col h-[calc(100%-12rem)]">
        <h3 className="font-serif font-bold text-lg mb-2 line-clamp-2">
          {event.title}
        </h3>
        <div className="flex items-center text-sm text-muted-foreground mb-1">
          <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="truncate">{event.date}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="truncate">
            {event.area}, {event.location}
          </span>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span className="font-bold text-purple-dark">₹ {event.price}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-gold fill-gold mr-1" />
            <span className="text-sm">{event.rating}</span>
          </div>
        </div>

        {/* Action Buttons - Appear on hover */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <Link href={`/events/${event.slug}`} className="w-full" passHref>
            <Button className="w-full">View Details</Button>
          </Link>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => openEnquiryForm(event)}
          >
            <MessageCircle className="h-4 w-4 mr-1" /> Enquiry
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
