import { Router } from "express";
import { checkCategoryExist, validateAdmin, validateBody, validateToken } from "../middleware";
import { categoryCreateSchema } from "../schemas";
import { categoryControllers } from "../controllers";

export const categoryRoutes: Router = Router();

categoryRoutes.post(
    "",
    validateToken,
    validateAdmin,
    validateBody(categoryCreateSchema),
    categoryControllers.create
);

categoryRoutes.get(
    "",
    categoryControllers.read
);

categoryRoutes.get(
    "/:categoryId/realEstate",
    checkCategoryExist,
    categoryControllers.readByCategory
)