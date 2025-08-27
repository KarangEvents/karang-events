import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import SuccessStories from "@/components/home/SuccessStories";
import { sanityFetch } from "@/sanity/client";

const REVIEWS_QUERY = `*[_type == "homeReview"] | order(_createdAt desc) {
  _id,
  reviewerName,
  reviewerRole,
  rating,
  reviewText
}`;

const SUCCESS_STORIES_QUERY = `*[_type == "successStory"] | order(_createdAt desc) {
  _id,
  eventName,
  "category": category->name,
  "picture": picture.asset->url
}`;



export default async function HomePage() {
  const reviews = await sanityFetch({ query: REVIEWS_QUERY });
  const successStories = await sanityFetch({ query: SUCCESS_STORIES_QUERY });

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
      <Testimonials reviews={reviews} />
      {/* Success Stories Section */}
      <SuccessStories
        successStories={successStories}
      />
    </>
  );
}

