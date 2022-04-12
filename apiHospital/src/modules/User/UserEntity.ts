import { Entity, PrimaryGeneratedColumn, Column,OneToMany, BaseEntity } from "typeorm";
import { Role } from "../Role/RoleEntity"

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: any;

  @Column()
  firstname!: string;

  @Column()
  lastname!: string;

  @Column()
  phone!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Role, role => role.user)
  roles: Role[];

  // @OneToMany(() => Photo, photo => photo.user)
  // photos: Photo[];

}


