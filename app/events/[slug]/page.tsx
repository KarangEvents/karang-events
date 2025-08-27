import { Calendar, MapPin, Users, CheckCircle } from "lucide-react";
import HeroSlider from "@/components/event-detail/HeroSlider";
import StickyRightBar from "@/components/event-detail/StickyRightBar";
import { Card } from "@/components/ui/card";
import Reviews from "@/components/event-detail/Reviews";
import { client } from "@/sanity/client";
import { ISingleEvent } from "@/types";
import SimilarEventCard from "@/components/event-detail/SimilarEventCard";
import InfoCard from "@/components/event-detail/InfoCard";

const SINGLE_EVENTS_QUERY = `*[_type == "event" && slug.current == $slug][0]{
  _id,
  _type,
  "slug": slug.current,
  title,
  image,
  date,
  location,
  area->{ _id, name },
  price,
  originalPriceAmount,
  rating,
  category->{ _id, name },
  shortDescription,
  description,
  capacity,
  featured,
  gallery,
  whatsIncluded,
  reviews[]{ rating, customerName, review, reviewDate }
}`;

const SIMILAR_EVENTS_QUERY = `*[_type == "event" && category._ref == $categoryId && slug.current != $slug][0...3]{
  _id, title, "slug": slug.current, image, date, location, price, rating
}`;

type Params = Promise<{ slug: string }>;


export default async function EventDetailPage({ params }: { params: Params }) {
  const { slug } = await params;

  const eventData: ISingleEvent = await client.fetch(SINGLE_EVENTS_QUERY, { slug });
  const similarEvents: ISingleEvent[] = await client.fetch(SIMILAR_EVENTS_QUERY, {
    categoryId: eventData.category._id,
    slug,
  });

  const infoCards = [
    { icon: Calendar, label: "Date", value: eventData.date },
    { icon: Users, label: "Capacity", value: eventData.capacity },
    { icon: MapPin, label: "Location", value: eventData.location },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-light/20 to-white py-6 md:py-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <h1 className="text-2xl md:text-3xl font-bold text-primary/85">{eventData.title}</h1>
            <HeroSlider slides={eventData.gallery} options={{}} />

            {/* Booking Card (mobile) */}
            <div className="space-y-6 lg:col-span-3 md:hidden">
              <StickyRightBar eventData={eventData} />
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4">
              {infoCards.map((info, i) => (
                <InfoCard key={i} {...info} />
              ))}
            </div>

            {/* About */}
            <Card className="p-5 md:p-8">
              <h2 className="text-xl font-bold mb-4">About This Event</h2>
              <p className="text-gray-600 leading-relaxed">{eventData.description}</p>
            </Card>

            {/* What's Included */}
            <Card className="p-5 md:p-8">
              <h2 className="text-xl font-bold mb-4">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {eventData.whatsIncluded.map((inclusion, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{inclusion}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Reviews eventData={eventData} />
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:col-span-3 max-md:hidden">
            <StickyRightBar eventData={eventData} />
          </div>
        </div>

        {/* Similar Events */}
        {similarEvents.length > 0 && (
          <section className="mt-8 md:mt-16">
            <h2 className="text-xl font-bold mb-8">Similar Events You May Like</h2>
            <div className="flex gap-4 md:gap-8 overflow-x-auto">
              {similarEvents.map((event) => (
                <SimilarEventCard key={event._id} event={event} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
