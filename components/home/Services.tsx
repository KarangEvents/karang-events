import React from "react";
import { Card } from "../ui/card";
import { Calendar, Settings, Users } from "lucide-react";

const Services = () => {
  return (
    <section className="section-padding bg-white container">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Event Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to execution, we handle every aspect of your event with
            meticulous attention to detail
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="card-modern p-8 text-center group">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Corporate Events
            </h3>
            <p className="text-gray-600">
              Professional conferences, product launches, and corporate
              gatherings designed to impress and engage.
            </p>
          </Card>
          <Card className="card-modern p-8 text-center group">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Social Celebrations
            </h3>
            <p className="text-gray-600">
              Weddings, anniversaries, birthdays, and milestone celebrations
              crafted with personal touches.
            </p>
          </Card>
          <Card className="card-modern p-8 text-center group">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
              <Settings className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Venue Selection
            </h3>
            <p className="text-gray-600">
              Access to exclusive venues and comprehensive event management
              services tailored to your needs.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
