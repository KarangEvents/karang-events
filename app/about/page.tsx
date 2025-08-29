import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle, MapPin, Section, Users } from "lucide-react";
import { LuHandshake } from "react-icons/lu";
import { MdStarBorderPurple500 } from "react-icons/md";
import { FaRegLightbulb, FaWhatsapp } from "react-icons/fa6";
import { LuHandHeart } from "react-icons/lu";
import { FaBalanceScale } from "react-icons/fa";
import ContactSection from "@/components/common/ContactSection";
import SectionTitle from "@/components/common/SectionTitle";
import { TEAM_MEMBERS } from "@/constants";
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: 'About | Karang Events',
  description: "Karang helps you find and book the perfect venue in Bangalore. From weddings to meetings, enjoy reliable options and transparent pricing."
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[500px] bg-[url('/assets/about-bg.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-[#32174DE5] z-0" /> */}

        <div className="z-10 relative container text-white">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              About Karang Events
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-xl text-balance">
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
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-[70%] w-full">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground mb-4">
              Three Paths, One Vision
              Gagan Gowda, Keerthi Nagaraj, and Navya Nagaraj come from unique backgrounds, each bringing their own skills, ideas, and dreams. One shared passion unites them—creating celebrations that last forever.
              From chai-fueled brainstorming to late-night planning calls, Karang Events is built on friendship and trust.
              We are driven by passion—crafting perfect atmospheres and curating moments that feel magical.
            </p>
            <p className="text-muted-foreground mb-6">
              Every event is crafted with purpose, whether intimate or grand.
              We put people first, treating your vision as our own and every guest like a friend.
              From baby showers to milestone celebrations, every detail is handled with care.
              For us, it’s more than event management—it’s about making memories.
              Karang Events – Passion in Every Detail, Magic in Every Celebration.
            </p>
            <div className="flex flex-row gap-4">
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
          <div className="relative hidden md:block md:w-[30%]  h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/assets/team.jpeg"
              alt="Karang Events team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-purple-light/20">
        <div className="container">
          <div className="mx-auto text-center mb-10">
            <SectionTitle>
              Mission & Vision
            </SectionTitle>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-purple mb-2 md:mb-4 text-center md:text-left">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                We aim to simplify the venue selection journey by providing a
                seamless platform to compare hunt and book the perfect event
                spaces that match user’s purpose, location, and budget.
              </p>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-xl md:text-2xl  font-bold text-gold mb-2 md:mb-4 text-center md:text-left">
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
          <div className="max-w-3xl mx-auto text-center mb-10">
            <SectionTitle>
              Our Values
            </SectionTitle>
            <p className="text-muted-foreground">
              These core principles guide everything we do at Karang Events.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-5 md:p-8 rounded-lg shadow-md text-center"
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
          <div className="max-w-3xl mx-auto text-center mb-10">
            <SectionTitle>
              Meet Our Team
            </SectionTitle>
            <p className="text-muted-foreground">
              The passionate professionals behind Karang Events who work
              tirelessly to bring your events to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-serif font-bold text-lg mb-1">
                    {member.name}
                  </h3>
                 
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
          <div className="max-w-3xl mx-auto text-center mb-10">
            <SectionTitle>
              Why Choose Us?
            </SectionTitle>
            <p className="text-gray-300">
              Discover what sets Karang Events apart from other event management
              platforms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div className="bg-midnight p-4 md:p-6 rounded-lg" key={index}>
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
      <ContactSection />
    </div>
  );
}
