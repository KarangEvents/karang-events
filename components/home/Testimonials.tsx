import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Event Organizer",
    content:
      "Karang Events made our corporate event seamless and memorable. Their attention to detail is unmatched.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Wedding Planner",
    content:
      "The platform's features helped us coordinate a perfect wedding. Highly recommend for any event planning needs.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Conference Manager",
    content:
      "Professional service and excellent support. Karang Events exceeded our expectations in every way.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding  container bg-purple-dark text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-purple-100">
            Hear from those who have experienced the Karang Events difference
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="card-modern p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-purple-200 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-purple-100 italic">"{testimonial.content}"</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
