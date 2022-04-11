import { EntityRepository, EntityManager } from "typeorm";
import bcrypt from "bcrypt";
import { User } from "./UserEntity";
//importer l'entity Docteur ici

export interface IUserRepository {
  findAll(): Promise<User[]>;
  addNew(patientEntity: any): Promise<User>;
  findByEmail(patientEntity: any): Promise<User | undefined>;
  compareHash(password: string, hash: string): Promise<boolean>;
}

@EntityRepository()
class UserRepository implements IUserRepository {

  constructor(private manager: EntityManager) {}

  async findAll() {
    return await this.manager.find(User);
  }

  async addNew(patientEntity: any) {
    const salt = bcrypt.genSaltSync(10);
    patientEntity.password = bcrypt.hashSync(patientEntity.password, salt);
    return await this.manager.save(User, patientEntity);
  }

  async findByEmail(patientEntity: any) {
    console.log(patientEntity);
    return await this.manager.findOne(User, { email: patientEntity.email });
  }
  compareHash = async (password: string, hash: string) => await bcrypt.compareSync(password, hash);
}
export default UserRepository;
