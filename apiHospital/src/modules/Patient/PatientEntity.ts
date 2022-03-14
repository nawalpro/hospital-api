import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  OneToMany,
} from "typeorm";
// import { Doctor } from

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: any;

  @Column()
  firstname!: string;

  @Column()
  lastname!: string;

  @Column()
  phone!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

//   @OneToMany(() => Doctor, doctor => patient.doctor)
//   patients: any;
}
