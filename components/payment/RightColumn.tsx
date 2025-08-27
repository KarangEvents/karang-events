"use client";

import React from "react";
import { Button } from "../ui/button";
import { WHATSAPP_NUMBER } from "@/constants";
import { Check, Copy } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const RightColumn = ({ amount }: { amount: number }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const openWhatsApp = () => {
    const message = `Hi, I have made the payment of ₹${amount} for the event. Please find the screenshot attached.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <h4 className="font-medium text-sm mb-2 text-blue-800">Quick Steps</h4>
        <ol className="list-decimal list-inside space-y-1 text-xs text-blue-700">
          <li>Scan QR code with UPI app</li>
          <li>Pay ₹{amount}</li>
          <li>Screenshot confirmation</li>
          <li>Send to WhatsApp below</li>
        </ol>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
        <h4 className="font-medium text-sm mb-2 text-green-800 flex items-center gap-2">
          <FaWhatsapp size={18} />
          Send Screenshot
        </h4>
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-green-700">WhatsApp:</span>
          <span className="font-mono">{WHATSAPP_NUMBER}</span>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            onClick={() => copyToClipboard(WHATSAPP_NUMBER)}
          >
            {copied ? (
              <Check className="h-3 w-3 text-green-500" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white h-8 text-xs"
          onClick={openWhatsApp}
        >
          <FaWhatsapp />
          Send Payment Proof
        </Button>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
        <h4 className="font-medium text-sm mb-1 text-yellow-800">Important</h4>
        <p className="text-xs text-yellow-700">
          Your booking will be confirmed only after we receive your payment
          screenshot on WhatsApp.
        </p>
      </div>
    </div>
  );
};

export default RightColumn;
