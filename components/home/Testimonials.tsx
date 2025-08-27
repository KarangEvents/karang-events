"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/constants";
import {  FaUser } from "react-icons/fa6";
import SectionTitle from "../common/SectionTitle";
import { IReview } from "@/types";


export default function TestimonialsCarousel({reviews}: {reviews: IReview[]}) {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 1 },
      },
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: true,
      }),
    ]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="section-padding relative  bg-[url('/assets/testimonial-bg-pattern.png')] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#32174D]/90 z-0" />

      {/* Content */}

      {/* Section Title */}
      <div className="container z-10 text-white relative">
        <div className="text-center mb-10">
          <SectionTitle>
            What Our Clients Say
          </SectionTitle>
          <p className="text-base md:text-xl text-purple-100">
            Hear from those who have experienced the Karang Events difference
          </p>
        </div>
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((testimonial) => (
                <div
                  key={testimonial._id}
                  className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 px-4"
                >
                  <Card className="card-modern p-6 md:p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
                    <div className="text-center">
                      {/* Avatar */}
                      <div className="relative w-16 h-16 flex items-center justify-center rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-white/20">
                        <FaUser size={35} />
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current mx-0.5"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-sm md:text-base italic mb-6 text-purple-100 leading-relaxed line-clamp-4">
                        "{testimonial.reviewText}"
                      </blockquote>

                      {/* Author Info */}
                      <div>
                        <p className="font-bold text-white text-base mb-1">
                          {testimonial.reviewerName}
                        </p>
                        <p className="text-purple-200 text-sm">
                          {testimonial.reviewerRole}

                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "relative h-3 rounded-full transition-all duration-300 ease-out",
                  index === selectedIndex
                    ? "w-8 bg-white shadow-lg"
                    : "w-3 bg-white/40 hover:bg-white/60"
                )}
                onClick={() => scrollTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {/* Active dot animation */}
                {index === selectedIndex && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-purple-200 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
