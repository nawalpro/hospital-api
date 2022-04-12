import { Entity, PrimaryGeneratedColumn, Column,OneToMany, BaseEntity } from "typeorm";

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

  @Column()
  admin!: boolean;

  @Column()
  doctor!: boolean;

  @Column()
  verified!: boolean;

  @Column()
  token!: string;

  @Column()
  tokenExp!: Date;

  @Column()
  createdAt!: Date;

  // @OneToMany(() => Photo, photo => photo.user)
  // photos: Photo[];

}


