import { Router } from "express";
import PatientController from "./PatientController";

export default ((controller: PatientController) => {
  const patientRouter = Router();
  const entrypoint = "/userPatient/";

  patientRouter
    .route(`${entrypoint}`)
    .get(controller.getAll);
  return patientRouter;
});
