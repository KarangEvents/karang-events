"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Check, Copy, Calendar, MapPin, Clock, Smartphone } from "lucide-react"
import { useSearchParams } from "next/navigation"

// Sample events data - in a real app, this would come from an API
const events = [
  {
    id: "1",
    title: "Corporate Gala Dinner",
    date: "June 15, 2023",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Hyatt, New York",
    amount: 1200,
    currency: "$",
    whatsappNumber: "+91-9876543210",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    title: "Wedding Reception Package",
    date: "Flexible Dates",
    time: "To be determined",
    location: "Beachfront Resort, Miami",
    amount: 3500,
    currency: "$",
    whatsappNumber: "+91-9876543210",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "Tech Conference Setup",
    date: "September 10-12, 2023",
    time: "All Day",
    location: "Convention Center, San Francisco",
    amount: 5000,
    currency: "$",
    whatsappNumber: "+91-9876543210",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function PaymentPage() {
  const [copied, setCopied] = useState(false)
  const [booking, setBooking] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const searchParams = useSearchParams()
  const eventId = searchParams.get("event")

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true)
    setTimeout(() => {
      if (eventId) {
        const event = events.find((e) => e.id === eventId)
        if (event) {
          setBooking({
            ...event,
            id: `BK-${Math.floor(10000 + Math.random() * 90000)}`, // Generate random booking ID
          })
        } else {
          // Fallback to first event if ID not found
          setBooking({
            ...events[0],
            id: `BK-${Math.floor(10000 + Math.random() * 90000)}`,
          })
        }
      } else {
        // Fallback to first event if no ID provided
        setBooking({
          ...events[0],
          id: `BK-${Math.floor(10000 + Math.random() * 90000)}`,
        })
      }
      setIsLoading(false)
    }, 800)
  }, [eventId])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const openWhatsApp = () => {
    if (!booking) return

    const message = encodeURIComponent(
      `Hello, I've completed the payment for my booking (${booking.id}) for ${booking.title} on ${booking.date}. I'm attaching the payment confirmation screenshot.`,
    )
    window.open(`https://wa.me/${booking.whatsappNumber.replace(/[^0-9]/g, "")}?text=${message}`, "_blank")
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-purple-light/20 to-white p-4">
        <div className="text-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <p className="mt-4 text-muted-foreground">Loading payment details...</p>
        </div>
      </div>
    )
  }

  if (!booking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-purple-light/20 to-white p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif">Event Not Found</CardTitle>
            <CardDescription>We couldn't find the event you're looking for.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="text-muted-foreground mb-6">Please go back and select an event to book.</p>
            <Link href="/events">
              <Button className="bg-purple hover:bg-purple-dark">Browse Events</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white p-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-midnight-dark mb-2">Complete Your Booking</h1>
          <p className="text-muted-foreground">Scan QR code to pay • Send screenshot on WhatsApp • Get confirmation</p>
        </div>

        {/* Main Payment Card */}
        <Card className="shadow-lg animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-purple to-purple-dark text-white text-center py-4">
            <CardTitle className="text-xl font-serif">Payment Required</CardTitle>
            <CardDescription className="text-white/90 text-lg font-bold">
              {booking.currency}
              {booking.amount.toLocaleString()}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Event Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className="relative h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={booking.image || "/placeholder.svg"}
                      alt={booking.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm">{booking.title}</h3>
                    <p className="text-xs text-muted-foreground">ID: {booking.id}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple" />
                    <span className="font-medium">Date:</span>
                    <span className="text-muted-foreground">{booking.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-purple" />
                    <span className="font-medium">Time:</span>
                    <span className="text-muted-foreground">{booking.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-purple" />
                    <span className="font-medium">Venue:</span>
                    <span className="text-muted-foreground">{booking.location}</span>
                  </div>
                </div>

                {/* Payment Summary */}
                <div className="bg-muted/50 p-3 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Payment Summary</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Event Price:</span>
                      <span>
                        {booking.currency}
                        {booking.amount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Booking Fee:</span>
                      <span>{booking.currency}0</span>
                    </div>
                    <Separator className="my-1" />
                    <div className="flex justify-between font-medium text-purple-dark">
                      <span>Total:</span>
                      <span>
                        {booking.currency}
                        {booking.amount.toLocaleString()}
                      </span>
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
                <p className="text-xs text-center text-muted-foreground mb-2">Scan with any UPI app</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Smartphone className="h-3 w-3" />
                  <span>Google Pay • PhonePe • Paytm</span>
                </div>
              </div>

              {/* Right Column - Instructions & WhatsApp */}
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-2 text-blue-800">Quick Steps</h4>
                  <ol className="list-decimal list-inside space-y-1 text-xs text-blue-700">
                    <li>Scan QR code with UPI app</li>
                    <li>
                      Pay {booking.currency}
                      {booking.amount.toLocaleString()}
                    </li>
                    <li>Screenshot confirmation</li>
                    <li>Send to WhatsApp below</li>
                  </ol>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-2 text-green-800 flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.669.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                    </svg>
                    Send Screenshot
                  </h4>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-green-700">WhatsApp:</span>
                    <span className="font-mono">{booking.whatsappNumber}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => copyToClipboard(booking.whatsappNumber)}
                    >
                      {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white h-8 text-xs"
                    onClick={openWhatsApp}
                  >
                    <svg viewBox="0 0 24 24" className="h-3 w-3 mr-1 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.669.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                    </svg>
                    Send Payment Proof
                  </Button>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-1 text-yellow-800">Important</h4>
                  <p className="text-xs text-yellow-700">
                    Your booking will be confirmed only after we receive your payment screenshot on WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/events">
                <Button variant="outline" size="sm">
                  ← Back to Events
                </Button>
              </Link>
              <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={openWhatsApp} size="sm">
                <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.669.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                </svg>
                Contact on WhatsApp
              </Button>
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  View My Bookings
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Need help? Contact us at{" "}
            <Link href="/contact" className="text-purple hover:underline">
              support@karangevents.com
            </Link>{" "}
            or call{" "}
            <a href="tel:+1234567890" className="text-purple hover:underline">
              +1 (234) 567-890
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
