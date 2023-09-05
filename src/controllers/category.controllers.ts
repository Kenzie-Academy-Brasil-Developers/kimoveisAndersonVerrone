import { Request, Response } from "express"
import { ICategory, ICategoryCreate, ICategoryRead } from "../interfaces"
import { categoryServices } from "../services";

const create = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const payload: ICategoryCreate = req.body;

    const newCategory: ICategory = await categoryServices.create(payload);

    return res.status(201).json(newCategory);
}

const read = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const categoryList: ICategoryRead = await categoryServices.read();

    return res.status(200).json(categoryList);
};

const readByCategory = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { categoryId } = res.locals;

    const readCategory = await categoryServices.readByCategory(categoryId);

    return res.status(200).json(readCategory);
}

export default {
    create,
    read,
    readByCategory
};