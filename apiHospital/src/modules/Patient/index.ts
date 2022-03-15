import {getCustomRepository} from "typeorm";
import PatientRepository from './PatientRepository';
import PatientService from './PatientService';
import PatientController from './PatientController';
import PatientRouter from './PatientRouter';
import {jwtService, mailerService} from '../../libs';

const patientRepository = getCustomRepository(PatientRepository);
const patientService = new PatientService(patientRepository, mailerService);
const patientController = new PatientController(patientService, jwtService);
const patientRouter = PatientRouter(patientController);

export {patientController};