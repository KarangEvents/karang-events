"use client";

import { Star } from "lucide-react";
import React, { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ISingleEvent } from "@/types";
import { FaUserAlt } from "react-icons/fa";
import { handleCustomMessage } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Reviews = ({ eventData }: { eventData: ISingleEvent }) => {
  const [open, setOpen] = useState(false);

  const hasReviews = eventData.reviews && eventData.reviews.length > 0;
  const displayedReviews = hasReviews ? eventData.reviews.slice(0, 3) : [];

  const renderReview = (review: any, i: number) => (
    <div
      key={i}
      className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0"
    >
      <div className="flex items-start gap-3 md:gap-4">
        <div className="relative size-8 md:size-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 bg-gray-400">
          <FaUserAlt className="size-3 md:size-4 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-lg max-md:self-start">
              {review.customerName}
            </h4>
            <div className="text-right">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-3 md:size-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">{review.reviewDate}</p>
            </div>
          </div>
          <p className="text-gray-700 md:leading-relaxed">{review.review}</p>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="p-5 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold">Customer Reviews</h2>
        {hasReviews && (
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="font-semibold text-lg">{eventData.rating}</span>
          </div>
        )}
      </div>

      {/* Reviews Section */}
      <div className="space-y-6 md:space-y-8">
        {!hasReviews ? (
          <p className="text-gray-500 text-center">No reviews yet.</p>
        ) : (
          displayedReviews.map(renderReview)
        )}
      </div>

      {/* Actions */}
      <div className="mt-8 text-center flex flex-col md:flex-row items-center justify-center gap-4">
        <Button
          variant="white"
          onClick={() => handleCustomMessage("I have a review")}
        >
          Write a Review
        </Button>

        {hasReviews && eventData.reviews.length > 3 && (
          <Button
            onClick={() => setOpen(true)}
          >
            View All Reviews
          </Button>
        )}
      </div>

      {/* Popup Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>All Reviews</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 md:space-y-8">
            {eventData.reviews.map(renderReview)}
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default Reviews;
