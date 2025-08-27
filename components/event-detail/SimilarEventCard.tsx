import { ISingleEvent } from '@/types';
import Link from 'next/link';
import React from 'react'
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Calendar, MapPin, Star } from 'lucide-react';
import { urlFor } from '@/sanity/SanityImageUrl';

const SimilarEventCard = ({ event }: { event: ISingleEvent }) => {
    return (

        <Link href={`/events/${event.slug}`} key={event._id} className="md:min-w-[350px] flex-shrink-0">
            <Card className="group overflow-hidden">
                <div className="relative h-48 w-full">
                    <Image
                        src={urlFor(event.image).url()}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600 transition-colors">
                        {event.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{event.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-purple-600 text-lg">₹ {event.price}</span>
                        <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm font-medium">{event.rating}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );

}

export default SimilarEventCard