import {getCustomRepository} from "typeorm";
import RoleRepository from './RoleRepository';
import RoleService from './RoleService';
import RoleController from './RoleController';
import RoleRouter from './RoleRouter';
import { jwtService } from "../../libs";

const roleRepository = getCustomRepository(RoleRepository);
const roleService = new RoleService(roleRepository);
const roleController = new RoleController(roleService, jwtService);
const roleRouter = RoleRouter(roleController);

export {roleController};