import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

export const validateLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise< Response | void > => {
    const { userId } = req.params;

    const isAdmin = res.locals.admin;

    const IdLogged = res.locals.userId;

    if ( !isAdmin && IdLogged !== userId) {
        throw new AppError("Insufficient permission", 403);
    }

    return next();
};