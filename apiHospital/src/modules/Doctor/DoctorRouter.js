const  Router  = require ('express');
const isAuth = require('../../middlewares/auth');
const DoctorController = require( './DoctorController');
const Doctor = require( './DoctorModel');

const DoctorRouter = Router();
const entrypoint = '/doctor';

DoctorRouter
    .route(`${entrypoint}`)
        .get(DoctorController.getAll)
        .post(DoctorController.register);
    DoctorRouter.route(`${entrypoint}/auth`).post(DoctorController.login);
        // DoctorRouter.route(`${entrypoint}/auth/refresh`).get(refreshAccess);


module.exports = DoctorRouter;