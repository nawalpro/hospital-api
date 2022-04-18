import {getCustomRepository} from "typeorm";
import PatientRepository from './patientRepository';
import PatientService from './patientService';
import PatientController from './patientController';
import PatientRouter from './patientRouter';
import {jwtService} from '../../libs';

const patientRepository = getCustomRepository(PatientRepository);   
const patientService = new PatientService(patientRepository);
const patientController = new PatientController(patientService, jwtService);
const patientRouter = PatientRouter(patientController);

export {patientController};
