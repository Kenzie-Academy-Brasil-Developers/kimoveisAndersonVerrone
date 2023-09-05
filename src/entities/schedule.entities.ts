import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entities";
import { RealEstate } from "./realEstate.entities";

@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn( "increment" )
  id: number;

  @Column({ type: "date" })
  date: string | Date;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User, (user) => user.schedule)
  user: User;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
  realEstate: RealEstate;
}
