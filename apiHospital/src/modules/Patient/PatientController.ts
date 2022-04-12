import { Response, Request, NextFunction } from "express";
import {
  Controller,
  Middleware,
  Get,
  Post,
  Put,
  Delete,
} from "@overnightjs/core";
import JwtService from "../../libs/jwt";
import { IPatientService } from "./PatientService";
import { auth } from "../../middlewares";
import { jwtService } from "../../libs";

@Controller("patient")
class PatientController {
  private patientService;
  private jwtService;
  constructor(patientService: IPatientService, jwtService: JwtService) {
    this.patientService = patientService;
    this.jwtService = jwtService;
  }
  @Get()
  @Middleware(auth.isAuth)
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let patients = await this.patientService.getAll();
      res.status(200).json(patients)
    } catch (err) {
      next(err);
    }
  };
}
export default PatientController;
