import request from "supertest";
import database from "../../config/database";
import App from "../../config/server";
import routes from "../../modules/index";
import middlewares from "../../middlewares";
import PatientDTO from "../../modules/User/UserDto";
import supertest from "supertest";

let server = new App(routes, middlewares);
let token = '';

beforeAll(async () => {
  await database.connect();
  // const response = await supertest(App).post('/auth');
  // token = response.body.token;
});

afterAll(async () => {
  await database.close();
});

describe("POST /users/", () => {
  it("Should return a 422 http status code and return  password message error!!!!!", async () => {
    const res = await request(server.app)
      .post("/user")
      .send({
        email: "toto@test.fr",
        firstname: "jerome",
        lastname:"romje",
        phone:"0606060606",
        password: "1234",
      });
    expect(422);
  });
});


describe("POST /user/auth", () => {
  it("Should return a 200 http status code", async () => {
    const res = await request(server.app)
    .post("/patient/auth")
    .set('Authorization', `Bearer ${token}`)
    .send({ email: "toto@test.fr", password: "1234"  });
      expect(200);
  });
});

describe("GET /users/", () => {
  it("Should return a 401 http status code", async () => {
    const res = await (await request(server.app)
      .get("/users/")
      .set('Authorization', `Bearer ${token}`)
     );
    expect(res.statusCode).toEqual(401);
  });
});
