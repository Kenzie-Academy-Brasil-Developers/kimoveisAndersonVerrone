import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

export const validateAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const isAdmin: boolean = res.locals.admin;

  if (!isAdmin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
