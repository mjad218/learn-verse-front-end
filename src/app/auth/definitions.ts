import { z } from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be greater than 3 characters" }),
    email: z
      .string()
      .min(3, { message: "This field cannot be empty" })
      .email("Email is invalid"),
    password: z
      .string()
      .min(8, { message: "Password must be longer than 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be longer than 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

export const loginSchema = z.object({
  email: z
    .string()
    .min(3, { message: "This field cannot be empty" })
    .email("Email is invalid"),
  password: z
    .string()
    .min(8, { message: "Password must be longer than 8 characters" }),
});
