import { Router } from "express";
import { validateBody } from "../middleware";
import { loginCreateSchema } from "../schemas";
import { loginControllers } from "../controllers";

export const loginRoutes: Router = Router();

loginRoutes.post(
    "",
    validateBody(loginCreateSchema),
    loginControllers.create
)