import { StudyMode } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const userRouter = router({
  updateUserById: protectedProcedure
    .input(
      z.object({
        name: z.string().max(50),
        age: z.number().nonnegative().max(100),
        course: z.string(),
        faculty: z.string(),
        college: z.string(),
        image: z.string().optional(),
        backgroundImage: z.string().optional(),
        phoneNo: z.string().optional(),
        bio: z.string().max(250).optional(),
        studyMode: z.nativeEnum(StudyMode),
      })
    )
    .mutation(({ ctx, input }) => {
      try {
        const updateUser = ctx.prisma.user.update({
          data: input,
          where: { id: ctx.session.user.id },
        });
        return updateUser;
      } catch (error: any) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error.message,
        });
      }
    }),
  getUserById: publicProcedure
    .input(z.object({ userId: z.string().cuid() }))
    .query(({ input, ctx }) => {
      try {
        return ctx.prisma.user.findUnique({
          where: {
            id: input.userId,
          },
        });
      } catch (error: any) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error.message,
        });
      }
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
});
