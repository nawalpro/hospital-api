import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
// import { Doctor } from

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
  roles!: number;

//   @OneToMany(() => Doctor, doctor => patient.doctor)
//   patients: any;
}


