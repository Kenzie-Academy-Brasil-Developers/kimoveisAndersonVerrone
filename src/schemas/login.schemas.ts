import { z } from "zod";

const loginCreateSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const loginReturnSchema = z.object({
  token: z.string(),
});

export { loginCreateSchema, loginReturnSchema };