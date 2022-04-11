import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: any;

  @Column()
  name!: string;
}


