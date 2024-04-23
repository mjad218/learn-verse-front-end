import { z } from "zod";

export const ReviewSchema = z.object({
  id: z.number().nullish(),
  content: z.string().nullish(),
  description: z.string().nullish(),
  stars: z.number().nullish(),
  image: z.string().nullish(),
});

export type Review = z.infer<typeof ReviewSchema>;
