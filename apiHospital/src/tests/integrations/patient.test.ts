import request from "supertest";
import database from "../../config/database";
import App from "../../config/server";
import routes from "../../modules/index";
import middlewares from "../../middlewares";
import PatientDTO from "../../modules/Patient/PatientDto";

let server = new App(routes, middlewares);

beforeAll(async () => {
  await database.connect();
});

afterAll(async () => {
  await database.close();
});

//register
describe("POST /patient", () => {
  it("Should return a 201 http status code and return the specified data", async () => {
    const res = await request(server.app)
      .post("/patient")
      .send({
        firstname: "Brigitte",
        lastname: "Lolekunda",
        phone: 0989829787,
        email: "toto@test.fr",
        password: "1234",
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.firstname).toBe("Brigitte");
    expect(res.body.lastname).toBe("Lolekunda");
    expect(res.body.phone).toBe(0989829787);
    expect(res.body.email).toBe("toto@test.fr");
    expect(res.body.password).toBe("1234");
  });
});
//login
describe("POST /patient/auth", () => {
  it("Should return a 200 http status code", async () => {
    const res = await request(server.app)
      .post("/patient/auth")
      .send({ email: "je@hotmail.fr", password: "1234" });
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /patient", () => {
  it("Should return a 200 http status code", async () => {
    const res = await request(server.app).get("/patient");
    expect(res.statusCode).toEqual(200);
  });
});
