import { EntityRepository, EntityManager } from "typeorm";
import { Patient } from "./PatientEntity"

export interface IPatientRepository {
    findAll(): Promise<Patient[]>;
}

@EntityRepository()
class PatientRepository implements IPatientRepository{
    
    constructor(private manager: EntityManager){}

    async findAll(){
        return await this.manager.find(Patient);
    }

}
export default PatientRepository;
