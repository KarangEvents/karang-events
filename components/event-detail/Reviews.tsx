import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ISingleEvent } from "@/types";

const Reviews = ({ eventData }: { eventData: ISingleEvent }) => {
  return (
    <Card className="card-modern p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold">Customer Reviews</h3>
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="font-semibold text-lg">{eventData.rating}</span>
          {/* <span className="text-gray-500">
            ({eventData.reviewCount} reviews)
          </span> */}
        </div>
      </div>

      {/* Rating Summary */}
      {/* <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {eventData.rating}
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < Math.floor(eventData.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    )}
                  />
                ))}
              </div>
              <p className="text-gray-600">Based on reviews</p>
            </div>
          </div>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-3">
                <span className="text-sm w-8">{rating}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{
                      width: `${
                        rating === 5
                          ? 75
                          : rating === 4
                          ? 20
                          : rating === 3
                          ? 3
                          : rating === 2
                          ? 1
                          : 1
                      }%`,
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-8">
                  {rating === 5
                    ? 117
                    : rating === 4
                    ? 31
                    : rating === 3
                    ? 5
                    : rating === 2
                    ? 2
                    : 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Individual Reviews */}
      <div className="space-y-8">
        {eventData.reviews.map((review, i) => (
          <div
            key={i}
            className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0"
          >
            <div className="flex items-start gap-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={"/placeholder.svg"}
                  alt={"User Avatar"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">
                      {review.customerName}
                    </h4>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">{review.reviewDate}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="bg-transparent">
          View All Reviews
        </Button>
      </div>
    </Card>
  );
};

export default Reviews;
