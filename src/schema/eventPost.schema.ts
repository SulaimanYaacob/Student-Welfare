import z from "zod";

export const EventPostSchema = z.object({
  id: z.string().cuid().optional(),
  description: z.string().max(1000, "max character is 1000").optional(),
  image: z.string().optional(),
  timeEnd: z.date(),
  timeStart: z.date(),
  date: z.date(),
  venue: z.string().min(1, "is missing"),
  title: z.string().min(1, "is missing").max(50, "is too long!"),
});
export const getSinglePostSchema = z.object({
  eventPostId: z.string().cuid(),
});

export type EventPostInput = z.TypeOf<typeof EventPostSchema>;
