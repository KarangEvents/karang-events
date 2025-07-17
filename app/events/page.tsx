"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, Filter, MapPin, Search, Star, MessageCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for events
const allEvents = [
  {
    id: 1,
    title: "Corporate Gala Dinner",
    image: "/placeholder.svg?height=400&width=600",
    date: "June 15, 2023",
    location: "Grand Hyatt, New York",
    city: "New York",
    price: "$1,200",
    rating: 4.8,
    category: "Corporate",
  },
  {
    id: 2,
    title: "Wedding Reception Package",
    image: "/placeholder.svg?height=400&width=600",
    date: "Flexible Dates",
    location: "Beachfront Resort, Miami",
    city: "Miami",
    price: "$3,500",
    rating: 4.9,
    category: "Wedding",
  },
  {
    id: 3,
    title: "Tech Conference Setup",
    image: "/placeholder.svg?height=400&width=600",
    date: "September 10-12, 2023",
    location: "Convention Center, San Francisco",
    city: "San Francisco",
    price: "$5,000",
    rating: 4.7,
    category: "Conference",
  },
  {
    id: 4,
    title: "Birthday Celebration Package",
    image: "/placeholder.svg?height=400&width=600",
    date: "Customizable",
    location: "Various Venues, Delhi",
    city: "Delhi",
    price: "$800",
    rating: 4.6,
    category: "Birthday",
  },
  {
    id: 5,
    title: "Charity Fundraiser Gala",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 5, 2023",
    location: "Luxury Hotel, Chicago",
    city: "Chicago",
    price: "$2,500",
    rating: 4.5,
    category: "Charity",
  },
  {
    id: 6,
    title: "Product Launch Event",
    image: "/placeholder.svg?height=400&width=600",
    date: "July 22, 2023",
    location: "Modern Gallery, Los Angeles",
    city: "Los Angeles",
    price: "$4,200",
    rating: 4.8,
    category: "Corporate",
  },
  {
    id: 7,
    title: "Anniversary Celebration",
    image: "/placeholder.svg?height=400&width=600",
    date: "Customizable",
    location: "Rooftop Restaurant, Seattle",
    city: "Seattle",
    price: "$1,800",
    rating: 4.7,
    category: "Anniversary",
  },
  {
    id: 8,
    title: "Music Festival Production",
    image: "/placeholder.svg?height=400&width=600",
    date: "August 18-20, 2023",
    location: "Outdoor Park, Austin",
    city: "Austin",
    price: "$12,000",
    rating: 4.9,
    category: "Festival",
  },
  {
    id: 9,
    title: "Corporate Retreat",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 5-7, 2023",
    location: "Mountain Resort, Denver",
    city: "Denver",
    price: "$9,500",
    rating: 4.7,
    category: "Corporate",
  },
  {
    id: 10,
    title: "Wedding Ceremony Package",
    image: "/placeholder.svg?height=400&width=600",
    date: "Flexible Dates",
    location: "Garden Venue, Bengaluru",
    city: "Bengaluru",
    price: "$2,800",
    rating: 4.8,
    category: "Wedding",
  },
  {
    id: 11,
    title: "Tech Startup Meetup",
    image: "/placeholder.svg?height=400&width=600",
    date: "July 15, 2023",
    location: "Innovation Hub, Bengaluru",
    city: "Bengaluru",
    price: "$1,200",
    rating: 4.6,
    category: "Conference",
  },
  {
    id: 12,
    title: "Cultural Festival",
    image: "/placeholder.svg?height=400&width=600",
    date: "September 22-24, 2023",
    location: "Heritage Center, Delhi",
    city: "Delhi",
    price: "$3,500",
    rating: 4.9,
    category: "Festival",
  },
]

// Available cities for filter
const cities = [
  "All Cities",
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "New York",
  "Miami",
  "San Francisco",
  "Chicago",
  "Los Angeles",
  "Seattle",
  "Austin",
  "Denver",
]

