import { z } from "zod";

import {
  realEstateCreateSchema,
  realEstateReadSchema,
  realEstateReturnSchema,
  realEstateSchema,
} from "../schemas";

type IRealEstate = z.infer<typeof realEstateSchema>;

type IRealEstateCreate = z.infer<typeof realEstateCreateSchema>;

type IRealEstateReturn = z.infer<typeof realEstateReturnSchema>;

type IRealEstateRead = z.infer<typeof realEstateReadSchema>;

export { IRealEstate, IRealEstateCreate, IRealEstateReturn, IRealEstateRead };
