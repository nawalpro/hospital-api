import { Router } from "express";
import RoleController from "./RoleController"

export default ((controller: RoleController) => {
    const roleRouter = Router();

    roleRouter.route(`auth/`).get(controller.getAll);

    return roleRouter;
});