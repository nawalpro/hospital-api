import {getCustomRepository} from "typeorm";
import PatientRepository from './patientRepository';
import PatientService from './patientService';
import PatientController from './patientController';
import PatientRouter from './patientRouter';
import {jwtService} from '../../libs';

const PatientRepository = getCustomRepository(PatientRepository);
const PatientService = new PatientService(PatientRepository);
const PatientController = new PatientController(PatientService, jwtService);
const PatientRouter = PatientRouter(PatientController);

export {PatientController};