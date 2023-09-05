import { Router } from "express";
import { validateAdmin, validateBody, validateDateTime, validateRealEstate, validateToken } from "../middleware";
import { scheduleCreateSchema } from "../schemas";
import { scheduleControllers } from "../controllers";

export const scheduleRoutes: Router = Router();

scheduleRoutes.post(
    "",
    validateToken,
    validateBody( scheduleCreateSchema ),
    validateRealEstate,
    validateDateTime,
    scheduleControllers.create
)

scheduleRoutes.get(
    "/realEstate/:id",
    validateToken,
    validateAdmin,
    validateRealEstate,
    scheduleControllers.read
)