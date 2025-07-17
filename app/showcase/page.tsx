"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Heart, MessageCircle, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Sample data for featured events
const featuredEvents = [
  {
    id: 1,
    title: "Tech Innovation Summit 2023",
    date: "March 15, 2023",
    location: "Silicon Valley Convention Center",
    category: "Corporate",
    image: "/placeholder.svg?height=600&width=800",
    description: "A groundbreaking tech summit bringing together industry leaders and innovators.",
    attendees: 500,
    highlights: ["Keynote by Tech CEOs", "Product Launches", "Networking Sessions"],
  },
  {
    id: 2,
    title: "Sarah & Michael's Dream Wedding",
    date: "June 10, 2023",
    location: "Oceanview Resort, Malibu",
    category: "Wedding",
    image: "/placeholder.svg?height=600&width=800",
    description: "An enchanting beachfront wedding celebration with stunning sunset views.",
    attendees: 150,
    highlights: ["Beachfront Ceremony", "Gourmet Dining", "Live Band Performance"],
  },
  {
    id: 3,
    title: "Annual Charity Gala",
    date: "September 22, 2023",
    location: "Grand Ballroom, NYC",
    category: "Charity",
    image: "/placeholder.svg?height=600&width=800",
    description: "An elegant evening raising funds for children's education initiatives.",
    attendees: 300,
    highlights: ["Celebrity Guests", "Silent Auction", "Award Ceremony"],
  },
  {
    id: 4,
    title: "Product Launch Spectacular",
    date: "November 8, 2023",
    location: "Innovation Hub, Austin",
    category: "Corporate",
    image: "/placeholder.svg?height=600&width=800",
    description: "A high-energy product launch event with immersive experiences.",
    attendees: 250,
    highlights: ["Interactive Demos", "VR Experiences", "Media Coverage"],
  },
  {
    id: 5,
    title: "Cultural Heritage Festival",
    date: "August 18, 2023",
    location: "Heritage Park, Delhi",
    category: "Festival",
    image: "/placeholder.svg?height=600&width=800",
    description: "A vibrant celebration of cultural diversity and traditions.",
    attendees: 1000,
    highlights: ["Traditional Performances", "Artisan Markets", "Food Festival"],
  },
  {
    id: 6,
    title: "Executive Leadership Retreat",
    date: "October 5, 2023",
    location: "Mountain Resort, Colorado",
    category: "Corporate",
    image: "/placeholder.svg?height=600&width=800",
    description: "An exclusive retreat for C-level executives and thought leaders.",
    attendees: 80,
    highlights: ["Strategic Sessions", "Team Building", "Wellness Activities"],
  },
]

// Sample Instagram posts data
const instagramPosts = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=400",
    caption: "Behind the scenes of our latest corporate gala setup! ✨ #KarangEvents #EventPlanning",
    likes: 245,
    comments: 18,
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=400",
    caption: "Beautiful floral arrangements for today's wedding ceremony 🌸 #WeddingDecor #EventDesign",
    likes: 189,
    comments: 12,
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=400",
    caption: "Tech conference setup in progress! Innovation meets elegance 🚀 #TechEvents #Innovation",
    likes: 156,
    comments: 8,
    timestamp: "1 day ago",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=400",
    caption: "Sunset ceremony vibes at our beachfront venue 🌅 #BeachWedding #SunsetCeremony",
    likes: 312,
    comments: 25,
    timestamp: "2 days ago",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=400&width=400",
    caption: "Elegant table settings for tonight's charity gala 🍽️ #CharityEvent #ElegantDining",
    likes: 198,
    comments: 14,
    timestamp: "3 days ago",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=400&width=400",
    caption: "Team photo from our latest successful event! 📸 #TeamWork #EventSuccess",
    likes: 267,
    comments: 22,
    timestamp: "4 days ago",
  },
]

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    event: "Dream Wedding",
    quote:
      "Karang Events made our wedding day absolutely magical. Every detail was perfect, from the stunning beachfront setup to the seamless coordination. We couldn't have asked for a better team!",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, TechCorp",
    event: "Product Launch",
    quote:
      "The product launch event exceeded all our expectations. The team's creativity and attention to detail helped us create an unforgettable experience for our guests and media.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Charity Director",
    event: "Annual Charity Gala",
    quote:
      "Working with Karang Events was a pleasure. They understood our mission and created an elegant evening that helped us raise significant funds for our cause.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Event Coordinator",
    event: "Corporate Retreat",
    quote:
      "The level of professionalism and creativity shown by the Karang Events team was outstanding. Our executive retreat was both productive and memorable.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

export default function ShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const categories = ["All", "Corporate", "Wedding", "Charity", "Festival"]

  const filteredEvents =
    selectedCategory === "All" ? featuredEvents : featuredEvents.filter((event) => event.category === selectedCategory)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Showcase hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-purple-dark/70 to-purple/60"></div>
        </div>

        {/* Video Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="lg"
            className="h-20 w-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/50 transition-all duration-300 hover:scale-110"
          >
            <Play className="h-8 w-8 text-white ml-1" />
            <span className="sr-only">Play showcase video</span>
          </Button>
        </div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl animate-fade-in">
            Our Work Speaks for Itself
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-100">
            Discover the magic we create through our portfolio of exceptional events, from intimate celebrations to
            grand corporate gatherings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-purple hover:bg-white/90 transition-all duration-200">
              View Our Portfolio
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Watch Highlight Reel
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Events Gallery */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-4">
              Featured Events Portfolio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collection of successful events that showcase our expertise across various categories.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "transition-all duration-200",
                  selectedCategory === category
                    ? "bg-purple hover:bg-purple-dark"
                    : "hover:bg-purple/10 hover:border-purple",
                )}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <Card
                key={event.id}
                className="overflow-hidden card-hover group transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-midnight-dark">
                      {event.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-purple transition-colors duration-200">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>

                  {/* Event Highlights */}
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {event.highlights.slice(0, 2).map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {event.highlights.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{event.highlights.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-purple group-hover:text-white group-hover:border-purple transition-all duration-200 bg-transparent"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 md:py-24 bg-purple-light/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-4">Follow Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay connected with us on Instagram for behind-the-scenes content, event highlights, and inspiration.
            </p>
            <div className="mt-6">
              <Button
                variant="outline"
                className="hover:bg-purple hover:text-white transition-all duration-200 bg-transparent"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow @KarangEvents
              </Button>
            </div>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden card-hover group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt="Instagram post"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-4 text-white">
                      <div className="flex items-center gap-1">
                        <Heart className="h-5 w-5" />
                        <span className="font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-5 w-5" />
                        <span className="font-medium">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{post.caption}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.timestamp}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-midnight text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from those who have experienced the Karang Events difference firsthand.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-midnight-light rounded-lg p-8 md:p-12 text-center">
              <div className="mb-6">
                <div className="relative h-20 w-20 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-gold fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="text-lg md:text-xl italic mb-6 text-gray-200">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div>
                <p className="font-bold text-white">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm text-gray-400">{testimonials[currentTestimonial].role}</p>
                <p className="text-sm text-purple-light">{testimonials[currentTestimonial].event}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-200",
                    index === currentTestimonial ? "bg-white w-8" : "bg-white/40",
                  )}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple to-purple-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Ready to Create Your Own Success Story?
              </h2>
              <p className="text-white/90 max-w-xl">
                Let us help you create an unforgettable event that will be featured in our next showcase. Our team of
                experts is ready to bring your vision to life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple hover:bg-white/90 transition-all duration-200">
                  Start Planning
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Browse Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
