"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PatientService_1 = __importDefault(require("../../modules/Patient/PatientService"));
const patientRepository_mock_1 = __importDefault(require("../mocks/patientRepository.mock"));
const libs_1 = require("../../libs");
const patientService = new PatientService_1.default(new patientRepository_mock_1.default(), libs_1.mailerService);
describe("Patient service USE-CASE : ", () => {
    describe("add patient use case : ", () => {
        it("Should throw an error if patientData is empty or null", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield patientService.register({
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    phone: 12345632112
                });
            }
            catch (e) {
                expect(e.statusCode).toBe(400);
                expect(e.message).toBe("Missing required fields");
            }
        }));
        // it('Should throw an error if patientdata is empty or null', async () => {
        // 	const patient = await patientService.add({ firstname: "Brigitte", lastname: "Lolekunda", email: "Lolekunda", password: "klkdeljf23"});
        // 	expect(patient.firstname).toBe("Brigitte");
        // 	expect(patient.lastname).toBe("Lolenkunda");
        // 	expect(patient.email).toBe("Brigitte");
        // 	expect(patient.password).toBe("klkdeljf23");
        // 	expect(patient instanceof Patient).toBe(true);
        // })
        // it('Should return an array of Patient instance', async () => {
        // 	const patients = await patientService.getAll();
        // 	expect(patients[0] instanceof Patient).toBe(true);
        // 	expect(patients[0].firstname).toBe("Brigitte")
        // 	expect(patients[0].lastname).toBe("Lolekunda")
        // 	expect(patients[0].email).toBe("bLol@gmail.com")
        // 	expect(patients[0].password).toBe("klkdeljf23")
        // })
    });
});
