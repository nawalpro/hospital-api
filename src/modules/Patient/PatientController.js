const Patient = require('./PatientModel');
const bcrypt = require('bcrypt');
const env = require('../../config/env');

const PatientController = {
    getAll: async (req, res, next) => {
        try {
            const patients = await Patient.findAll();
            res.status(201).json(patients);
        } catch (err) {
            console.log(err, "GET ALL PATIENT");
            next(err);
            console.log(err);
        }
    },
    register: async (req, res, next) => {
        try {
          const { first_name, email, password } = req.body;
          const salt = parseInt(env.salt_rounds);
          const hashedPassword = await bcrypt.hash(password, salt);
          const patient = await Patient.create({
            first_name,
            email,
            password: hashedPassword,
          });
          console.log(patient,"PATIENT REGISTER");
          
          res.status(201).json( patient );
        } catch (err) {
          console.log(err,"ERROOR REGISTER PATIENT");
          next();
        }
      },

      login: async (req, res, next) => {
        try {
          const { email, password } = { ...req.body };
          
          const patient = await Patient.findOne({
            where: { email, password },
          });
          console.log("LOGIN req body", patient);
        } catch (err) {
          console.error("LOGIN ERROR", err)
            next(err);
        }
    },
};
module.exports = PatientController