import { Repository } from "typeorm";
import { IUserCreate, IUserRead, IUserReturn, IUserUpdate } from "../interfaces";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { userReadSchema, userReturnSchema } from "../schemas";

const create = async (
    payload: IUserCreate
): Promise<IUserReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository( User );

    const createdUser = userRepository.create( payload );
    
    await userRepository.save( createdUser );

    const newUser: IUserReturn = userReturnSchema.parse( createdUser );

    return newUser;
};

const read = async (): Promise<IUserRead> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user = await userRepository.find();

    const userList: IUserRead = userReadSchema.parse(user);

    return userList;
}

const update = async ( 
    userId: number, 
    payload: IUserUpdate
): Promise<IUserReturn> => {
    console.log(payload);
    
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const oldUser: User | null = await userRepository.findOne({
        where: {
            id: userId,
        },
    });

    const newUser: User = userRepository.create({
        ...oldUser,
        ...payload,
    });

    await userRepository.save(newUser);

    const updatedUser: IUserReturn = userReturnSchema.parse(newUser);

    return updatedUser;
}

const remove = async ( userId: number ): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({
        where: {
            id: userId,
        },
    });

    await userRepository.softRemove(user!);
};

export default {
    create,
    read,
    update,
    remove
}