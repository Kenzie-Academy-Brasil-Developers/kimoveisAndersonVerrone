import { Repository } from "typeorm";
import { IScheduleCreate, IScheduleReturn } from "../interfaces";
import { RealEstate, Schedule } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const create = async (
    userId: number,
    payload: IScheduleCreate
): Promise<IScheduleReturn> => {
    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);

    const { date, hour, realEstateId } = payload;

    const checkUserSchedule: Schedule[] = await scheduleRepository
        .createQueryBuilder("schedules")
        .where("schedules.user = :userId", { userId })
        .andWhere("schedules.date = :date", { date })
        .andWhere("schedules.hour = :hour", { hour })
        .getMany();

    if ( checkUserSchedule.length > 0 ) {
        throw new AppError("User schedule to this real estate at this date and time already exists", 409);
    };

    const checkRealEstateSchedule: Schedule[] = await scheduleRepository
        .createQueryBuilder("schedules")
        .where("schedules.realEstate = :realEstateId", { realEstateId })
        .andWhere("schedules.date = :date", { date })
        .andWhere("schedules.hour = :hour", { hour })
        .getMany();

    if ( checkRealEstateSchedule.length > 0 ) {
        throw new AppError("Schedule to this real estate at this date and time already exists", 409);
    };

    const schedule: Schedule = scheduleRepository.create({
        date: payload.date,
        hour: payload.hour,
        realEstate: { id: payload.realEstateId },
        user: { id: userId },
    });

    await scheduleRepository.save(schedule);

    const message: IScheduleReturn = { message: "Schedule created" };

    return message;
}

const read = async ( realEstateId: number ): Promise<RealEstate | null> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEstate: RealEstate | null = await realEstateRepository
        .createQueryBuilder("realEstates")
        .leftJoinAndSelect("realEstates.address", "address")
        .leftJoinAndSelect("realEstates.category", "category")
        .leftJoinAndSelect("realEstates.schedules", "schedules")
        .leftJoinAndSelect("schedules.user", "user")
        .where("realEstates.id = :realEstateId", { realEstateId })
        .getOne();

    return realEstate;
} 

export default {
    create,
    read
}