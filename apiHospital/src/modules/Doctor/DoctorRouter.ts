import { Router } from "express";
import DoctorController from "./DoctorController"

export default ((controller: DoctorController) => {
    const doctorRouter = Router();
    const entrypoint = '/doctor/';
  
    doctorRouter.route(`auth/${entrypoint}`).get(controller.getAllPatient);

    return doctorRouter;
});