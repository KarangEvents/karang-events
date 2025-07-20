import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const About = () => {
  return (
    <section className="section-padding bg-white container">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A one-stop solution to bring your memories to life. We specialize
              in organizing events such as Corporate Events, Product Launches,
              Conferences, Weddings, Family Events and more.
            </p>
            <Link href="/">
              <Button size="xl" className="text-lg">
                More About Us
              </Button>
            </Link>
          </div>
          <div className="relative animate-fade-in">
            <div className="card-modern p-8 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
              <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Event presentation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-purple-200">Events Hosted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
