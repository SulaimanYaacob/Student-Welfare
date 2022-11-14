import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { userRouter } from "./user.router";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  userRouter: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
