import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { router, protectedProcedure } from "../trpc";

export const eventPost = router({
  createPost: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string().max(400, "Max description is 400"),
        venue: z.string(),
        image: z.string().optional(),
        date: z.date(),
        timeStart: z.date(),
        timeEnd: z.date(),
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
      } catch (error) {
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
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.eventPost.findMany();
  }),
});
