import type { EventPost } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { EventPostSchema } from "../../../schema/eventPost.schema";
import { router, protectedProcedure, publicProcedure } from "../trpc";

export const eventPost = router({
  createPost: protectedProcedure
    .input(EventPostSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const eventList = await ctx.prisma.eventPost.count({
          where: { authorId: ctx.session.user.id },
        });

        if (eventList > 2) throw new Error("Cannot create more than 2 events");
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
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error.message,
        });
      }
    }),
  updateEvent: protectedProcedure
    .input(EventPostSchema)
    .mutation(async ({ ctx, input: { id, ...rest } }) => {
      try {
        const updateEvent: EventPost = await ctx.prisma.eventPost.update({
          data: { ...rest },
          where: { id },
        });
        return updateEvent;
      } catch (error: any) {
        if (!ctx.session?.user)
          throw new TRPCError({
            message: "Unauthorized to update",
            code: "FORBIDDEN",
          });
        return error;
      }
    }),
  deleteEvent: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(({ ctx, input: { id } }) => {
      return ctx.prisma.eventPost.delete({
        where: { id },
      });
    }),
  getSingleEvent: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(({ ctx, input: { id } }) => {
      return ctx.prisma.eventPost.findFirst({
        where: { id },
      });
    }),
  getMyEvents: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.eventPost.findMany({
      where: { authorId: ctx.session?.user?.id },
      orderBy: { createdAt: "desc" },
    });
  }),
  getAll: publicProcedure
    .input(
      z.object({
        orderBy: z
          .object({
            date: z.union([z.literal("asc"), z.literal("desc")]).optional(),
            createdAt: z
              .union([z.literal("asc"), z.literal("desc")])
              .optional(),
          })
          .optional(),
        cursor: z.string().nullish(),
        limit: z.number().min(1).max(100).default(5),
        contains: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { orderBy, cursor, limit, contains } = input;
      const current = new Date();
      const threeDaysAgo = new Date(current.getTime() - 86400000 * 3);

      const events = await ctx.prisma.eventPost.findMany({
        cursor: cursor ? { id: cursor } : undefined,
        take: limit + 1,
        orderBy,
        where: {
          title: { contains, mode: "insensitive" },
          date: { gte: threeDaysAgo },
        },
        include: { author: true },
      });

      //console.log({ events });

      let nextCursor: typeof cursor | undefined = undefined;

      // + 1 means you pop the next cursor
      if (events.length > limit) {
        const nextItem = events.pop() as typeof events[number];
        nextCursor = nextItem.id;
      }

      return { events, nextCursor };
    }),
});
