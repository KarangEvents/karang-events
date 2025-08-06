import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle, MapPin, Users } from "lucide-react";
import { LuHandshake } from "react-icons/lu";
import { MdStarBorderPurple500 } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa6";
import { LuHandHeart } from "react-icons/lu";
import { FaBalanceScale } from "react-icons/fa";

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
];

// Sample values
const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every event we manage, paying meticulous attention to detail.",
    icon: <MdStarBorderPurple500 className="h-8 w-8 text-purple" />,
  },
  {
    title: "Innovation",
    description:
      "We continuously innovate to create unique and memorable experiences for our clients.",
    icon: <FaRegLightbulb className="h-8 w-8 text-purple" />,
  },
  {
    title: "Integrity",
    description:
      "We operate with transparency and honesty in all our dealings with clients and vendors.",
    icon: <LuHandshake className="h-8 w-8 text-purple" />,
  },
];

// Sample why choose us section
const whyChooseUs = [
  {
    icon: <CheckCircle className="size-6 text-purple" />,
    title: "Experienced Vendors",
    description:
      "We partner with only the most experienced and reliable vendors in the industry.",
  },
  {
    title: "Custom Event Packages",
    description:
      "Tailored solutions designed to meet your specific needs and preferences.",
    icon: <FaBalanceScale className="size-6 text-purple" />,
  },
  {
    title: "Reliable Support",
    description:
      "Our dedicated team provides support at every step of your event journey.",
    icon: <LuHandHeart className="size-6 text-purple" />,
  },
  {
    title: "Premium Venues",
    description:
      "Access to exclusive venues that provide the perfect backdrop for your event.",
    icon: <MapPin className="size-6 text-purple" />,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-[url('/assets/about-bg.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-[#32174DE5] z-0" /> */}

        <div className="z-10 relative container text-white">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              About Karang Events
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-balance">
              At Karang, we believe that finding the perfect venue should be
              simple, smart, and stress-free. Whether it's a wedding, birthday,
              business meeting, or casual gathering, we help you hunt, compare,
              and book the ideal venue—right around you. Our easy-to-use
              platform which offer reliable options, transparent pricing, and a
              smooth booking experience—all in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="section-padding container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2018, Karang Events was born from a passion for
              creating exceptional event experiences. What began as a small team
              with big dreams has grown into a premier event management platform
              connecting clients with top-tier vendors and venues.
            </p>
            <p className="text-muted-foreground mb-6">
              Our journey has been defined by our commitment to excellence,
              attention to detail, and dedication to turning our clients'
              visions into reality. From intimate gatherings to grand
              celebrations, we approach each event with the same level of care
              and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"/events"} passHref>
                <Button className="px-6 py-6">
                  <Calendar className="mr-1 size-4" /> Browse Events
                </Button>
              </Link>
              <Link href={"/about#team"} passHref>
                <Button variant="outline" className="px-6 py-6">
                  <Users className="mr-1 size-4" /> Meet Our Team
                </Button>
              </Link>
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
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-purple-light/20">
        <div className="container ">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-6">
              Mission & Vision
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-bold text-purple mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                We aim to simplify the venue selection journey by providing a
                seamless platform to compare hunt and book the perfect event
                spaces that match user’s purpose, location, and budget.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-bold text-gold mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be the most trusted and hassle-free platform for discovering
                and booking the perfect venue, empowering users to confidently
                choose with transparency and speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-6">
              Our Values
            </h2>
            <p className="text-muted-foreground">
              These core principles guide everything we do at Karang Events.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="font-serif text-xl font-bold text-midnight-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="section-padding bg-gradient-to-b from-white to-purple-light/20"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-6">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground">
              The passionate professionals behind Karang Events who work
              tirelessly to bring your events to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-purple mb-3 font-medium">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-midnight-dark text-white">
        <div className="container ">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Why Choose Us?
            </h2>
            <p className="text-gray-300">
              Discover what sets Karang Events apart from other event management
              platforms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div className="bg-midnight p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple to-purple-dark text-white">
        <div className="container ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Ready to Create Your Perfect Event?
              </h2>
              <p className="text-white/90 max-w-xl">
                Let our team of experts help you design and execute an
                unforgettable experience tailored to your vision.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/contact" passHref>
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link href="/events" passHref>
                <Button size="lg" variant={"outline"}>
                  Browse Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
