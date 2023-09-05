import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userReturnSchema = userSchema.omit({
  password: true,
});

const userEmailRequestSchema = userSchema.pick({
  email: true,
});

const userReadSchema = userReturnSchema.array();

const userUpdateSchema = userReturnSchema.omit({ admin: true }).partial();

export {
  userSchema,
  userCreateSchema,
  userReturnSchema,
  userEmailRequestSchema,
  userReadSchema,
  userUpdateSchema,
};
