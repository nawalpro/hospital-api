import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { User } from "../User/UserEntity";

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: any;

  @Column()
  name!: string;

  @ManyToOne(() => User, user => user.roles) user: User;
}


