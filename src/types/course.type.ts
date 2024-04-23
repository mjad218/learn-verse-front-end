import { z } from "zod";

export const CourseSchema = z.object({
  id: z.number().nullish(),
  courseName: z.string().nullish(),
  description: z.string().nullish(),
  price: z.number().nullish(),
});

export type Course = z.infer<typeof CourseSchema>;
