import PatientDTO from "./PatientDto";
import { ApiError } from "../../helpers/ErrorHelpers";
import { IMailerService } from "./../../libs/mailer";
import { IPatientRepository } from "./PatientRepository";
import { Patient } from "./PatientEntity";

export interface IPatientService {
  getAll(): Promise<PatientDTO[]>;
  register(patientData: any): Promise<PatientDTO>;
  login(patientData: any): Promise<PatientDTO>;
}

export type patientType = {
  firstname: string,
  lastname: string,
  phone: number,
  email: string,
  password: string
}
export default class PatientService implements IPatientService {
  private patientRepo;
  private mailerService;
  constructor(
    patientRepository: IPatientRepository,
    mailerService: IMailerService
  ) {
    this.patientRepo = patientRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const users = await this.patientRepo.findAll();
    return users.map((patient: any) => new PatientDTO(patient));
  }


  async register(patientData:patientType) {
    if (
      !patientData.firstname ||
      !patientData.lastname ||
      !patientData.phone ||
      !patientData.email ||
      !patientData.password
    )
      throw new ApiError(400, "Missing required fields");

    const newPatient = await this.patientRepo.addNew(patientData);
    await this.mailerService.sendMail(patientData);
    return new PatientDTO(newPatient);
  }

  async login(patientData: Patient) {
    if (!patientData.email || !patientData.password)
      throw new ApiError(400, "Missing required email and password fields");

    const patient = await this.patientRepo.findByEmail(patientData);
    console.log(patient);

    if (!patient)
      throw new ApiError(
        400,
        "patient with the specified email does not exists"
      );

    const passwordMatch = await this.patientRepo.compareHash(
      patientData.password,
      patient.password
    );
    if (!passwordMatch)
      throw new ApiError(400, "patient password do not match");

    return new PatientDTO(patient);
  }
}
