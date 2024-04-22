import {z} from 'zod';

export const AccountDetailsSchema = z.object({
  firstName: z
    .string()
    .min(3,{message:'First name cannot be shorter than 3 letters'})
    .regex(new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/), 'First name should contain only letters'),
  lastName: z
    .string()
    .min(3,{message:'Last name cannot be shorter than 3 letters'})
    .regex(new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/), 'Last name should contain only letters'),
  userName: z
    .string()
    .min(5, { message: "This field cannot be empty" })
    .regex(new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/), 'Username should contain only letters and numbers')
    .refine((value) => /^[a-zA-Z]{2}[a-zA-Z0-9]*$/.test(value ?? ""), 'Usernames should start with 2 letters'),
  email: z
    .string()
    .min(3, { message: "This field cannot be empty" })
    .email("Email is invalid"),
});