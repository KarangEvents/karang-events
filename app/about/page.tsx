import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, CheckCircle, MapPin, Users } from "lucide-react"

// Sample team data
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 15 years in event management, Sarah founded Karang Events to bring premium experiences to clients.",
  },
  {
    name: "Michael Chen",
    role: "Chief Operations Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Michael oversees all operations, ensuring every event meets our high standards of excellence.",
  },
  {
    name: "Jessica Williams",
    role: "Head of Vendor Relations",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Jessica works closely with our network of premium vendors to curate exceptional event experiences.",
  },
  {
    name: "David Patel",
    role: "Customer Experience Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "David ensures every client receives personalized attention and support throughout their journey with us.",
  },
]

// Sample values
const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every event we manage, paying meticulous attention to detail.",
    icon: <CheckCircle className="h-8 w-8 text-purple" />,
  },
  {
    title: "Innovation",
    description: "We continuously innovate to create unique and memorable experiences for our clients.",
    icon: (
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
        className="h-8 w-8 text-purple"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "We operate with transparency and honesty in all our dealings with clients and vendors.",
    icon: (
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
        className="h-8 w-8 text-purple"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-midnight-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Karang Events</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              We create memorable experiences through meticulous planning and flawless execution.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2018, Karang Events was born from a passion for creating exceptional event experiences. What
                began as a small team with big dreams has grown into a premier event management platform connecting
                clients with top-tier vendors and venues.
              </p>
              <p className="text-muted-foreground mb-6">
                Our journey has been defined by our commitment to excellence, attention to detail, and dedication to
                turning our clients' visions into reality. From intimate gatherings to grand celebrations, we approach
                each event with the same level of care and creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple hover:bg-purple-dark">
                  <Calendar className="mr-2 h-4 w-4" /> Browse Events
                </Button>
                <Button variant="outline">
                  <Users className="mr-2 h-4 w-4" /> Meet Our Team
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Karang Events team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-purple-light/20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-6">Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-bold text-purple mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To transform ordinary occasions into extraordinary experiences by connecting clients with exceptional
                vendors and venues, while providing seamless planning and execution services that exceed expectations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-bold text-gold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading event management platform that sets the standard for excellence, innovation, and
                customer satisfaction in the industry, creating memorable experiences that bring joy and celebration to
                people's lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-6">Our Values</h2>
            <p className="text-muted-foreground">These core principles guide everything we do at Karang Events.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="font-serif text-xl font-bold text-midnight-dark mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-light/20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-6">Meet Our Team</h2>
            <p className="text-muted-foreground">
              The passionate professionals behind Karang Events who work tirelessly to bring your events to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-purple mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-midnight-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-gray-300">
              Discover what sets Karang Events apart from other event management platforms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-midnight p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-purple/20 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-purple" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Experienced Vendors</h3>
              <p className="text-gray-300">
                We partner with only the most experienced and reliable vendors in the industry.
              </p>
            </div>
            <div className="bg-midnight p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-purple/20 flex items-center justify-center mb-4">
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
                  className="h-6 w-6 text-purple"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Custom Event Packages</h3>
              <p className="text-gray-300">Tailored solutions designed to meet your specific needs and preferences.</p>
            </div>
            <div className="bg-midnight p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-purple/20 flex items-center justify-center mb-4">
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
                  className="h-6 w-6 text-purple"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Reliable Support</h3>
              <p className="text-gray-300">Our dedicated team provides support at every step of your event journey.</p>
            </div>
            <div className="bg-midnight p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-purple/20 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-purple" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Premium Venues</h3>
              <p className="text-gray-300">
                Access to exclusive venues that provide the perfect backdrop for your event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple to-purple-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Perfect Event?</h2>
              <p className="text-white/90 max-w-xl">
                Let our team of experts help you design and execute an unforgettable experience tailored to your vision.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple hover:bg-white/90">
                  Contact Us
                </Button>
              </Link>
              <Link href="/events">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Browse Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
