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
  const response = await supertest(App).get('/auth');
  token = response.body.token;
});

afterAll(async () => {
  await database.close();
});

describe("POST /patient", () => {
  it("Should return a 201 http status code and return the specified data!!!!!", async () => {
    const res = await request(server.app)
      .post("/user")
      .send({
        email: "toto@test.fr",
        password: "1234",
      });
    expect(res.body.email).toBe("toto@test.fr");
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

describe("GET /user", () => {
  it("Should return a 200 http status code", async () => {
    const res = await (await request(server.app)
      .get("/patient")
      .set("auth-cookie", `token ${token}`));
    expect(res.statusCode).toEqual(200);
  });
});
