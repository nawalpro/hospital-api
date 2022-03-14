import { Router } from "express";
import PatientController from "./ControllerPatient";

export default ((controller: PatientController) => {
    const patientRouter = Router();

    patientRouter
        .route('/')
        .get( controller.getAll)
        .post(controller.register);

    patientRouter.route(`/auth`).post(controller.login);

    return patientRouter;
});