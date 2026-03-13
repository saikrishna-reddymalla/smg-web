import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  businessName: z
    .string()
    .min(2, "Please enter your business name.")
    .max(120, "Business name is too long."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(7, "Please enter a contact number.")
    .max(30, "Phone number is too long."),
  category: z.string().min(2, "Please choose a category."),
  message: z
    .string()
    .min(20, "Please share a little more detail about your enquiry.")
    .max(1200, "Message is too long."),
});

export type EnquiryPayload = z.infer<typeof enquirySchema>;
