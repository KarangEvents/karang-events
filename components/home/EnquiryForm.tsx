"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { format } from "date-fns";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, PhoneIcon, UserIcon } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { HomeEnquiryformSchema } from "@/lib/schema";
import { FiSend } from "react-icons/fi";

export default function EventForm() {
  const form = useForm<z.infer<typeof HomeEnquiryformSchema>>({
    resolver: zodResolver(HomeEnquiryformSchema),
    defaultValues: {
      date: {
        from: new Date(),
        to: new Date(),
      },
    },
  });

  function onSubmit(values: z.infer<typeof HomeEnquiryformSchema>) {
    try {
      const { name, phone, eventType, message, date } = values;

      const formattedDate =
        date?.from && date?.to
          ? `${format(date.from, "LLL dd, yyyy")} - ${format(
              date.to,
              "LLL dd, yyyy"
            )}`
          : "N/A";

      const whatsappMessage = `Hello, I have an event enquiry:\n\n Name: ${name}\n Phone: ${phone}\n Event Type: ${eventType}\n Dates: ${formattedDate}\n Message: ${
        message || "N/A"
      }`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappNumber = "7019872097"; // Change to your number (country code + number)

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      form.reset({
        name: "",
        phone: "",
        date: {
          from: new Date(),
          to: new Date(),
        },
        eventType: "",
        message: "",
      });
    } catch (error) {
      toast.error("Form submission failed.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Your name"
                  {...field}
                  className="h-14 rounded-2xl"
                  icon={<UserIcon className="size-5" />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormControl>
                  <Input
                    placeholder="Phone number"
                    type="tel"
                    className="h-14 rounded-2xl"
                    {...field}
                    icon={<PhoneIcon className="size-4" />}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Event Type */}
          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-14 rounded-2xl">
                      <SelectValue placeholder="Choose event type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Date Range Picker */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full pr-8 h-14 text-left font-normal rounded-2xl",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <div className="flex items-center gap-2 mr-auto">
                        <CalendarIcon className="size-4 opacity-50" />
                        <span className="">
                          {field.value?.from ? (
                            field.value.to ? (
                              <>
                                {format(field.value.from, "LLL dd, y")} -{" "}
                                {format(field.value.to, "LLL dd, y")}
                              </>
                            ) : (
                              format(field.value.from, "LLL dd, y")
                            )
                          ) : (
                            "Pick a date range"
                          )}
                        </span>
                      </div>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={field.value?.from}
                    selected={field.value}
                    onSelect={field.onChange}
                    numberOfMonths={2}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your event..."
                  rows={4}
                  className="resize-none rounded-2xl"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full font-semibold tracking-wide text-base !rounded-3xl"
          size={"lg"}
        >
          <FiSend className=" size-5" />
          Send Enquiry
        </Button>
      </form>
    </Form>
  );
}
