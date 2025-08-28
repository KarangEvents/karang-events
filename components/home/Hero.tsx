import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative h-[400px] md:h-[90vh] flex place-content-center bg-[url('/assets/hero.png')] bg-cover bg-center">
      {/* Overlay to darken the image */}

      <div className="relative z-10 my-auto">
        <div className="text-center flex flex-col items-center justify-center md:max-w-2xl mx-auto px-4">
          <p className="text-lg md:text-xl mb-4 animate-fade-in">
            Welcome to Karang Events
          </p>
          <h1 className="max-sm:max-w-xs text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in !leading-tight">
            Bring Your Memories to Life
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
            From grand celebrations to meaningful milestones, we turn every
            event into a lasting memory.
          </p>
          <div className="animate-fade-in">
            <Link href="/events">
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
