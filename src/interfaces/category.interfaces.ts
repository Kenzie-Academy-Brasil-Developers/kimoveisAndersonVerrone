import { z } from "zod";
import {
  categoryCreateSchema,
  categoryReadSchema,
  categorySchema,
} from "../schemas";

type ICategory = z.infer<typeof categorySchema>;

type ICategoryCreate = z.infer<typeof categoryCreateSchema>;

type ICategoryRead = z.infer<typeof categoryReadSchema>;

export { ICategory, ICategoryCreate, ICategoryRead };