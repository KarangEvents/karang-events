import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_CATEGORIES } from "@/constants";
import { Metadata } from "next";
import StillQuestions from "@/components/faq/StillQuestions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ImgSection from "@/components/common/ImgSection";

export const metadata: Metadata = {
  title: 'FAQ | Karang Events',
  description: "Find answers to common questions about Karang Events, our services, and how we can help you create unforgettable events.",
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
    

      <ImgSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Karang Events, our services, and how we can help you create unforgettable events."
        buttonText="View FAQs"
        buttonHref="/faq#faqs"
        backgroundImage="/assets/faq-bg.jpg"
        overlay="bg-[#32174DE5]"
      />

      <div className="container px-4 md:px-6 py-12 md:py-16">
        {/* FAQ Accordions */}
        <div className="max-w-3xl mx-auto space-y-8" id="faqs">
          {FAQ_CATEGORIES.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-serif text-xl font-bold text-primary mb-4">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem
                    key={itemIndex}
                    value={`item-${index}-${itemIndex}`}
                  >
                    <AccordionTrigger className="text-left font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <StillQuestions />
      </div>
    </div>
  );
}
