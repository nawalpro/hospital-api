import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  ManyToMany,
} from "typeorm";

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: any;

  @Column()
  UserId!: string;

  @Column()
  RolesId!: string;

  @ManyToMany(() => 
  // Document, document => 
  )
  
}
