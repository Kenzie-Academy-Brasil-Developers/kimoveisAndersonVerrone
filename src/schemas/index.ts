import { addressCreateSchema, addressSchema } from "./address.schemas";

import {
  categoryCreateSchema,
  categoryReadSchema,
  categorySchema,
} from "./category.schemas";

import { loginCreateSchema, loginReturnSchema } from "./login.schemas";

import {
  realEstateCreateSchema,
  realEstateReadSchema,
  realEstateReturnSchema,
  realEstateSchema,
} from "./realEstate.schemas";

import { scheduleCreateSchema, scheduleSchema } from "./schedule.schemas";

import {
  userCreateSchema,
  userEmailRequestSchema,
  userReadSchema,
  userReturnSchema,
  userSchema,
  userUpdateSchema,
} from "./user.schemas";

export {
  userSchema,
  userCreateSchema,
  userReturnSchema,
  userEmailRequestSchema,
  userReadSchema,
  userUpdateSchema,
  scheduleSchema,
  scheduleCreateSchema,
  addressSchema,
  addressCreateSchema,
  realEstateSchema,
  realEstateCreateSchema,
  realEstateReturnSchema,
  realEstateReadSchema,
  loginCreateSchema,
  loginReturnSchema,
  categorySchema,
  categoryCreateSchema,
  categoryReadSchema,
};
