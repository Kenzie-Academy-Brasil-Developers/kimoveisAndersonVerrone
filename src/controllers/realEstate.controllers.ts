import { Request, Response } from "express";
import { IRealEstateCreate } from "../interfaces";
import { realEstateServices } from "../services";

const create = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const payload: IRealEstateCreate = req.body;

    const newRealEstate = await realEstateServices.create( payload );

    return res.status(201).json(newRealEstate);
};

const read = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstate = await realEstateServices.read();

    return res.status(200).json(realEstate);
}

export default {
    create,
    read
}