import { Router } from "express";
import PatientController from "./patientController";

export default (controller: PatientController) => {
  const patientRouter = Router();
  const entrypoint = "/patient/";
  patientRouter
    .route(`${entrypoint}`)
    .post(controller.takeAppointments)
    .get(controller.getAppointments);
  return patientRouter;
};
