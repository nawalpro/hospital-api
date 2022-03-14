import PatientDTO from './PatientDto';
import { IPatientRepository } from './PatientRepository';
import { Patient } from './PatientEntity';
import { ApiError } from "../../helpers/errors"

export interface IUatientService {
    getAll() : Promise<PatientDTO[]>
    register(patientData: any) : Promise<PatientDTO>
    login(patientData: any) : Promise<PatientDTO>
}

export default class PatientService implements IPatientService {

    private patientRepo;
    private mailerService;

    constructor(patientRepository: IPatientRepository, mailerService : IMailerService) {
        this.patientRepo = patientRepository;
        this.mailerService = mailerService;
    }

    async getAll() {
        const patients = await this.patientRepo.findAll();
        return patients.map((patient: any) => new PatientDTO(patient));
    }

    async register(patientData: Patient) {
        
        if (!patientData.email || !patientData.password)
            throw new ApiError(400, 'Missing required email and password fields');
        
        const newPatient = await this.patientRepo.addNew(patientData);
        await this.mailerService.sendMail(patientData);
        return new PatientDTO(newPatient);
    }

    async login(patientData : Patient) {

        if (!patientData.email || !patientData.password)
            throw new ApiError(400, 'Missing required email and password fields');
        
        const patient = await this.patientRepo.findByEmail(patientData);
        console.log(patient);
        
        if (!patient)
            throw new ApiError(400, 'Patient with the specified email does not exists');

        const passwordMatch = await this.patientRepo.compareHash(patientData.password, patient.password);
        if (!passwordMatch)
            throw new ApiError(400, 'Patient password do not match');

        return new PatientDTO(patient);
    }
}