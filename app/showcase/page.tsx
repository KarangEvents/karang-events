import Image from "next/image"
import { Button } from "@/components/ui/button"
import InstaGrids from "@/components/showcase/InstaGrids"
import {  sanityFetch } from "@/sanity/client";
import ContactSection from "@/components/common/ContactSection";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants";
import { Metadata } from "next";
import ImgSection from "@/components/common/ImgSection";

const SHOWCASE_QUERY = `*[_type == "showcase"]{
  _id,
  instagramUrl,
}`;

export const metadata: Metadata = {
  title: 'Showcase | Karang Events',
  description: "Explore the creative side of Karang Events with our showcase. See our past events, client testimonials, and the magic we've created.",
}

export default async function ShowcasePage() {

  const links = await sanityFetch({ query: SHOWCASE_QUERY })

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
      {/* Hero Section */}

        <ImgSection
          title="Our Work Speaks for Itself"
          subtitle="Discover the magic we create through our portfolio of exceptional events, from intimate celebrations to grand corporate gatherings."
          buttonText="Watch Highlight Reel"
          buttonHref="/showcase#insta"
          backgroundImage="/assets/showcase-bg.jpg"
          overlay="bg-gradient-to-r from-midnight/80 via-purple-dark/70 to-purple/60"
        />


      {/* Instagram Feed Section */}
      <section className="section-padding bg-purple-light/20" id="insta">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-4">Follow Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay connected with us on Instagram for behind-the-scenes content, event highlights, and inspiration.
            </p>
            <div className="mt-6">
              <Link href={SOCIAL_LINKS[1].href} target="_blank">

                <Button>
                  <FaInstagram className="h-5 w-5 mr-2" />
                  Follow @KarangEvents
                </Button>
              </Link>
            </div>
          </div>

          {/* Instagram Grid */}
          <InstaGrids
            links={links}
          />
        </div>
      </section>


      {/* Call to Action Section */}
      <ContactSection />
    </div>
  )
}
