import { z } from "zod"

export const inquiryFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(6, "Please enter a valid phone/WhatsApp number."),
  company: z.string().trim().optional().or(z.literal("")),
  productInterest: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please share a few details about your requirement."),
})

export type InquiryFormValues = z.infer<typeof inquiryFormSchema>
