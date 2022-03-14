import { Response, Request, NextFunction } from "express";
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core';

// const Patient = require('./PatientModel');
// const bcrypt = require('bcrypt');
// const env = require('../../config/env');
// const BadRequestError = require('../../helpers/errors/400_bad_request');
// const jwt = require('jsonwebtoken');
// const { CREATED } = require('../../helpers/StatusCode');

@Controller('patients')
class PatientController {
  
  @Get()
  @middlewares(auth.isAuth)
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const patients = await this.patientService.findAll();
      res.status(201).json(patients);
    } catch (err) {
      console.log(err, "GET ALL PATIENT");
      next(err);
      console.log(err);
    }
  }

  @Post()
  register = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body, "req.body");
    
    const patient = await this.patientService.register({...req.body});
    res.status(201).json(patient);

  
    } catch (err) {
      console.log(err, "ERROOR REGISTER PATIENT");
      next(err);
    }
  }

  @Post('login')
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const patient = await this.patientService.login({...req.body});
      const token = await this.jwtService.generateToken({ id: patient.id });
      res.cookie('auth-cookie', token, {expires: new Date(Date.now() + (30 * 86400 * 1000))});
      res.status(200).json(patient);
  } catch (err) {
      next(err);
  }

  }
}

module.exports = PatientController;