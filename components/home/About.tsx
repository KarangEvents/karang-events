import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";

const About = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-2 md:gap-12 items-center">
          <div className="animate-slide-in max-lg:order-2">

            <SectionTitle className="max-lg:hidden">
              About Us
            </SectionTitle>
            <p className="text-base md:text-xl text-gray-600 mb-6 leading-relaxed max-lg:text-center">
              A one-stop solution to bring your memories to life. We specialize
              in organizing events such as Corporate Events, Product Launches,
              Conferences, Weddings, Family Events and more.
            </p>
          <div className="flex max-lg:items-center max-lg:justify-center max-lg:mt-10">
              <Link href="/about">
                <Button size="xl" className="text-lg">
                  More About Us
                </Button>
              </Link>
          </div>
          </div>
          <div className="relative animate-fade-in max-lg:order-1">

            <div className="card-modern p-6 md:p-8">
              <div className="relative h-[400px] mb-6 rounded-xl overflow-hidden">

                <Image
                  src="/assets/home_about.png"
                  alt="Event presentation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold mb-1">150+</p>
                <p>Events Hosted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
