import UserService from "../../modules/User/UserService";
import UserRepositoryMock from "../mocks/userRepository.mock";
import { mailerService } from "../../libs";


const userService = new UserService( new UserRepositoryMock(), mailerService);

describe("user service USE-CASE : ", () => {
  
  describe("add user use case : ", () => {
   
    it("Should throw an error if patientData is empty or null", async () => {
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


  })
})
