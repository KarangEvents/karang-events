"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  Users,
  ChevronLeft,
  ChevronRight,
  Award,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DatePickerForm } from "@/components/event-detail/SmartDateTimePicker";

// Enhanced event data with more details
const eventData = {
  id: 1,
  title: "Corporate Gala Dinner 2024",
  subtitle: "An Evening of Excellence & Innovation",
  heroImage: "/placeholder.svg?height=600&width=1200",
  category: "Corporate",
  date: "2024-06-15", // ISO format for proper parsing
  time: "19:00", // 24-hour format
  endTime: "23:00", // 24-hour format
  duration: "4 hours",
  location: "Grand Hyatt Ballroom",
  address: "109 East 42nd Street, New York, NY 10017",
  city: "New York",
  price: 1200,
  originalPrice: 1500,
  currency: "$",
  rating: 4.8,
  reviewCount: 156,
  capacity: 200,
  minGuests: 50,
  maxGuests: 200,
  currentAttendees: 147, // Dynamic attendee count
  availableSpots: 53, // Calculated: maxGuests - currentAttendees
  description:
    "Experience an unforgettable evening of elegance and sophistication at our Corporate Gala Dinner. This premium event package is meticulously designed to impress your clients, partners, and employees while celebrating your company's achievements and milestones.",
  longDescription:
    "Our Corporate Gala Dinner represents the pinnacle of professional event experiences. From the moment your guests arrive at the red carpet entrance to the final toast of the evening, every detail is crafted to perfection. The event features a sophisticated three-course dinner prepared by award-winning chefs, premium bar service, professional entertainment, and customizable branding opportunities that align with your corporate identity.",
  highlights: [
    "Premium 3-course dinner with wine pairing",
    "Professional event coordination & management",
    "Elegant table settings with premium linens",
    "State-of-the-art sound system & lighting",
    "Red carpet entrance with professional photography",
    "Customizable branding & corporate identity integration",
    "Valet parking service for all guests",
    "Dedicated event manager throughout the evening",
  ],
  features: [
    {
      icon: Award,
      title: "Award-Winning Catering",
      description: "Michelin-starred chef cuisine",
    },
    {
      icon: Shield,
      title: "Full Insurance Coverage",
      description: "Comprehensive event protection",
    },
    {
      icon: Zap,
      title: "Premium AV Equipment",
      description: "Professional sound & lighting",
    },
    {
      icon: Users,
      title: "Dedicated Staff",
      description: "1:10 staff to guest ratio",
    },
  ],
  inclusions: [
    "Venue rental for 6 hours",
    "Professional event planning & coordination",
    "Premium catering service",
    "Bar service with premium spirits",
    "Table linens, centerpieces & decor",
    "Professional photography (2 hours)",
    "Sound system & microphones",
    "Valet parking coordination",
    "Event insurance coverage",
  ],
  gallery: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  vendor: {
    name: "Elite Events Co.",
    logo: "/placeholder.svg?height=80&width=80",
    rating: 4.9,
    eventsCompleted: 120,
    yearsExperience: 8,
    description:
      "Premier event management company specializing in luxury corporate events and celebrations.",
    phone: "+1 (555) 123-4567",
    email: "contact@eliteevents.com",
    website: "www.eliteevents.com",
    certifications: [
      "Certified Event Planner",
      "Luxury Event Specialist",
      "Corporate Event Expert",
    ],
  },
  reviews: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      rating: 5,
      date: "March 2024",
      comment:
        "Absolutely phenomenal event! Every detail was perfect and our guests were thoroughly impressed. The coordination was seamless and the atmosphere was exactly what we envisioned.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      rating: 5,
      date: "February 2024",
      comment:
        "Elite Events exceeded all expectations. The coordination was flawless and the atmosphere was magical. Our product launch was a tremendous success thanks to their expertise.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Event Coordinator",
      rating: 4,
      date: "January 2024",
      comment:
        "Professional service from start to finish. Highly recommend for corporate events. The attention to detail and customer service was outstanding throughout the planning process.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Operations Manager",
      rating: 5,
      date: "December 2023",
      comment:
        "The team went above and beyond to make our annual gala a memorable experience. Every aspect was handled with professionalism and creativity.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ],
  similarEvents: [
    {
      id: 2,
      title: "Product Launch Spectacular",
      image: "/placeholder.svg?height=300&width=400",
      date: "July 22, 2024",
      location: "Modern Gallery, Los Angeles",
      price: "$4,200",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Annual Awards Ceremony",
      image: "/placeholder.svg?height=300&width=400",
      date: "August 15, 2024",
      location: "Convention Center, Chicago",
      price: "$3,800",
      rating: 4.6,
    },
    {
      id: 4,
      title: "Executive Networking Dinner",
      image: "/placeholder.svg?height=300&width=400",
      date: "September 10, 2024",
      location: "Rooftop Venue, Miami",
      price: "$2,900",
      rating: 4.8,
    },
  ],
};

