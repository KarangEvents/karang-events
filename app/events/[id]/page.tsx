import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  Heart,
  Share2,
  Phone,
  Mail,
  Globe,
  Check,
  Camera,
  Shield,
  Award,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

// Mock data for the event
const eventData = {
  id: "1",
  title: "Summer Music Festival 2024",
  subtitle: "An Unforgettable Musical Journey",
  date: "2024-08-15",
  time: "18:00",
  endTime: "23:00",
  location: "Central Park Amphitheater",
  address: "123 Park Avenue, New York, NY 10001",
  price: 89,
  originalPrice: 120,
  currency: "USD",
  category: "Music & Entertainment",
  capacity: 5000,
  attendees: 3247,
  rating: 4.8,
  reviewCount: 324,
  images: [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ],
  description: `Join us for the most spectacular summer music festival of 2024! Experience an incredible lineup of world-class artists, delicious food, and unforgettable memories under the stars.

This year's festival features over 20 artists across multiple stages, including headliners from various genres - pop, rock, electronic, and indie. From sunset performances to late-night dance parties, there's something for every music lover.

The festival grounds will be transformed into a magical wonderland with art installations, interactive experiences, and premium food and beverage options from local vendors.`,
  highlights: [
    "World-class lineup of 20+ artists",
    "Multiple stages and performance areas",
    "Premium food and beverage vendors",
    "Art installations and interactive experiences",
    "Professional sound and lighting systems",
    "VIP areas and exclusive experiences",
  ],
  inclusions: [
    "Festival entry for full duration",
    "Access to all stages and performances",
    "Complimentary welcome drink",
    "Festival map and program guide",
    "Free WiFi throughout the venue",
    "Security and medical support",
  ],
  vendor: {
    name: "Epic Events Co.",
    logo: "/placeholder.svg?height=80&width=80",
    rating: 4.9,
    reviewCount: 1247,
    yearsExperience: 8,
    eventsOrganized: 150,
    description:
      "Premier event management company specializing in large-scale music festivals and entertainment events.",
    contact: {
      phone: "+1 (555) 123-4567",
      email: "info@epicevents.com",
      website: "www.epicevents.com",
    },
  },
  reviews: [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-07-20",
      role: "Music Enthusiast",
      comment:
        "Absolutely incredible experience! The lineup was fantastic and the organization was flawless. The sound quality was amazing and the venue was perfect. Can't wait for next year!",
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-07-18",
      role: "Festival Regular",
      comment:
        "Best festival I've attended in years! Great variety of artists, excellent food options, and the staff was incredibly helpful. The VIP experience was worth every penny.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "2024-07-15",
      role: "First-time Attendee",
      comment:
        "Amazing atmosphere and great music! Only minor complaint was the long lines for food, but overall an unforgettable experience. The sunset performance was magical.",
    },
  ],
  ratingBreakdown: {
    5: 68,
    4: 22,
    3: 7,
    2: 2,
    1: 1,
  },
};

export default function EventDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const event = eventData; // In real app, fetch based on params.id

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="container container-custom py-12">
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
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Event Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
              <Image
                src={event.images[0] || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">
                    {event.attendees.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Attendees</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">5</div>
                  <div className="text-sm text-gray-600">Hours Duration</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">
                    {event.rating}
                  </div>
                  <div className="text-sm text-gray-600">Rating</div>
                </CardContent>
              </Card>
            </div>

            {/* Event Description */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  About This Event
                </h2>
                <div className="prose prose-gray max-w-none">
                  {event.description.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Event Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {event.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  What's Included
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {event.inclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{inclusion}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Image Gallery */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Event Gallery
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {event.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Event image ${index + 2}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Reviews & Ratings
                  </h2>
                  <Button variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Write Review
                  </Button>
                </div>

                {/* Rating Summary */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      {event.rating}
                    </div>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= Math.floor(event.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">{event.reviewCount} reviews</p>
                  </div>

                  <div className="space-y-3">
                    {Object.entries(event.ratingBreakdown)
                      .reverse()
                      .map(([rating, percentage]) => (
                        <div
                          key={rating}
                          className="flex items-center space-x-3"
                        >
                          <span className="text-sm text-gray-600 w-8">
                            {rating}★
                          </span>
                          <Progress value={percentage} className="flex-1" />
                          <span className="text-sm text-gray-600 w-10">
                            {percentage}%
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {event.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 pb-6 last:border-b-0"
                    >
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage
                            src={review.avatar || "/placeholder.svg"}
                            alt={review.name}
                          />
                          <AvatarFallback>
                            {review.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {review.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {review.role}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-1 mb-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`w-4 h-4 ${
                                      star <= review.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-sm text-gray-500">
                                {new Date(review.date).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Similar Events */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Similar Events
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2].map((item) => (
                    <Link
                      key={item}
                      href={`/events/${item + 1}`}
                      className="group"
                    >
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                        <Image
                          src={`/placeholder.svg?height=200&width=300&query=music event ${item}`}
                          alt={`Similar event ${item}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {item === 1
                          ? "Jazz Night Under Stars"
                          : "Electronic Dance Festival"}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {item === 1
                          ? "Aug 22, 2024 • $65"
                          : "Sep 5, 2024 • $95"}
                      </p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gray-900">
                        ${event.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ${event.originalPrice}
                      </span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      Save ${event.originalPrice - event.price}
                    </Badge>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-700">Date</span>
                      </div>
                      <span className="font-medium text-gray-900">
                        Aug 15, 2024
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-700">Time</span>
                      </div>
                      <span className="font-medium text-gray-900">
                        6:00 PM - 11:00 PM
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-700">Availability</span>
                      </div>
                      <span className="font-medium text-green-600">
                        Available
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
                      Book Now - ${event.price}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full py-3 bg-transparent"
                    >
                      Quick Enquiry
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4" />
                        <span>Secure Payment</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="w-4 h-4" />
                        <span>24/7 Support</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="mt-6">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Need Help?
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our support team is here to assist you with any questions.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
