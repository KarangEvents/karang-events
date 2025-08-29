import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_CATEGORIES } from "@/constants";
import { Metadata } from "next";
import StillQuestions from "@/components/faq/StillQuestions";

export const metadata: Metadata = {
  title: 'FAQ | Karang Events',
  description: "Find answers to common questions about Karang Events, our services, and how we can help you create unforgettable events.",
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-light/20 to-white">
      <div className="section-padding relative  bg-[url('/assets/faq-bg.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#32174DE5] z-0" />

        <div className="z-10 relative container text-white">
          <div className="text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="max-w-2xl mx-auto">
              Find answers to common questions about Karang Events, our
              services, and how we can help you create unforgettable events.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12 md:py-16">
        {/* FAQ Accordions */}
        <div className="max-w-3xl mx-auto space-y-8">
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
