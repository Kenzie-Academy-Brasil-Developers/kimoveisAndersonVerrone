import { Request, Response } from "express";
import { ILoginCreate, ILoginReturn } from "../interfaces"
import { loginServices } from "../services";

const create = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const payload: ILoginCreate = req.body;

    const token: ILoginReturn = await loginServices.create(payload);

    return res.status(200).json(token);
}

export default {create};