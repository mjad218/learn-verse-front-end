import { z } from "zod";

export const ReviewSchema = z.object({
  id: z.number().nullish(),
  reviewId: z.number().nullish(),
  content: z.string().nullish(),
  courseId: z.number().nullish(),
  studentId: z.number().nullish(),
  stars: z.number().nullish(),
  user: z
    .object({
      id: z.number().nullish(),
      firstName: z.string().nullish(),
    })
    .nullish(),
});

export type Review = z.infer<typeof ReviewSchema>;
