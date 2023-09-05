import { z } from "zod";
import { addressCreateSchema, addressSchema } from "../schemas";

type IAddress = z.infer<typeof addressSchema>;

type IAddressCreate = z.infer<typeof addressCreateSchema>;

export { IAddress, IAddressCreate };