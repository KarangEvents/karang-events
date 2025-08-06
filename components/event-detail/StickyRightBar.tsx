"use client";

import React from "react";
import { Badge, MessageCircle } from "lucide-react";
import { Card } from "../ui/card";
import { DatePickerForm } from "./SmartDateTimePicker";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { ISingleEvent } from "@/types";

const StickyRightBar = ({ eventData }: { eventData: ISingleEvent }) => {
  return (
    <Card className="card-modern p-6 sticky top-24">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-3xl font-bold text-purple-600">
            ₹ {eventData.price.toLocaleString()}
          </span>
          {eventData.originalPriceAmount > eventData.price && (
            <span className="text-lg text-gray-500 line-through">
              ₹ {eventData?.price}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600">Starting price per event</p>
      </div>

      <Separator className="my-5" />

      {/* Booking Form */}
      <div className="space-y-5">
        <DatePickerForm />
      </div>

      <Separator className="my-5" />

      <Link href={`/payment?event`}>
        <Button className="w-full ">Book Now</Button>
      </Link>

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
  );
};

export default StickyRightBar;
