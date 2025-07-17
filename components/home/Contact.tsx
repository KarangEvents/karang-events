import React from "react";
import { Card } from "../ui/card";
import EventForm from "./EnquiryForm";

const Contact = () => {
  return (
    <section className="section-padding relative bg-[url('/assets/enquiry-bg.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#32174D]/90 z-0" />

      {/* Content */}
      <div className="container-custom relative z-10 container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Get Started
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Tell us a bit about your event and we'll get back to you with
              ideas, packages and next steps.
            </p>
          </div>

          <div className="animate-fade-in">
            <Card className="card-modern p-8 bg-white bg-opacity-95">
              <EventForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
