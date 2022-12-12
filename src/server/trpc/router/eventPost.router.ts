import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { router, protectedProcedure, publicProcedure } from "../trpc";

export const eventPost = router({
  createPost: protectedProcedure
    .input(
      z.object({
        description: z.string().max(1000, "max character is 1000").optional(),
        image: z.string().optional(),
        timeEnd: z.date(),
        timeStart: z.date(),
        date: z.date(),
        venue: z.string().min(1, "is missing"),
        title: z.string().min(1, "is missing").max(50, "is too long!"),
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
  deleteEvent: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(({ ctx, input: { id } }) => {
      return ctx.prisma.eventPost.delete({
        where: { id },
      });
    }),
  getMyEvent: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.eventPost.findMany({
      where: { authorId: ctx.session?.user?.id },
    });
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.eventPost.findMany();
  }),
});
