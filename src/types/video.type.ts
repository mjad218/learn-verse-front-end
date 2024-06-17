import { z } from "zod";


export const VideoSchema = z.object({
  id: z.number().nullish(),
  title: z.string().nullish(),
  filename: z.string().nullish(),
  contentType: z.string().nullish(),
  contentUrl: z.string().nullish(),
});

export type CourseVideo = z.infer<typeof VideoSchema>;
