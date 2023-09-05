import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../error";
import { ICategory, ICategoryCreate, ICategoryRead } from "../interfaces";
import { Repository } from "typeorm";
import { categoryReadSchema, categorySchema } from "../schemas";

const create = async (payload: ICategoryCreate): Promise<ICategory> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

    const category: Category | null = await categoryRepository.findOne({
        where: {
            name: payload.name,
        },
    });

    if ( category ) {
        throw new AppError ("Category already exists", 409);
    }

    const createdCategory: Category = categoryRepository.create( payload );

    await categoryRepository.save( createdCategory );

    const newCategory: ICategory = categorySchema.parse( createdCategory );

    return newCategory;
};

const read = async (): Promise<ICategoryRead> => {
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const category: Category[] = await categoryRepository.find();

    const categoryList: ICategoryRead = categoryReadSchema.parse(category);

    return categoryList;
};

const readByCategory = async ( categoryId: number ): Promise<Category | null> => {
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const categoryRealEstate: Category | null = await categoryRepository
        .createQueryBuilder("categories")
        .leftJoinAndSelect("categories.realEstate", "realEstate")
        .where("categories.id = :categoryId" , { categoryId })
        .getOne();

    return categoryRealEstate;
}


export default {
    create,
    read,
    readByCategory
}
