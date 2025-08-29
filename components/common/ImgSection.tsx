import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
  overlay?: string; // Tailwind color/gradient classes
  as?: "h1" | "h2"; // semantic flexibility
}

export default function ImgSection({
  title,
  subtitle,
  buttonText,
  buttonHref,
  backgroundImage,
  overlay = "bg-black/50", // default
  as: HeadingTag = "h1",
}: HeroProps) {
  return (
    <section className="relative min-h-[350px] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Overlay */}
      {overlay && <div className={`absolute inset-0 ${overlay}`} />}

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 text-center text-white flex flex-col items-center">
        <HeadingTag className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6  sm:max-w-4xl leading-snug">
          {title}
        </HeadingTag>
        {subtitle && (
          <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl text-gray-100">
            {subtitle}
          </p>
        )}
        {buttonText && buttonHref && (
          <Link href={buttonHref}>
            <Button
              size="lg"
              variant="outline"
            >
              {buttonText}
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
}
