import { Repository } from "typeorm";
import { Address, Category, RealEstate } from "../entities";
import { IRealEstateCreate } from "../interfaces";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const create = async ( payload: IRealEstateCreate ): Promise<RealEstate> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const category: Category | null = await categoryRepository.findOne({
        where: {
            id: payload.categoryId,
        },
    });

    if ( !category ) {
        throw new AppError("Category not found", 404);
    };

    const checkAddressExists: Address | null = await addressRepository.findOne({
        where: {
            street: payload.address.street,
            zipCode: payload.address.zipCode,
            city: payload.address.city,
            state: payload.address.state,
        },
    });

    if ( checkAddressExists ) {
        throw new AppError("Address already exists", 409);
    }

    const payloadAddress = payload.address;

    const address: Address = addressRepository.create(payloadAddress);

    await addressRepository.save(address);

    const realEstate: RealEstate = realEstateRepository.create({
        ...payload,
        address: address,
        category: category,
    });

    await realEstateRepository.save(realEstate);

    return realEstate;
};

const read = async (): Promise<RealEstate[]> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEstate: RealEstate[] = await realEstateRepository.find({
        relations: {
            address: true,
        },
    });

    return realEstate;
}

export default {
    create,
    read
}