import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { router, protectedProcedure, publicProcedure } from "../trpc";

export const eventPost = router({
  createPost: protectedProcedure
    .input(
      z.object({
        description: z.string().max(400, "Max character is 400").optional(),
        image: z.string().optional(),
        timeEnd: z.date(),
        timeStart: z.date(),
        date: z.date(),
        venue: z.string().min(1, "venue is missing"),
        title: z
          .string()
          .min(1, "title is missing")
          .max(50, "title is too long!"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const posts = await ctx.prisma.eventPost.create({
          data: {
            ...input,
            author: {
              connect: {
                id: ctx.session?.user?.id,
              },
            },
          },
        });
        return posts;
      } catch (error: any) {
        if (!ctx.session?.user)
          throw new TRPCError({
            message: "Unauthorized to create",
            code: "FORBIDDEN",
          });
        return error;
      }
    }),
  getSingle: protectedProcedure
    .input(
      z.object({
        eventPostId: z.string().cuid(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.eventPost.findUnique({
        where: { id: input.eventPostId },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.eventPost.findMany();
  }),
});
