import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Star, Users } from "lucide-react";

// This would normally come from a database or API
const event = {
  id: 1,
  title: "Corporate Gala Dinner",
  image: "/placeholder.svg?height=600&width=1200",
  date: "June 15, 2023",
  time: "7:00 PM - 11:00 PM",
  location: "Grand Hyatt, New York",
  address: "109 East 42nd Street, New York, NY 10017",
  price: "$1,200",
  rating: 4.8,
  capacity: "50-200 guests",
  description:
    "An elegant corporate gala dinner package designed to impress your clients, partners, and employees. Our comprehensive package includes venue setup, premium catering with a customizable menu, professional staff, audiovisual equipment, and sophisticated decor tailored to your brand identity. Perfect for annual celebrations, award ceremonies, or milestone achievements.",
  features: [
    "Premium 3-course dinner with customizable menu",
    "Professional event coordination and on-site management",
    "Elegant table settings and decor",
    "Sound system and lighting",
    "Red carpet entrance",
    "Professional photography services",
    "Valet parking for guests",
    "Customizable branding opportunities",
  ],
  vendor: {
    name: "Elite Events Co.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    events: 120,
  },
  gallery: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  similarEvents: [
    {
      id: 6,
      title: "Product Launch Event",
      image: "/placeholder.svg?height=400&width=600",
      date: "July 22, 2023",
      location: "Modern Gallery, Los Angeles",
      price: "$4,200",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Tech Conference Setup",
      image: "/placeholder.svg?height=400&width=600",
      date: "September 10-12, 2023",
      location: "Convention Center, San Francisco",
      price: "$5,000",
      rating: 4.7,
    },
    {
      id: 5,
      title: "Charity Fundraiser Gala",
      image: "/placeholder.svg?height=400&width=600",
      date: "November 5, 2023",
      location: "Luxury Hotel, Chicago",
      price: "$2,500",
      rating: 4.5,
    },
  ],
};

export default function EventDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link
            href="/events"
            className="text-muted-foreground hover:text-foreground"
          >
            Events
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{event.title}</span>
        </div>

        {/* Event Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-2">
              {event.title}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-gold fill-gold mr-1" />
                <span>{event.rating} (48 reviews)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" size="lg">
              Share Event
            </Button>
            <Button size="lg" className="bg-purple hover:bg-purple-dark">
              Book Now
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Event Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image */}
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Event Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <Calendar className="h-10 w-10 text-purple mr-4" />
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">{event.date}</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <Clock className="h-10 w-10 text-purple mr-4" />
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-medium">{event.time}</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <Users className="h-10 w-10 text-purple mr-4" />
                <div>
                  <p className="text-sm text-muted-foreground">Capacity</p>
                  <p className="font-medium">{event.capacity}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-serif text-xl font-bold mb-4">
                About This Event
              </h2>
              <p className="text-muted-foreground mb-6">{event.description}</p>

              <h3 className="font-serif text-lg font-bold mb-3">
                What's Included
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {event.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-purple mr-2 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-serif text-xl font-bold mb-4">
                Event Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {event.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-24 md:h-32 rounded-md overflow-hidden"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking and Vendor */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-20">
              <h2 className="font-serif text-xl font-bold mb-4">
                Book This Event
              </h2>
              <div className="flex justify-between items-center mb-6">
                <span className="text-muted-foreground">Starting from</span>
                <span className="text-2xl font-bold text-purple-dark">
                  {event.price}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <Button className="w-full bg-purple hover:bg-purple-dark">
                  Book Now
                </Button>
                <Button variant="outline" className="w-full">
                  Contact Vendor
                </Button>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-medium mb-2">Need help?</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Have questions about this event? Contact our support team.
                </p>
                <Link
                  href="/contact"
                  className="text-sm text-purple hover:underline"
                >
                  Get in touch →
                </Link>
              </div>
            </div>

            {/* Vendor Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-serif text-xl font-bold mb-4">
                Event Vendor
              </h2>
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={event.vendor.image || "/placeholder.svg"}
                    alt={event.vendor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{event.vendor.name}</h3>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-gold fill-gold mr-1" />
                    <span>{event.vendor.rating}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Professional event management company with over{" "}
                {event.vendor.events} successful events.
              </p>
              <Link
                href={`/vendors/${event.vendor.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <Button variant="outline" className="w-full">
                  View Vendor Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Similar Events */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-bold mb-6">
            Similar Events You May Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.similarEvents.map((event) => (
              <Link href={`/events/${event.id}`} key={event.id}>
                <Card className="overflow-hidden card-hover">
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-serif font-bold text-lg mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-purple-dark">
                        {event.price}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-gold fill-gold mr-1" />
                        <span className="text-sm">{event.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
