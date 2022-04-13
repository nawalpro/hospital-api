import patientDTO from "./patientDto";
import { ApiError } from "../../helpers/ErrorHelpers";
import { IPatientRepository } from "./patientRepository";
import { Patient } from "./patientEntity";
import PatientDTO from "./patientDto";

export interface IPatientService {
  getAll(): Promise<PatientDTO[]>;
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
    return patient.map((patient: any) => new PatientDTO(patient));
  }
}
