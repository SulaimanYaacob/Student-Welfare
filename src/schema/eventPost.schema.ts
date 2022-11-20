import z, { unknown } from "zod";

export const createEventPostSchema = z.object({
  title: z.string(),
  description: z.string().max(400, "Max description is 400"),
  venue: z.string(),
  image: z.string().optional(),
  date: z.date(),
  timeStart: z.date(),
  timeEnd: z.date(),
});

export const getSinglePostSchema = z.object({
  eventPostId: z.string().cuid(),
});

export type CreateEventPostInput = z.TypeOf<typeof createEventPostSchema>;
