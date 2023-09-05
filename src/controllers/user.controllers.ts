import { Request, Response } from "express"
import { IUserCreate, IUserRead, IUserReturn, IUserUpdate } from "../interfaces"
import { userServices } from "../services";

const create = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const payload: IUserCreate = req.body;    

    const newUser: IUserReturn = await userServices.create( payload );

    return res.status( 201 ).json( newUser );
};

const read = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userList: IUserRead = await userServices.read();

    return res.status( 200 ).json( userList );
};

const update = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { userId } = req.params;

    const payload: IUserUpdate = req.body;

    const user: IUserReturn = await userServices.update( Number( userId ), payload );

    return res.status( 200 ).json( user );
}

const remove = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { userId } = req.params;
    
    await userServices.remove(Number(userId));

    return res.status(204).send();
}

export default {
    create,
    read,
    update,
    remove
}