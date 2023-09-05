import { z } from "zod";
import { addressCreateSchema } from "./address.schemas";

const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.string().or(z.number().nonnegative()),
  size: z.number().int().positive(),
  address: addressCreateSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  categoryId: z.number(),
});

const realEstateCreateSchema = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
});

const realEstateReturnSchema = realEstateSchema.omit({
  categoryId: true,
});

const realEstateReadSchema = realEstateReturnSchema.array();

export {
  realEstateSchema,
  realEstateCreateSchema,
  realEstateReturnSchema,
  realEstateReadSchema,
};
