import { Router } from "express";
import PatientController from "./PatientController"

export default ((controller: PatientController) => {
    const patientRouter = Router();
    const entrypoint = '/patient';
    patientRouter
        .route('/')
        .get( controller.getAll)
        .post(controller.register);

    patientRouter.route(`/auth`).post(controller.login);

    return patientRouter;
});