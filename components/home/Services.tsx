import React from "react";
import { Card } from "../ui/card";
import { SERVICE_DATA } from "@/constants";

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
          {SERVICE_DATA.map(
            (
              { title, description, Icon, iconBg, gradient, iconClassName },
              index
            ) => (
              <Card
                key={index}
                className={`rounded-3xl p-8 border-0 text-center ${gradient}`}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: iconBg }}
                >
                  <Icon className={`size-8 ${iconClassName}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {title}
                </h3>
                <p className="text-gray-600">{description}</p>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
