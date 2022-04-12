import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  ManyToMany
} from "typeorm";
import { User } from "../User/UserEntity";

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: any;
  
  @ManyToMany(() => User,
  user => user.id)
  user!: User[];
}
