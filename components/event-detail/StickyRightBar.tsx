"use client";

import React from "react";
import { Card } from "../ui/card";
import { DatePickerForm } from "./SmartDateTimePicker";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { ISingleEvent } from "@/types";
import { IoMdCalendar } from "react-icons/io";
import { BiSupport } from "react-icons/bi";


const StickyRightBar = ({ eventData }: { eventData: ISingleEvent }) => {
  return (
    <Card className="p-5 md:p-6 sticky top-24 bg-white shadow-lg">
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

      <DatePickerForm eventData={eventData} />

      <Separator className="my-5" />

      <Link href={`/payment/${eventData.slug}`}>
        <Button className="w-full text-lg" size={"lg"}>
          <IoMdCalendar  />
          Book Now
        </Button>
      </Link>

      <div className="mt-6 p-4 bg-purple-50 rounded-lg">
        <h4 className="font-semibold text-purple-900 mb-2">Need Help?</h4>
        <p className="text-sm text-purple-700 mb-3">
          Have questions about this event? Our team is here to help.
        </p>
        <Link href={"/#contact-section"}>
          <Button
            variant="secondary"
            className="w-full text-base"
            size={"lg"}
          >
            <BiSupport />
            Contact Support
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default StickyRightBar;
