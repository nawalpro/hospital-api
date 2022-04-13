import { Router } from "express";
import PatientController from "./patientController";

export default ((controller: PatientController) => {
  const patientRouter = Router();
  const entrypoint = "/patient/";
  //auth
  patientRouter
    .route(`${entrypoint}`)
    // .post(controller.takeAppointments)
    .get(controller.getAll);
  return patientRouter;
});