export default function EventDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [numberOfAttendees, setNumberOfAttendees] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Helper functions for dynamic data formatting
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(":");
    const hour = Number.parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const formatTimeRange = (startTime: string, endTime: string) => {
    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % eventData.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + eventData.gallery.length) % eventData.gallery.length
    );
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: eventData.title,
          text: eventData.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Validation for booking form
  const isBookingFormValid = () => {
    return (
      selectedDate &&
      selectedTime &&
      numberOfAttendees &&
      Number(numberOfAttendees) >= eventData.minGuests &&
      Number(numberOfAttendees) <= eventData.maxGuests
    );
  };

  return (
    <div className="min-h-screen container">
      {/* Main Content */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-5 space-y-12">
            {/* Event Gallery */}
            <Card className="card-modern overflow-hidden">
              <div className="p-6 pb-0">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                  <div>
                    <h1 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-2">
                      {eventData.title}
                    </h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-gold fill-gold mr-1" />
                        <span>{eventData.rating} (48 reviews)</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{eventData.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative h-80 md:h-[350px] mx-6 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={
                    eventData.gallery[currentImageIndex] || "/placeholder.svg"
                  }
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </Button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {eventData.gallery.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/50"
                      )}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {eventData.gallery.map((image, index) => (
                    <button
                      key={index}
                      className={cn(
                        "relative h-20 rounded-lg overflow-hidden border-2 transition-all",
                        index === currentImageIndex
                          ? "border-purple-600"
                          : "border-transparent hover:border-gray-300"
                      )}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Card>
            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="card-modern p-4 text-center">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Date</p>
                <p className="font-semibold">
                  {new Date(eventData.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </Card>
              <Card className="card-modern p-4 text-center">
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">{eventData.duration}</p>
              </Card>
              <Card className="card-modern p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Attendees</p>
                <p className="font-semibold">{eventData.currentAttendees}</p>
              </Card>
              <Card className="card-modern p-4 text-center">
                <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-semibold">{eventData.city}</p>
              </Card>
            </div>

            {/* About This Event */}
            <Card className="card-modern p-8">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {eventData.description}
              </p>
              {showFullDescription && (
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {eventData.longDescription}
                </p>
              )}
              <Button
                variant="ghost"
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-purple-600 hover:text-purple-700 p-0 h-auto"
              >
                {showFullDescription ? "Show Less" : "Read More"}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Card>

            {/* Key Features */}
            <Card className="card-modern p-8">
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
            </Card>

            {/* What's Included */}
            <Card className="card-modern p-8">
              <h3 className="text-xl font-bold mb-6">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {eventData.inclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{inclusion}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Customer Reviews */}
            <Card className="card-modern p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">Customer Reviews</h3>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-lg">
                    {eventData.rating}
                  </span>
                  <span className="text-gray-500">
                    ({eventData.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Rating Summary */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">
                        {eventData.rating}
                      </div>
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-5 w-5",
                              i < Math.floor(eventData.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            )}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">
                        Based on {eventData.reviewCount} reviews
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-3">
                        <span className="text-sm w-8">{rating}★</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{
                              width: `${
                                rating === 5
                                  ? 75
                                  : rating === 4
                                  ? 20
                                  : rating === 3
                                  ? 3
                                  : rating === 2
                                  ? 1
                                  : 1
                              }%`,
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-8">
                          {rating === 5
                            ? 117
                            : rating === 4
                            ? 31
                            : rating === 3
                            ? 5
                            : rating === 2
                            ? 2
                            : 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="space-y-8">
                {eventData.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-lg">
                              {review.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {review.role}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 text-yellow-400 fill-current"
                                />
                              ))}
                            </div>
                            <p className="text-sm text-gray-500">
                              {review.date}
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

              <div className="mt-8 text-center">
                <Button variant="outline" className="bg-transparent">
                  View All {eventData.reviewCount} Reviews
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Booking & Vendor Info */}
          <div className="space-y-6 lg:col-span-3">
            {/* Booking Card */}
            <Card className="card-modern p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-purple-600">
                    {eventData.currency}
                    {eventData.price.toLocaleString()}
                  </span>
                  {eventData.originalPrice > eventData.price && (
                    <span className="text-lg text-gray-500 line-through">
                      {eventData.currency}
                      {eventData.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  Starting price per event
                </p>
                {eventData.originalPrice > eventData.price && (
                  <Badge className="bg-green-100 text-green-800 mt-2">
                    Save {eventData.currency}
                    {(
                      eventData.originalPrice - eventData.price
                    ).toLocaleString()}
                  </Badge>
                )}
              </div>

              <Separator className="my-5" />

              {/* Booking Form */}
              <div className="space-y-5">
                <DatePickerForm />
              </div>

              <div className="space-y-4 mt-6">
                <Link
                  href={`/payment?event=${eventData.id}&date=${selectedDate}&time=${selectedTime}&attendees=${numberOfAttendees}`}
                >
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 h-12 text-lg font-semibold"
                    disabled={!isBookingFormValid()}
                  >
                    Book Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full h-12 bg-transparent"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Enquiry
                </Button>
              </div>

              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">
                  Need Help?
                </h4>
                <p className="text-sm text-purple-700 mb-3">
                  Have questions about this event? Our team is here to help.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-purple-200 text-purple-700 hover:bg-purple-100 bg-transparent"
                >
                  Contact Support
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Similar Events */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">
            Similar Events You May Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventData.similarEvents.map((event) => (
              <Link href={`/events/${event.id}`} key={event.id}>
                <Card className="card-modern group overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image || "/placeholder.svg"}
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
