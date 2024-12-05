import { z } from "zod";

export const userSignupSchema = z.object({
  fullName: z.string().min(1, "Fullname is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "password must be atleast 6 character long"),
  contact: z.string().min(11, "contact number must be of 10 digits"),
});

export type signupInputState = z.infer<typeof userSignupSchema>;

export const userLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "password must be atleast 6 character long"),
});

export type loginInputState = z.infer<typeof userLoginSchema>;
