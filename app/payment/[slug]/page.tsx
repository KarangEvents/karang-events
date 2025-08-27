import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Smartphone } from "lucide-react";
import RightColumn from "@/components/payment/RightColumn";
import BottomSection from "@/components/payment/BottomSection";
import { WHATSAPP_NUMBER } from "@/constants";
import { ISingleEvent } from "@/types";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/SanityImageUrl";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

const SINGLE_EVENTS_QUERY = `*[_type == "event" && slug.current == $slug][0]{
  _id,
  _type,
  title,
  image,
  location,
  area->{
    _id,
    name
  },
  price,
  originalPriceAmount,
}`;


type Params = Promise<{ slug: string }>;


export default async function PaymentPage({ params }: { params: Params }) {


  const { slug } = await params;

  const eventData: ISingleEvent = await client.fetch(SINGLE_EVENTS_QUERY, {
    slug,
  });

  if (!eventData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-purple-light/20 to-white p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif">
              Event Not Found
            </CardTitle>
            <CardDescription>
              We couldn't find the event you're looking for.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="text-muted-foreground mb-6">
              Please go back and select an event to book.
            </p>
            <Link href="/events">
              <Button>Browse Events</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white py-12">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-midnight-dark mb-2">
            Complete Your Booking
          </h1>
          <p className="text-muted-foreground">
            Scan QR code to pay • Send screenshot on WhatsApp • Get confirmation
          </p>
        </div>

        {/* Main Payment Card */}
        <Card className="shadow-lg animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-purple to-purple-dark text-white text-center py-4">
            <CardTitle className="text-xl font-serif">
              Payment Required : <span className="text-white ml-1">₹ {eventData.price}</span>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Event Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className="relative h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={urlFor(eventData.image as SanityImageObject).url()}
                      alt={"Event Image"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-sm md:text-base">
                    {eventData.title}

                  </h3>
                </div>

                {/* Payment Summary */}
                <div className="bg-muted/50 p-3 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Payment Summary</h4>
                  <div className="space-y-2 text-xs md:text-sm">
                    <div className="flex justify-between">
                      <span>Event Price:</span>
                      <span>₹ {eventData.originalPriceAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span> Discount:</span>
                      <span>₹ {
                        Number(eventData.originalPriceAmount) - Number(eventData.price)
                      }</span>
                    </div>
                    <Separator className="my-1" />
                    <div className="flex justify-between font-medium text-purple-dark">
                      <span>Total:</span>
                      <span>₹ {eventData.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column - QR Code */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative size-48 rounded-lg p-2 mb-3 shadow-xl">
                  <Image
                    src="/assets/qr.jpeg"
                    alt="Payment QR Code"
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <p className="text-xs text-center text-muted-foreground mb-2">
                  Scan with any UPI app
                </p>
                <p className="text-primary font-medium text-sm mb-2">
                  <span className="text-black">UPI ID:</span> 9108496207@hdfc
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Smartphone className="h-3 w-3" />
                  <span>Google Pay • PhonePe • Paytm</span>
                </div>
              </div>

              {/* Right Column - Instructions & WhatsApp */}
              <RightColumn amount={Number(eventData.price)} />

            </div>

            {/* Bottom Actions */}
            <BottomSection />
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Need help? Contact us at{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Karangevents@gmail.com
            </Link>{" "}
            or call{" "}
            <a href="tel:+1234567890" className="text-primary hover:underline">
              +91 {WHATSAPP_NUMBER}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
