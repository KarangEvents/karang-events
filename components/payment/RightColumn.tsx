"use client";

import React from "react";
import { Button } from "../ui/button";
import { WHATSAPP_NUMBER } from "@/constants";
import { Check, Copy } from "lucide-react";

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
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.669.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
          </svg>
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
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3 mr-1 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.669.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
          </svg>
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
