import { User } from "../../modules/User/UserEntity";
import { IUserRepository } from "../../modules/User/userRepository";

const user: User[] = [];

class UserRepositoryMock implements IUserRepository {

	async findAll() {
		return user;
	}

	async addNew(patientEntity: User) {
		let user = new User();
		user.firstname = patientEntity.firstname;
		user.lastname = patientEntity.lastname;
		user.phone = patientEntity.phone;
		user.email = patientEntity.email;
		user.password = patientEntity.password;
		const users = []
		users.push(user);
		return users[users.length - 1];
	}

	async findByEmail(email: string) {
		const results = user.filter((patient) => patient);
		return results[0];
	}



	async compareHash(password: string, hash: string): Promise<boolean> {
		return true;
	}

	async checkIfUserExist(userEntity: any){
		const results = user.filter((patient) => patient);
		return results[0];
	}



}
export default UserRepositoryMock;
