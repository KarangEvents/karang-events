"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Filter,
  MapPin,
  Search,
  Star,
  MessageCircle,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { EVENT_CATEGORIES, EVENT_CITIES, EVENTS_DATA } from "@/constants";
import EnquiryModal from "@/components/modal/EnquiryModal";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [events, setEvents] = useState(EVENTS_DATA);
  const [enquiryFormOpen, setEnquiryFormOpen] = useState(false);

  // Filter events based on search query, city, and category
  const filterEvents = () => {
    let filtered = EVENTS_DATA;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by city
    if (selectedCity !== "All Cities") {
      filtered = filtered.filter((event) => event.city === selectedCity);
    }

    // Filter by category
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter(
        (event) => event.category === selectedCategory
      );
    }

    setEvents(filtered);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setTimeout(() => {
      filterEvents();
    }, 300);
  };

  // Handle city selection change
  const handleCityChange = (value: string) => {
    setSelectedCity(value);
    setTimeout(() => {
      filterEvents();
    }, 100);
  };

  // Handle category selection change
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setTimeout(() => {
      filterEvents();
    }, 100);
  };

  // Open enquiry form for a specific event
  const openEnquiryForm = (event: any) => {
    setEnquiryFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
      <div className="container  py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-2">
              Discover Events
            </h1>
            <p className="text-muted-foreground">
              Find and book the perfect event package for your needs
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                className="pl-9"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCity} onValueChange={handleCityChange}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Location" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {EVENT_CITIES.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedCategory}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger className="w-full sm:w-[180px]">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {EVENT_CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {events.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden card-hover h-full transition-all duration-300 group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-bold text-purple-dark">
                      {event.price}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-gold fill-gold mr-1" />
                      <span className="text-sm">{event.rating}</span>
                    </div>
                  </div>

                  {/* Action Buttons - Appear on hover */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <Link
                      href={`/events/${event.id}`}
                      className="w-full"
                      passHref
                    >
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
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">
              No events found
            </h3>
            <p className="text-muted-foreground mb-6">
              We couldn't find any events matching your search criteria.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCity("All Cities");
                setSelectedCategory("All Categories");
                setEvents(EVENTS_DATA);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {events.length > 0 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Previous page</span>
                <FaChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-purple text-white"
              >
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                5
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Next page</span>
                <FaChevronRight className="h-4 w-4" />
              </Button>
            </nav>
          </div>
        )}
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal
        enquiryFormOpen={enquiryFormOpen}
        setEnquiryFormOpen={() => setEnquiryFormOpen(false)}
      />
    </div>
  );
}
