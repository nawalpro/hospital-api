import { Router } from "express";
import UserController from "./UserController"

export default ((controller: UserController) => {
    const patientRouter = Router();
    const entrypoint = '/patient/';
    patientRouter
        .route(`${entrypoint}`)
        .get( controller.getAll)
        .post(controller.register);

    patientRouter.route(`auth/`).post(controller.login);

    return patientRouter;
});