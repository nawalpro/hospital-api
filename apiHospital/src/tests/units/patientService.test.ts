import UserService from "../../modules/User/UserService";
import UserRepositoryMock from "../mocks/UserRepository.mock";
import { IMailerService } from "./../../libs/mailer";
import { IUserRepository  } from "../../modules/User/UserRepository";
import { User } from "../../modules/User/UserEntity";
import { mailerService } from "../../libs";
import { Any } from "typeorm";


const userService = new UserService( new UserRepositoryMock(), mailerService);

describe("User service USE-CASE : ", () => {
  
  describe("add User use case : ", () => {
   
    it("Should throw an error if UserData is empty or null", async () => {
      try {
        await userService.register({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          phone: 12345632112
        });
      } catch (e:any) {
        
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe("Missing required fields");
      }
    })

    // it('Should throw an error if Userdata is empty or null', async () => {
    // 	const User = await userService.add({ firstname: "Brigitte", lastname: "Lolekunda", email: "Lolekunda", password: "klkdeljf23"});

    // 	expect(User.firstname).toBe("Brigitte");
    // 	expect(User.lastname).toBe("Lolenkunda");
    // 	expect(User.email).toBe("Brigitte");
    // 	expect(User.password).toBe("klkdeljf23");

    // 	expect(User instanceof User).toBe(true);

    // })

    // it('Should return an array of User instance', async () => {

    // 	const Users = await UserService.getAll();

    // 	expect(Users[0] instanceof User).toBe(true);

    // 	expect(Users[0].firstname).toBe("Brigitte")
    // 	expect(Users[0].lastname).toBe("Lolekunda")
    // 	expect(Users[0].email).toBe("bLol@gmail.com")
    // 	expect(Users[0].password).toBe("klkdeljf23")
    // })
  })
})
