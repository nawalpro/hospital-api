import {getCustomRepository} from "typeorm";
import UserRepository from './PatientRepository';
// import PatientService from './PatientService';
// import PatientController from './PatientController';
// import PatientRouter from './PatientRouter';
import {jwtService} from '../../libs';

const PatientRepository = getCustomRepository(PatientRepository);
const PatientService = new PatientService(PatientRepository);
const PatientController = new PatientController(PatientService, jwtService);
const PatientRouter = PatientRouter(PatientController);

export {PatientController};