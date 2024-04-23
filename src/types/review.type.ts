import { z } from "zod";

export const ReviewSchema = z.object({
  id: z.number().nullish(),
  content: z.string().nullish(),
  stars: z.number().nullish(),
  student: z
    .object({
      name: z.string().nullish(),
    })
    .nullish(),
});

export type Review = z.infer<typeof ReviewSchema>;
