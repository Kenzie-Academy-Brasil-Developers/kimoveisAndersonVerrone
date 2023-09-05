import { Router } from "express";
import { userControllers } from "../controllers";
import { checkEmailExist, validateBody, validateToken, validateAdmin, checkUserIdExists, validateLogin } from "../middleware";
import { userCreateSchema, userUpdateSchema } from "../schemas";

export const userRoutes: Router = Router();

userRoutes.use(
    "/:userId",
    checkUserIdExists,
    validateToken
)

userRoutes.post(
    "",
    validateBody( userCreateSchema ),
    checkEmailExist,
    userControllers.create
);

userRoutes.get(
    "",
    validateToken,
    validateAdmin,
    userControllers.read
);

userRoutes.patch(
    "/:userId",
    validateLogin,
    validateBody( userUpdateSchema ),
    userControllers.update
)

userRoutes.delete(
    "/:userId",
    validateAdmin,
    userControllers.remove
)