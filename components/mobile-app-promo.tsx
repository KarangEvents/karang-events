import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function MobileAppPromo() {
  return (
    <section className="bg-purple-light/30 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-midnight-dark mb-4">
              Take Karang Events With You
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg">
              Download our app to manage and explore events on the go. Get exclusive mobile-only deals, instant
              notifications, and seamless booking right from your phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 h-14 px-6 hover:bg-muted/50 transition-all duration-200"
              >
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-base font-medium">App Store</span>
                </div>
                <svg viewBox="0 0 24 24" className="h-6 w-6 ml-2" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.0754 19.5626C16.3166 20.2787 15.4644 20.1137 14.6502 19.7852C13.7969 19.4488 13.0069 19.4332 12.1069 19.7852C10.9736 20.2398 10.3529 20.0748 9.68994 19.5626C6.20333 16.1762 6.73875 10.8667 10.7329 10.6938C11.7242 10.7559 12.3994 11.2681 12.9659 11.3068C13.8114 11.1496 14.6256 10.6239 15.5489 10.7093C16.6744 10.8199 17.5044 11.3068 18.0164 12.1464C15.4644 13.6952 16.0929 17.0359 18.3994 17.9532C17.9964 18.5509 17.5666 19.1486 17.0754 19.5626ZM12.8904 10.6083C12.7394 9.02123 14.0004 7.71429 15.5099 7.55714C15.7144 9.36905 13.9474 10.7404 12.8904 10.6083Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 h-14 px-6 hover:bg-muted/50 transition-all duration-200"
              >
                <div className="flex flex-col items-start">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-base font-medium">Google Play</span>
                </div>
                <svg viewBox="0 0 24 24" className="h-6 w-6 ml-2" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.6644 12.6783L13.9244 15.4183L6.44444 8L13.9244 0.581723L16.6644 3.32172L11.9244 8L16.6644 12.6783Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2.14444 0.218323C1.78444 0.418323 1.55444 0.778323 1.55444 1.21832V14.7783C1.55444 15.2183 1.78444 15.5783 2.14444 15.7783L11.9244 8L2.14444 0.218323Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.6644 12.6783L13.9244 15.4183L11.9244 13.4183L11.9244 8L13.9244 2.58172L16.6644 5.32172L11.9244 10L16.6644 12.6783Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2.14444 15.7817C2.50444 15.9817 2.96444 15.9417 3.38444 15.6617L13.9244 9.41832L11.9244 7.41832L2.14444 15.7817Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-[400px] w-full md:h-[500px]">
              <Image
                src="/placeholder.svg?height=1000&width=500"
                alt="Karang Events Mobile App"
                fill
                className="object-contain"
              />
              <div className="absolute -top-4 -left-4 h-24 w-24 bg-purple/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 h-32 w-32 bg-gold/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
