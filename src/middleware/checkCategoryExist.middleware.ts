import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { AppError } from "../error";

export const checkCategoryExist = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise< Response | void > => {
    const { categoryId } = req.params;

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const category: Category | null = await categoryRepository.findOne({
        where: {
            id: Number(categoryId),
        },
    });

    if ( !category ) {
        throw new AppError("Category not found", 404); 
    };

    res.locals.categoryId = categoryId;

    return next();
};