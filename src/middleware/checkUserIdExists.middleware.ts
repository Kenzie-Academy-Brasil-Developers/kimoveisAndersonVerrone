import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

export const checkUserIdExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise< Response | void > => {
    const { userId } = req.params;

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({
        where: {
            id: Number(userId),
        },
    });

    if ( !user ) {
        throw new AppError("User not found", 404);
    };

    return next();
};