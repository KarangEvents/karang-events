"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import { urlFor } from "@/sanity/SanityImageUrl";
import type { SanityImageObject } from "@sanity/image-url/lib/types/types";
import type { IGallery } from "@/types";

type HeroSliderProps = {
  slides: IGallery[];
  options?: EmblaOptionsType;
};

const HeroSlider: React.FC<HeroSliderProps> = ({ slides, options }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;

    const index = emblaMainApi.selectedScrollSnap();
    setSelectedIndex(index);
    emblaThumbsApi.scrollTo(index);
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;

    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <section className="max-w-5xl mx-auto">
      {/* Main Slider */}
      <div className="overflow-hidden rounded-xl" ref={emblaMainRef}>
        <div className="flex gap-4">
          {slides.map((image) => (
            <div
              key={image._key}
              className="flex-[0_0_100%] relative h-[300px] md:h-[380px] rounded-xl overflow-hidden"
            >
              <Image
                src={urlFor(image as SanityImageObject)
                  .width(1000)
                  .height(600)
                  .url()}
                alt={"Gallery image"}
                fill
                className="object-cover transition-transform duration-300"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-6">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex gap-4">
            {slides.map((image, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={image._key}
                  onClick={() => onThumbClick(index)}
                  className={`w-24 h-20 md:w-28 md:h-24 rounded-lg overflow-hidden border-2 focus:outline-none transition-all ${
                    isSelected
                      ? "border-yellow-400 shadow-md"
                      : "border-transparent"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <Image
                    src={urlFor(image as SanityImageObject)
                      .width(120)
                      .height(100)
                      .url()}
                    alt={`Thumbnail ${index + 1}`}
                    width={120}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
