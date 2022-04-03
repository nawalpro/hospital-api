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
Object.defineProperty(exports, "__esModule", { value: true });
const PatientEntity_1 = require("../../modules/Patient/PatientEntity");
const patients = [];
class PatientRepositoryMock {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return patients;
        });
    }
    addNew(patientEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            let patient = new PatientEntity_1.Patient();
            patient.firstname = patientEntity.firstname;
            patient.lastname = patientEntity.lastname;
            patient.phone = patientEntity.phone;
            patient.email = patientEntity.email;
            patient.password = patientEntity.password;
            patients.push(patient);
            return patients[patients.length - 1];
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = patients.filter((patient) => patient);
            return results[0];
        });
    }
    compareHash(password, hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
}
exports.default = PatientRepositoryMock;
