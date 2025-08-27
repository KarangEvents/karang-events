"use client";

import React from "react";
import { Button } from "../ui/button";
import { WHATSAPP_NUMBER } from "@/constants";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const BottomSection = () => {
  const openWhatsApp = () => {
    const message =
      "Hi, I have made the payment. Please find the screenshot attached.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="mt-6 pt-4 border-t flex flex-col sm:flex-row gap-3 justify-center">
      <Link href="/events" passHref>
        <Button variant="outline" size="sm">
          ← Back to Events
        </Button>
      </Link>
      <Button
        className="bg-green-600 hover:bg-green-700 text-white"
        onClick={openWhatsApp}
        size="sm"
      >
        <FaWhatsapp />
        Contact on WhatsApp
      </Button>
    </div>
  );
};

export default BottomSection;
