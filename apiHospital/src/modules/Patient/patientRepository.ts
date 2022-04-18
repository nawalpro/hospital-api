import { EntityRepository, EntityManager } from "typeorm";
import { User } from "../User/UserEntity"

export interface IPatientRepository {
    findAll(): Promise<User[]>;
}
@EntityRepository()
class PatientRepository implements IPatientRepository{
    
    constructor(private manager: EntityManager){}

    async findAll(){
        return await this.manager.find(User);
    }

}
export default PatientRepository;
