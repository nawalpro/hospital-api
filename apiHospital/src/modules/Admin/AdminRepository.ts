import { EntityRepository, EntityManager } from "typeorm";
import { User } from "../User/UserEntity";


export interface IAdminRepository {
    findAll(): Promise<User[]>;
}

@EntityRepository()
class AdminRepository implements IAdminRepository {
    
        constructor(private manager: EntityManager) {}
    
        async findAll() {
            return await this.manager.find(User);
        }
    }
export default AdminRepository;