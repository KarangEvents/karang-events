"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import EnquiryModal from "../modal/EnquiryModal";
import EventCard from "./EventCard";
import { IEvent } from "@/types";
import { useRouter } from "next/navigation";

const EventsList = ({ events }: { events: IEvent[] }) => {
  const [enquiryFormOpen, setEnquiryFormOpen] = useState(false);
  const router = useRouter();

  const handleClearFilters = () => {
    // Reset filters and close enquiry form
    setEnquiryFormOpen(false);
    router.replace("/events"); // Navigate to the base events page
  };

  return (
    <div>
      {/* Events Grid */}
      {events.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              openEnquiryForm={() => setEnquiryFormOpen(true)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="font-serif text-xl font-bold mb-2">No events found</h3>
          <p className="text-muted-foreground mb-6">
            We couldn't find any events matching your search criteria.
          </p>
          <Button variant="outline" onClick={handleClearFilters}>
            Clear Filters
          </Button>
        </div>
      )}

      {/* Enquiry Modal */}
      <EnquiryModal
        enquiryFormOpen={enquiryFormOpen}
        setEnquiryFormOpen={() => setEnquiryFormOpen(false)}
      />
    </div>
  );
};

export default EventsList;
