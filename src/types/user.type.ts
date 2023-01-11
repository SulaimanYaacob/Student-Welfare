import z from "zod";
import type { RouterInputs, RouterOutputs } from "../utils/trpc";

export const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(4).max(12).nullable(),
});

//Get User
export type UserInputType = RouterInputs["userRouter"]["getUserById"];
export type UserOutputType = RouterOutputs["userRouter"]["getUserById"];

//Update User
export type UserUpdateInputType = RouterInputs["userRouter"]["updateUserById"];
export type UserUpdateOutputType =
  RouterOutputs["userRouter"]["updateUserById"];