// Available categories for filter
const categories = [
  "All Categories",
  "Corporate",
  "Wedding",
  "Conference",
  "Birthday",
  "Charity",
  "Anniversary",
  "Festival",
]

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [events, setEvents] = useState(allEvents)
  const [enquiryEvent, setEnquiryEvent] = useState<any>(null)
  const [enquiryFormOpen, setEnquiryFormOpen] = useState(false)
  const [enquirySubmitted, setEnquirySubmitted] = useState(false)
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    message: "",
  })

  // Filter events based on search query, city, and category
  const filterEvents = () => {
    let filtered = allEvents

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by city
    if (selectedCity !== "All Cities") {
      filtered = filtered.filter((event) => event.city === selectedCity)
    }

    // Filter by category
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((event) => event.category === selectedCategory)
    }

    setEvents(filtered)
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setTimeout(() => {
      filterEvents()
    }, 300)
  }

  // Handle city selection change
  const handleCityChange = (value: string) => {
    setSelectedCity(value)
    setTimeout(() => {
      filterEvents()
    }, 100)
  }

  // Handle category selection change
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
    setTimeout(() => {
      filterEvents()
    }, 100)
  }

  // Open enquiry form for a specific event
  const openEnquiryForm = (event: any) => {
    setEnquiryEvent(event)
    setEnquiryFormOpen(true)
    setEnquirySubmitted(false)
  }

  // Handle enquiry form input changes
  const handleEnquiryInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEnquiryForm((prev) => ({ ...prev, [name]: value }))
  }

  // Handle enquiry form submission
  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setEnquirySubmitted(true)
      // Reset form after submission
      setEnquiryForm({
        name: "",
        email: "",
        phone: "",
        guests: "",
        date: "",
        message: "",
      })
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-2">Discover Events</h1>
            <p className="text-muted-foreground">Find and book the perfect event package for your needs</p>
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
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
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
              <Card key={event.id} className="overflow-hidden card-hover h-full transition-all duration-300 group">
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
                  <h3 className="font-serif font-bold text-lg mb-2 line-clamp-2">{event.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-bold text-purple-dark">{event.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-gold fill-gold mr-1" />
                      <span className="text-sm">{event.rating}</span>
                    </div>
                  </div>

                  {/* Action Buttons - Appear on hover */}
                  <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href={`/payment?event=${event.id}`} className="flex-1">
                      <Button size="sm" className="w-full bg-purple hover:bg-purple-dark">
                        Book Now
                      </Button>
                    </Link>
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => openEnquiryForm(event)}>
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
            <h3 className="font-serif text-xl font-bold mb-2">No events found</h3>
            <p className="text-muted-foreground mb-6">We couldn't find any events matching your search criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedCity("All Cities")
                setSelectedCategory("All Categories")
                setEvents(allEvents)
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
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="bg-purple text-white">
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
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </nav>
          </div>
        )}
      </div>

      {/* Enquiry Modal */}
      <Dialog open={enquiryFormOpen} onOpenChange={setEnquiryFormOpen}>
        <DialogContent className="sm:max-w-[500px]">
          {!enquirySubmitted ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">Event Enquiry</DialogTitle>
                <DialogDescription>{enquiryEvent && `Send an enquiry about "${enquiryEvent.title}"`}</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleEnquirySubmit} className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={enquiryForm.name}
                      onChange={handleEnquiryInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={enquiryForm.email}
                      onChange={handleEnquiryInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={enquiryForm.phone}
                      onChange={handleEnquiryInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      value={enquiryForm.guests}
                      onChange={handleEnquiryInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={enquiryForm.date}
                    onChange={handleEnquiryInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={enquiryForm.message}
                    onChange={handleEnquiryInputChange}
                    placeholder="Please provide any additional details about your requirements..."
                  />
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-purple hover:bg-purple-dark">
                    Submit Enquiry
                  </Button>
                </DialogFooter>
              </form>
            </>
          ) : (
            <div className="py-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
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
                  className="h-8 w-8 text-green-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Enquiry Submitted!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for your interest. We have received your enquiry and our team will get back to you shortly.
              </p>
              <Button onClick={() => setEnquiryFormOpen(false)}>Close</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
