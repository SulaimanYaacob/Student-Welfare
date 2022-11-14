import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { TRPCError } from "@trpc/server";
import { string, z } from "zod";
import { CreateUserInput } from "../../../types/user.type";

import { router, publicProcedure } from "../trpc";

export const userRouter = router({
  signup: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(4).max(12).nullable(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const user: CreateUserInput = await ctx.prisma.user.create({
          data: input,
        });
        return user;
      } catch (error: any) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "User already exists",
            });
          }
        }
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
