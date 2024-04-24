import { z } from "zod";

export const ReviewSchema = z.object({
  id: z.number().nullish(),
  content: z.string().nullish(),
  n_stars: z.number().nullish(),
  student: z
    .object({
      firstName: z.string().nullish(),
    })
    .nullish(),
});

export type Review = z.infer<typeof ReviewSchema>;
