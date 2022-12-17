import { router } from "../trpc";
import { authRouter } from "./auth";
import { eventPost as eventRouter } from "./eventPost.router";
import { userRouter } from "./user.router";

export const appRouter = router({
  auth: authRouter,
  userRouter: userRouter,
  eventPost: eventRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
