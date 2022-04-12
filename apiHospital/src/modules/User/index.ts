import {getCustomRepository} from "typeorm";
import UserRepository from './UserRepository';
import UserService from './UserService';
import UserController from './UserController';
import UserRouter from './UserRouter';
import { jwtService, mailerService } from '../../libs';

const userRepository = getCustomRepository(UserRepository);
const userService = new UserService(userRepository, mailerService);
const userController = new UserController(userService, jwtService);
const userRouter = UserRouter(userController);

export {userController};