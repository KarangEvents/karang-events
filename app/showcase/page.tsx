import Image from "next/image"
import { Button } from "@/components/ui/button"
import InstaGrids from "@/components/showcase/InstaGrids"
import { client } from "@/sanity/client";
import ContactSection from "@/components/common/ContactSection";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants";


const SHOWCASE_QUERY = `*[_type == "showcase"]{
  _id,
  instagramUrl,
}`;

const options = { next: { revalidate: 300 } };


export default async function ShowcasePage() {

  const links = await client.fetch(SHOWCASE_QUERY, {}, options)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/showcase-bg.jpg"
            alt="Showcase hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-purple-dark/70 to-purple/60"></div>
        </div>

        {/* Video Play Button Overlay */}
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl animate-fade-in">
            Our Work Speaks for Itself
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-100">
            Discover the magic we create through our portfolio of exceptional events, from intimate celebrations to
            grand corporate gatherings.
          </p>
          <Link href={"/showcase#insta"}>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Watch Highlight Reel
            </Button>

          </Link>
        </div>
      </section>



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
