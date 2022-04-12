import userDTO from "../User/UserDto";
import { ApiError } from "../../helpers/ErrorHelpers";
import { IPatientRepository } from "./PatientRepository";
import { Patient } from "./PatientEntity";

export interface IPatientService {
  getAll(): Promise<userDTO[]>;
}
export default class PatientService implements IPatientService {
  private patientRepo;
  constructor(patientRepository: IPatientRepository) {
    this.patientRepo = patientRepository;
  }
  async getAll() {
    const patients = await this.patientRepo.findAll();
    return patients.map((patient: any) => new userDTO(patient));
  }
}
