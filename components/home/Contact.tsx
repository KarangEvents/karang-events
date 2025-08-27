import React from "react";
import { Card } from "../ui/card";
import EventForm from "./EnquiryForm";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const Contact = () => {
  return (
    <section id="contact-section" className="relative bg-[url('/assets/enquiry-bg.jpg')] bg-cover bg-center section-padding">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#32174D]/90 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="flex items-center justify-between gap-16">
          {/* Left: Info Section */}
          <div className="text-white animate-slide-in w-full lg:w-1/2">
            <SectionTitle>Contact us</SectionTitle>
            <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-10 max-w-md">
              Tell us a bit about your event and we'll get back to you with
              ideas, packages and next steps to make your celebration
              unforgettable.
            </p>

            {/* Info Grid */}
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-8 mt-10">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  content:
                    "Site No 41,42 Nandi Nivasa 4th Cross, Lakshmi Enclave, Suprabhathanagara, Kariobanahalli,\n Bangalore - 560058",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  content:
                    "Monday - Friday: 9:00AM - 6:00PM\n Saturday - Sunday: 10:00AM - 3:00PM",
                },
                {
                  icon: Mail,
                  title: "Email Address",
                  content: "karangevents@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+91-7019872097",
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center">
                    <div className="size-8 bg-white text-black rounded-full flex items-center justify-center mr-3">
                      <item.icon className="size-4" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="pl-11 whitespace-pre-line text-sm text-white/90">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form Section */}
          <div className="w-full lg:w-[40%] animate-fade-in max-md:hidden">
            <Card className="bg-white/90 backdrop-blur-md shadow-lg border border-purple-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-purple-800">
                Get in Touch
              </h3>
              <EventForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
