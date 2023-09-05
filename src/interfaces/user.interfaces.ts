import { z } from "zod";

import {
  userCreateSchema,
  userEmailRequestSchema,
  userReadSchema,
  userReturnSchema,
  userSchema,
  userUpdateSchema,
} from "../schemas";

import { DeepPartial } from "typeorm";

type IUser = z.infer<typeof userSchema>;

type IUserCreate = z.infer<typeof userCreateSchema>;

type IUserReturn = z.infer<typeof userReturnSchema>;

type IUserEmail = z.infer<typeof userEmailRequestSchema>;

type IUserRead = z.infer<typeof userReadSchema>;

type IUserUpdate = DeepPartial<typeof userUpdateSchema>;

export { IUser, IUserCreate, IUserReturn, IUserEmail, IUserRead, IUserUpdate };