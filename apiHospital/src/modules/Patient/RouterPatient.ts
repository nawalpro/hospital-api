import { Router } from "express";
import { auth } from "../../middlewares";
import PatientController from "./ControllerPatient";

export default ((controller: PatientController) => {
    const patientRouter = Router();

    patientRouter
        .route('/')
        .get(auth.isAuth, controller.getAll)
        .post(controller.register);

    patientRouter.route(`/auth`).post(controller.login);

    return patientRouter;
});