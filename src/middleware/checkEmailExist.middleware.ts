import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

export const checkEmailExist = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise< Response | void > => {
    const { email } = req.body;

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const foundUser: User | null = await userRepository.findOne({
        where: {
            email: email,
        },
    });

    if ( foundUser ) {
        throw new AppError("Email already exists", 409);
    };    

    return next();
};