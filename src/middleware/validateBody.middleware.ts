import { ZodTypeAny } from "zod";

import { NextFunction, Request, Response } from "express";

export const validateBody = ( schema: ZodTypeAny ) => 
    ( req: Request, res: Response, next: NextFunction ) => {
        const validatedData = schema.parse( req.body );

        req.body = validatedData;

        return next();
    };