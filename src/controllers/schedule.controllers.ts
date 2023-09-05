import { Response, Request } from "express";
import { IScheduleCreate } from "../interfaces";
import { scheduleServices } from "../services";

const create = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { userId } = res.locals;

    const payload: IScheduleCreate = req.body;

    const schedule = await scheduleServices.create( userId, payload );

    return res.status(201).json(schedule);
};

const read = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstateId  = req.params.id;

    const result = await scheduleServices.read( Number(realEstateId) );

    return res.status(200).json(result);
};

export default {
    create,
    read
};