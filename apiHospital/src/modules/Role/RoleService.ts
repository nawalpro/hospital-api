import RoleDTO from "./RoleDto";
import { ApiError } from "../../helpers/ErrorHelpers";
import { IRoleRepository } from "./RoleRepository";
import { Role } from "./RoleEntity";

export interface IRoleService {
  getAll(): Promise<RoleDTO[]>;
}

export type roleType = {
  name: string,
}
export default class RoleService implements IRoleService {
  private roleRepo;
  constructor(
    roleRepository: IRoleRepository,
  ) {
    this.roleRepo = roleRepository;
  }

  async getAll() {
    const roles = await this.roleRepo.getAll();
    return roles.map((role: any) => new RoleDTO(role));
  }

}
