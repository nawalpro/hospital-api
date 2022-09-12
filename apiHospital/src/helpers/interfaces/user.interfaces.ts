import { User } from "../../modules/User/UserEntity";
import UserDTO from '../../modules/User/UserDto'
import { user } from "../types/user.types";

export interface IUserService {
    getAll(): Promise<UserDTO[]>;
    register(userData: user): Promise<UserDTO>;
    login(userData: user): Promise<UserDTO>;
  }

  export interface IUserRepository {
    addNew(userEntity: any): Promise<User>;
    checkIfUserExist(userEntity: any): Promise<User | undefined>;
    findAll(): Promise<User[]>;
    findByEmail(userEntity: any): Promise<User | undefined>;
    compareHash(password: string, hash: string): Promise<boolean>;
  }