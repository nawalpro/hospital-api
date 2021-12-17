const  Router  = require ('express');
const isAuth = require('../../middlewares/auth');
const PatientController = require( './PatientController');
const Patient = require( './PatientModel');

const PatientRouter = Router();
const entrypoint = '/patient';

PatientRouter
    .route(`${entrypoint}`)
        .get(PatientController.getAll, isAuth)
        .post(PatientController.register);
PatientRouter.route(`${entrypoint}/auth`).post(PatientController.login);
// PatientRouter.route(`${entrypoint}/auth/refresh`).get(refreshAccess);


module.exports = PatientRouter;