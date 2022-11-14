import z from "zod";

export const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(4).max(12).nullable(),
});

export type CreateUserInput = z.TypeOf<typeof createUserSchema>;

// export const requestOtpSchema = z.object({
//   email: z.string().email(),
//   redirect: z.string().default("/"),
// });

// export type requestOtpInput = z.TypeOf<typeof requestOtpSchema>;
