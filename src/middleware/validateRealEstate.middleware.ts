import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { IScheduleCreate } from "../interfaces";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";
import { AppDataSource } from "../data-source";

export const validateRealEstate = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise< Response | void > => {
    const payload: IScheduleCreate = req.body;

    const { realEstateId } = payload;

    const { id } = req.params;

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository( RealEstate );

    const realEstate: RealEstate | null = await realEstateRepository.findOne({
        where: {
            id: realEstateId || Number(id),
        },
    });

    if ( !realEstate ) {
        throw new AppError('RealEstate not found', 404);
    };

    return next();
}