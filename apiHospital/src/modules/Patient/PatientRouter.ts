import { Router } from "express";
import { auth } from "../../middlewares";
import PatientController from "./ControllerPatient";

export default ((controller: PatientController) => {
    const userRouter = Router();

    userRouter
        .route('/')
        .get(auth.isAuth, controller.getAll)
        .post(controller.register);

    userRouter.route(`/auth`).post(controller.login);

    return userRouter;
});