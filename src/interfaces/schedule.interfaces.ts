import { z } from "zod";

import { scheduleCreateSchema, scheduleSchema } from "../schemas";

type ISchedule = z.infer<typeof scheduleSchema>;

type IScheduleCreate = z.infer<typeof scheduleCreateSchema>;

type IScheduleReturn = {
  message: string;
};

export { ISchedule, IScheduleCreate, IScheduleReturn };
