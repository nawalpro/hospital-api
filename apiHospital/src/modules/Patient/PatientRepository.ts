import { EntityRepository, EntityManager } from "typeorm";
import bcrypt from "bcrypt";
import { Patient } from "./PatientEntity";
//importer l'entity Docteur ici

export interface IPatientRepository {
  findAll(): Promise<Patient[]>;
  addNew(patientEntity: any): Promise<Patient>;
  findByeEmail(patientEntity: any): Promise<Patient | undefined>;
  compareHash(password: string, hash: string): Promise<boolean>;
}

@EntityRepository()
class PatientRepository implements IPatientRepository {
  constructor(private manager: EntityManager) {}
  async findAll() {
    return await this.manager.find(Patient);
  }

  async addNew(patientEntity: any) {
    const salt = bcrypt.genSaltSync(10);
    patientEntity.password = bcrypt.hashSync(patientEntity.password, salt);
    return await this.manager.save(Patient, patientEntity);
  }

  async findByeEmail(patientEntity: any) {
    console.log(patientEntity);
    return await this.manager.findOne(Patient, { email: patientEntity.email });
  }

  compareHash = async (password: string, hash: string) =>
    await bcrypt.compareSync(password, hash);
}
export default PatientRepository;
