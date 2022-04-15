import { ApiError } from "../../helpers/ErrorHelpers";
import { IPatientRepository } from "./patientRepository";
import userDTO from "../User/UserDto";

export interface IPatientService {
  getAll(): Promise<userDTO[]>;
}
export type patientType = {};
export default class PatientService implements IPatientService {
  private patientRepo;
  constructor(patientRepository: IPatientRepository) {
    this.patientRepo = patientRepository;
  }
  async getAll() {
    const patient = await this.patientRepo.find({
      where: {
        role: "patient",
      },
    });
    return patient.map((patient: any) => new userDTO(patient));
  }
}
