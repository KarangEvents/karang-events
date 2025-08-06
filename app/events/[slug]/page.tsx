import { Calendar, MapPin, Users, CheckCircle, Star } from "lucide-react";
import HeroSlider from "@/components/event-detail/HeroSlider";
import StickyRightBar from "@/components/event-detail/StickyRightBar";
import { Card, CardContent } from "@/components/ui/card";
import Reviews from "@/components/event-detail/Reviews";
import { client } from "@/sanity/client";
import { ISingleEvent } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/SanityImageUrl";

const SINGLE_EVENTS_QUERY = `*[_type == "event" && slug.current == $slug][0]{
  _id,
  _type,
  title,
  slug,
  image,
  date,
  location,
  area->{
    _id,
    name
  },
  price,
  originalPriceAmount,
  rating,
  category->{
    _id,
    name
  },
  shortDescription,
  description,
  capacity,
  featured,
  gallery,
  whatsIncluded,
  reviews[]{
    rating,
    customerName,
    review,
    reviewDate
  }
}`;

const SIMILAR_EVENTS_QUERY = `*[_type == "event" && category._ref == $categoryId && slug.current != $slug][0...3]{
  _id,
  title,
  slug,
  image,
  date,
  location,
  price,
  rating
}`;

type Params = Promise<{ slug: string }>;

export default async function EventDetailPage({ params }: { params: Params }) {
  const { slug } = await params;

  const eventData: ISingleEvent = await client.fetch(SINGLE_EVENTS_QUERY, {
    slug,
  });

  //based on category in eventData, fetch similar events
  const similarEvents = await client.fetch(SIMILAR_EVENTS_QUERY, {
    categoryId: eventData.category._id,
    slug: eventData.slug.current,
  });

  return (
    <div className="min-h-screen container">
      {/* Main Content */}
      <div className="pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-5 space-y-8">
            {/* Event Title */}
            <h1 className="text-3xl font-bold text-primary/85">
              {eventData.title}
            </h1>
            {/* Event Gallery */}
            <HeroSlider slides={eventData.gallery} options={{}} />
            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="card-modern p-4 text-center">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Date</p>
                <p className="font-semibold">{eventData.date}</p>
              </Card>

              <Card className="card-modern p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Capacity</p>
                <p className="font-semibold">{eventData.capacity}</p>
              </Card>
              <Card className="card-modern p-4 text-center">
                <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-semibold">{eventData.location}</p>
              </Card>
            </div>

            {/* About This Event */}
            <Card className="card-modern p-8">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {eventData.description}
              </p>
            </Card>

            {/* Key Features */}
            {/* <Card className="card-modern p-8">
              <h3 className="text-xl font-bold mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eventData.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card> */}

            {/* What's Included */}
            <Card className="card-modern p-8">
              <h3 className="text-xl font-bold mb-6">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {eventData.whatsIncluded.map((inclusion, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{inclusion}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Customer Reviews */}
            <Reviews eventData={eventData} />
          </div>

          {/* Right Column - Booking & Vendor Info */}
          <div className="space-y-6 lg:col-span-3">
            {/* Booking Card */}
            <StickyRightBar eventData={eventData} />
          </div>
        </div>

        {/* Similar Events */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">
            Similar Events You May Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarEvents.map((event) => (
              <Link href={`/events/${event.id}`} key={event.id}>
                <Card className="card-modern group overflow-hidden">
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
                      <span className="font-bold text-purple-600 text-lg">
                        {event.price}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium">
                          {event.rating}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
