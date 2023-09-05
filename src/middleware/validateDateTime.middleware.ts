import { NextFunction, Request, Response } from "express";
import { IScheduleCreate } from "../interfaces";
import { AppError } from "../error";

export const validateDateTime = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise< Response | void > => {
    const payload: IScheduleCreate = req.body;

    const { date, hour } = payload;

    const [ year, month, day ]: Array<number> = date.split('/').map(Number);

    const [ hourOfDay, minute ]: Array<number> = hour.split(':').map(Number);

    const dateTime = new Date ( year, month - 1, day, hourOfDay, minute );

    if ( dateTime.getHours() < 8 || dateTime.getHours() >= 18 ) {
        throw new AppError('Invalid hour, available times are 8AM to 18PM', 400);
    }

    if ( dateTime.getDay() === 0 || dateTime.getDay() === 6 ) {
        throw new AppError('Invalid date, work days are monday to friday', 400);
    }

    return next();
};