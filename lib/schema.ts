import { z } from "zod";

const HomeEnquiryformSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  date: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .refine((data) => data.from && data.to, {
      message: "Please select a date range",
    }),
  eventType: z.string().min(1, "Please select event type"),
  message: z.string().optional(),
});

export { HomeEnquiryformSchema };
