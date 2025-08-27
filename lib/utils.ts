import { WHATSAPP_NUMBER } from "@/constants";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function handleContactCTA() {
  const whatsappMessage = `Hello, I have an event enquiry`;

  const encodedMessage = encodeURIComponent(whatsappMessage);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
}

export function handleCustomMessage(message: string) {

  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
}