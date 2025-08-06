import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { DatePickerForm } from "./SmartDateTimePicker";
import { Separator } from "../ui/separator";
import { MessageCircle } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

const BookingCard = ({ price, OriginalPriceAmount }) => {
  return (
    <div className="space-y-6 lg:col-span-3">
      {/* Booking Card */}
      <Card className="card-modern p-6 sticky top-24">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-3xl font-bold text-purple-600">
              ₹ {price}
            </span>

            <span className="text-lg text-gray-500 line-through">
              ₹{OriginalPriceAmount}
            </span>
          </div>
          <p className="text-sm text-gray-600">Starting price per event</p>
          {OriginalPriceAmount > price && (
            <Badge className="bg-green-100 text-green-800 mt-2">
              Save ₹{(OriginalPriceAmount - price).toLocaleString()}
            </Badge>
          )}
        </div>

        <Separator className="my-5" />

        {/* Booking Form */}
        <div className="space-y-5">
          <DatePickerForm />
        </div>

        <div className="space-y-4 mt-6">
          <Link
            href={`/payment?event=${eventData.id}&date=${selectedDate}&time=${selectedTime}&attendees=${numberOfAttendees}`}
          >
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700 h-12 text-lg font-semibold"
              //   disabled={!isBookingFormValid()}
            >
              Book Now
            </Button>
          </Link>
          <Button variant="outline" className="w-full h-12 bg-transparent">
            <MessageCircle className="h-4 w-4 mr-2" />
            Send Enquiry
          </Button>
        </div>

        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <h4 className="font-semibold text-purple-900 mb-2">Need Help?</h4>
          <p className="text-sm text-purple-700 mb-3">
            Have questions about this event? Our team is here to help.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="w-full border-purple-200 text-purple-700 hover:bg-purple-100 bg-transparent"
          >
            Contact Support
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default BookingCard;
