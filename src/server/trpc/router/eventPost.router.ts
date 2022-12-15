import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createEventPostSchema } from "../../../schema/eventPost.schema";
import { router, protectedProcedure, publicProcedure } from "../trpc";

export const eventPost = router({
  createPost: protectedProcedure
    .input(createEventPostSchema)
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
