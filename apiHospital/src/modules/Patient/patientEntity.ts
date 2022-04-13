import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  ManyToMany
} from "typeorm";
import { Role } from "../Role/RoleEntity";
import { User } from "../User/UserEntity";

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: any;

  @ManyToMany(() => Role,
  role => role.id)
  role!: Role[];
  
  @ManyToMany(() => User,
  user => user.id)
  user!: User[];
}
