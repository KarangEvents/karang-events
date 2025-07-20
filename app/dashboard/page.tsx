"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Star } from "lucide-react";

// Sample data for upcoming bookings
const upcomingBookings = [
  {
    id: 1,
    title: "Corporate Gala Dinner",
    image: "/placeholder.svg?height=200&width=300",
    date: "June 15, 2023",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Hyatt, New York",
    status: "Confirmed",
  },
  {
    id: 2,
    title: "Tech Conference Setup",
    image: "/placeholder.svg?height=200&width=300",
    date: "September 10-12, 2023",
    time: "All Day",
    location: "Convention Center, San Francisco",
    status: "Pending",
  },
];

// Sample data for past events
const pastEvents = [
  {
    id: 3,
    title: "Product Launch Event",
    image: "/placeholder.svg?height=200&width=300",
    date: "March 22, 2023",
    location: "Modern Gallery, Los Angeles",
    rating: 4.8,
  },
  {
    id: 4,
    title: "Charity Fundraiser Gala",
    image: "/placeholder.svg?height=200&width=300",
    date: "January 15, 2023",
    location: "Luxury Hotel, Chicago",
    rating: 4.5,
  },
];

// Sample data for favorite events
const favoriteEvents = [
  {
    id: 5,
    title: "Wedding Reception Package",
    image: "/placeholder.svg?height=200&width=300",
    date: "Flexible Dates",
    location: "Beachfront Resort, Miami",
    price: "$3,500",
  },
  {
    id: 6,
    title: "Anniversary Celebration",
    image: "/placeholder.svg?height=200&width=300",
    date: "Customizable",
    location: "Rooftop Restaurant, Seattle",
    price: "$1,800",
  },
];

// Sample data for recommended events
const recommendedEvents = [
  {
    id: 7,
    title: "Music Festival Production",
    image: "/placeholder.svg?height=200&width=300",
    date: "August 18-20, 2023",
    location: "Outdoor Park, Austin",
    price: "$12,000",
    rating: 4.9,
  },
  {
    id: 8,
    title: "Birthday Celebration Package",
    image: "/placeholder.svg?height=200&width=300",
    date: "Customizable",
    location: "Various Venues",
    price: "$800",
    rating: 4.6,
  },
  {
    id: 9,
    title: "Corporate Retreat",
    image: "/placeholder.svg?height=200&width=300",
    date: "October 5-7, 2023",
    location: "Mountain Resort, Colorado",
    price: "$9,500",
    rating: 4.7,
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-2">
              Welcome, Jessica
            </h1>
            <p className="text-muted-foreground">
              Manage your events and bookings all in one place
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button>Browse Events</Button>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <Tabs
          defaultValue="upcoming"
          className="space-y-8"
          onValueChange={setActiveTab}
        >
          <TabsList className="bg-muted/50">
            <TabsTrigger value="upcoming">Upcoming Bookings</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>

          {/* Upcoming Bookings Tab */}
          <TabsContent value="upcoming" className="space-y-6">
            {upcomingBookings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingBookings.map((booking) => (
                  <Card key={booking.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative h-48 md:h-auto md:w-1/3">
                        <Image
                          src={booking.image || "/placeholder.svg"}
                          alt={booking.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 md:p-6 md:w-2/3">
                        <div
                          className={`text-xs font-medium px-2 py-1 rounded-full inline-block mb-2 ${
                            booking.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {booking.status}
                        </div>
                        <h3 className="font-serif font-bold text-lg mb-2">
                          {booking.title}
                        </h3>
                        <div className="space-y-1 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{booking.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{booking.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{booking.location}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            className="bg-purple hover:bg-purple-dark"
                          >
                            Manage
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="font-serif text-xl font-bold mb-2">
                    No Upcoming Bookings
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    You don't have any upcoming events booked yet.
                  </p>
                  <Button className="bg-purple hover:bg-purple-dark">
                    Browse Events
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Past Events Tab */}
          <TabsContent value="past" className="space-y-6">
            {pastEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative h-48 md:h-auto md:w-1/3">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 md:p-6 md:w-2/3">
                        <h3 className="font-serif font-bold text-lg mb-2">
                          {event.title}
                        </h3>
                        <div className="space-y-1 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-gold fill-gold mr-2" />
                            <span>{event.rating} / 5</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            className="bg-purple hover:bg-purple-dark"
                          >
                            Leave Review
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="font-serif text-xl font-bold mb-2">
                    No Past Events
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    You haven't attended any events yet.
                  </p>
                  <Button className="bg-purple hover:bg-purple-dark">
                    Browse Events
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="space-y-6">
            {favoriteEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden card-hover">
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
                        <Button
                          size="sm"
                          className="bg-purple hover:bg-purple-dark"
                        >
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Star className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="font-serif text-xl font-bold mb-2">
                    No Favorites Yet
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    You haven't added any events to your favorites yet.
                  </p>
                  <Button className="bg-purple hover:bg-purple-dark">
                    Browse Events
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        {/* Recommendations Section */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-bold mb-6">
            Recommended For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedEvents.map((event) => (
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
