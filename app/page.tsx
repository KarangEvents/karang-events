import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import SuccessStories from "@/components/home/SuccessStories";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* About Us Section */}
      <About />
      {/* Contact Form Section */}
      <Contact />
      {/* Featured Events Section */}
      <FeaturedEvents />
      {/* Services Section */}
      <Services />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Success Stories Section */}
      <SuccessStories />
    </>
  );
}
