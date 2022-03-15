import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
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
  phone!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

//   @OneToMany(() => Doctor, doctor => patient.doctor)
//   patients: any;
}


export type patient = {
  
  firstname: string,
  lastname: string,
  phone: number,
  email: string,
  password: string,

}