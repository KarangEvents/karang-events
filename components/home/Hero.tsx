import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex place-content-center bg-[url('/assets/Hero-Gradient.png')] bg-cover bg-center">
      {/* Overlay to darken the image */}

      <div className="container-custom relative z-10 my-auto">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg mb-4 animate-fade-in">
            Welcome to Karang Events
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Bring Your
            <br />
            <span className="">Memories to Life</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
            From grand celebrations to meaningful milestones, we turn every
            event into a lasting memory.
          </p>
          <div className="animate-fade-in">
            <Link href="/">
              <Button
                size={"xl"}
                className="text-lg font-semibold tracking-wide"
              >
                Explore Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
