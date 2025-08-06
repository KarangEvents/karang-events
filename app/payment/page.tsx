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

export default function PaymentPage() {
  const booking = true;

  if (!booking) {
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
              Payment Required : <span className="text-white ml-1">₹ 100</span>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Event Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className="relative h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={"/placeholder.svg"}
                      alt={"Event Image"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-sm">Event Name</h3>
                </div>

                {/* Payment Summary */}
                <div className="bg-muted/50 p-3 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Payment Summary</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Event Price:</span>
                      <span>₹ 100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Booking Fee:</span>
                      <span>₹ 0</span>
                    </div>
                    <Separator className="my-1" />
                    <div className="flex justify-between font-medium text-purple-dark">
                      <span>Total:</span>
                      <span>₹ 100</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column - QR Code */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-48 w-48 border-2 border-purple rounded-lg p-2 mb-3 transition-all duration-300 hover:shadow-lg">
                  <Image
                    src="/placeholder.svg?height=192&width=192"
                    alt="Payment QR Code"
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <p className="text-xs text-center text-muted-foreground mb-2">
                  Scan with any UPI app
                </p>
                <p className="text-purple font-medium text-sm mb-2">
                  <span className="text-black">UPI ID:</span> karangevents@upi
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Smartphone className="h-3 w-3" />
                  <span>Google Pay • PhonePe • Paytm</span>
                </div>
              </div>

              {/* Right Column - Instructions & WhatsApp */}
              <RightColumn amount={100} />
            </div>

            {/* Bottom Actions */}
            <BottomSection />
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Need help? Contact us at{" "}
            <Link href="/contact" className="text-purple hover:underline">
              Karangevents@gmail.com
            </Link>{" "}
            or call{" "}
            <a href="tel:+1234567890" className="text-purple hover:underline">
              +91 {WHATSAPP_NUMBER}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
