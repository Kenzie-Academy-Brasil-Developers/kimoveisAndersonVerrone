import { z } from "zod";

import { loginCreateSchema, loginReturnSchema } from "../schemas";

type ILoginCreate = z.infer<typeof loginCreateSchema>;

type ILoginReturn = z.infer<typeof loginReturnSchema>;

export { ILoginCreate, ILoginReturn };
