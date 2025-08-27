"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format, isToday } from "date-fns";
import { CalendarIcon, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { cn, handleCustomMessage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { ISingleEvent } from "@/types";
import { LuSend } from "react-icons/lu";


// Schema
const FormSchema = z.object({
  dob: z.date({ required_error: "A date is required." }),
  time: z.string().min(1, "Time is required"),
  attendees: z
    .number({ invalid_type_error: "Must be a number" })
    .min(1, "At least 1 attendee")
    .max(500, "Too many attendees"),
});

export function DatePickerForm({ eventData }: { eventData: ISingleEvent }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      time: "10:00:00",
      attendees: 1,
    },
  });

  const dob = form.watch("dob");
  const time = form.watch("time");

  const [minTime, setMinTime] = useState("00:00:00");

  useEffect(() => {
    if (dob && isToday(dob)) {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setMinTime(`${hh}:${mm}:${ss}`);
    } else {
      setMinTime("00:00:00");
    }
  }, [dob]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const [h, m, s] = data.time.split(":").map(Number);
    const combined = new Date(data.dob);
    combined.setHours(h);
    combined.setMinutes(m);
    combined.setSeconds(s);

    if (combined <= new Date()) {
      toast.error("Please select a future date and time.");
      return;
    }

    const message = `Hi need assistance on this ${eventData.title}\n on ${combined} for ${data.attendees} `

    handleCustomMessage(message)

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Date + Time */}
        <div className="flex gap-2 md:gap-4">
          {/* Date Picker */}
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-1 flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()} // ✅ Only future dates
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Time Input */}
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className="flex flex-1 flex-col">
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Input
                    type="time"
                    step="1"
                    min={minTime} // ✅ restrict time if today
                    className="w-full bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Attendees */}
        <FormField
          control={form.control}
          name="attendees"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Number of Attendees</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={500}
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="outline"
          className="w-full text-base"
          size={"lg"}
        >
          <LuSend size={5} />
          Send Enquiry
        </Button>
      </form>
    </Form>
  );
}
