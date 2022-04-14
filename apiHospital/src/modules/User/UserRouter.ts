import { Router } from "express";
import { auth } from "../../middlewares";
import UserController from "./UserController";

export default ((controller: UserController) => {
    const userRouter = Router();
    userRouter.route('/').get(auth.isAuth, controller.getAll);
    userRouter.route('/').post(controller.register);

    userRouter.route(`auth/`).post(controller.login);

    return userRouter;
});