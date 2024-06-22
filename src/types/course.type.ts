import { z } from "zod";

export const NewCourseSchema = z.object({
  courseName: z.string().nullish(),
  description: z.string().nullish(),
  price: z.number().nullish(),
});

export type NewCourseType = z.infer<typeof NewCourseSchema>;

export const CourseSchema = z.object({
  id: z.number().nullish(),
  courseName: z.string().nullish(),
  description: z.string().nullish(),
  price: z.number().nullish(),
  rating: z.number().nullish(),
  nStudents: z.number().nullish(),
  image: z.string().nullish(),
});

export type Course = z.infer<typeof CourseSchema>;
