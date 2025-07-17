"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search } from "lucide-react"

// FAQ data structure
const faqCategories = [
  {
    title: "General Questions",
    items: [
      {
        question: "What is Karang Events?",
        answer:
          "Karang Events is a sophisticated event management platform that connects customers with premium event services and vendors. We offer a wide range of event packages from corporate galas to weddings and private celebrations.",
      },
      {
        question: "How do I create an account?",
        answer:
          "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. Fill in your details, select your account type (User, Vendor, or Organization), and follow the prompts to complete your registration.",
      },
      {
        question: "Is Karang Events available in my city?",
        answer:
          "Karang Events currently operates in major metropolitan areas across the country. You can check availability in your location by entering your city in the search bar on our events page.",
      },
    ],
  },
  {
    title: "Booking & Payments",
    items: [
      {
        question: "How do I book an event?",
        answer:
          "To book an event, browse our event listings and select the one that interests you. Click on 'Book Now', select your preferred date and time, and proceed to checkout. You'll receive a confirmation email once your booking is complete.",
      },
      {
        question: "Can I customize an event package?",
        answer:
          "Yes, many of our event packages can be customized to suit your specific requirements. When viewing an event, look for the 'Customization Options' section or contact the vendor directly to discuss your needs.",
      },
      {
        question: "What payment methods do you support?",
        answer:
          "We accept all major credit and debit cards, UPI payments, net banking, and digital wallets. For corporate bookings, we also offer invoice-based payments with terms.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Cancellation policies vary by vendor and event type. The specific policy for each event is clearly displayed on the event details page before booking. Generally, cancellations made 30+ days before the event date receive a full refund, while those made 15-29 days before receive a 50% refund.",
      },
    ],
  },
  {
    title: "For Vendors",
    items: [
      {
        question: "How can I become a vendor on Karang Events?",
        answer:
          "To become a vendor, sign up for a Vendor account and complete your profile with your services, pricing, and availability. Our team will review your application and get back to you within 3-5 business days.",
      },
      {
        question: "How do vendors manage their bookings?",
        answer:
          "Vendors can manage all their bookings through the Vendor Dashboard. Here, you can view upcoming events, update availability, communicate with clients, and manage your event listings.",
      },
      {
        question: "What fees does Karang Events charge vendors?",
        answer:
          "Karang Events operates on a commission-based model, charging a percentage of each successful booking. The exact commission rate depends on your vendor tier and is clearly outlined during the registration process.",
      },
    ],
  },
  {
    title: "Technical Support",
    items: [
      {
        question: "I forgot my password. How do I reset it?",
        answer:
          "Click on 'Login' and then select 'Forgot Password'. Enter your registered email address, and we'll send you instructions to reset your password.",
      },
      {
        question: "The website isn't working properly. What should I do?",
        answer:
          "Try clearing your browser cache and cookies, or try using a different browser. If the issue persists, please contact our support team with details of the problem and screenshots if possible.",
      },
      {
        question: "How do I update my profile information?",
        answer:
          "Log in to your account, click on your profile icon in the top right corner, and select 'Profile Settings'. Here, you can update your personal information, change your password, and manage your notification preferences.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredFAQs, setFilteredFAQs] = useState(faqCategories)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    if (!query) {
      setFilteredFAQs(faqCategories)
      return
    }

    const filtered = faqCategories
      .map((category) => {
        const filteredItems = category.items.filter(
          (item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query),
        )
        return {
          ...category,
          items: filteredItems,
        }
      })
      .filter((category) => category.items.length > 0)

    setFilteredFAQs(filtered)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
      <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-midnight-dark mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Karang Events. Can't find what you're looking for? Contact our
            support team.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for questions..."
              className="pl-10 h-12"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* FAQ Accordions */}
        <div className="max-w-3xl mx-auto space-y-8">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="font-serif text-xl font-bold text-midnight-dark mb-4">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                      <AccordionTrigger className="text-left font-medium">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">No results found for "{searchQuery}"</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setFilteredFAQs(faqCategories)
                }}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>

        {/* Still Have Questions Section */}
        <div className="mt-16 text-center bg-purple-light/30 rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-midnight-dark mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our support team is here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-purple hover:bg-purple-dark">Contact Support</Button>
            </Link>
            <Button variant="outline">Live Chat</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
