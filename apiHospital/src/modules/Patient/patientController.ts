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
import { IPatientService } from "./patientService";
import { auth } from "../../middlewares";
import { jwtService } from "../../libs";

@Controller('user')
class PatientController {
    private patientService;
    private jwtService = jwtService;
    constructor(patientService: IPatientService, JwtService: JwtService) {
        this.patientService = patientService; 
        this.jwtService = jwtService; 
    }
    @Post()
    @Middleware(auth.isAuth)
    requestingToTheAdmin = async (req: Request, res: Response, next: NextFunction) =>{

        try {
            // let patients = await this.patientService.takeAppointments();
        }
    }
}
