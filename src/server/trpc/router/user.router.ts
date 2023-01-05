import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const userRouter = router({
  getUserById: publicProcedure
    .input(z.object({ userId: z.string().cuid() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: input.userId,
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
});
