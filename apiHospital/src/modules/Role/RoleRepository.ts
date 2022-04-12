import { EntityRepository, EntityManager } from "typeorm";
import { Role } from "./RoleEntity";

export interface IRoleRepository {
  getAll(): Promise<Role[]>;
}

@EntityRepository()

class RoleRepository implements RoleRepository {

  constructor(private manager: EntityManager) {}

  async getAll() {
    return await this.manager.find(Role);
  }

}

export default RoleRepository;
