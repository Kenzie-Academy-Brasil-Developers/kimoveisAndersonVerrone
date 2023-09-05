import { Router } from "express";
import { validateAdmin, validateBody, validateToken } from "../middleware";
import { realEstateCreateSchema } from "../schemas";
import { realEstateControllers } from "../controllers";

export const realEstateRoutes: Router = Router();

realEstateRoutes.post(
    "",
    validateToken,
    validateAdmin,
    validateBody(realEstateCreateSchema),
    realEstateControllers.create
);

realEstateRoutes.get(
    "",
    realEstateControllers.read
);