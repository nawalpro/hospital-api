const Patient = require('./PatientModel');
const bcrypt = require('bcrypt');
const env = require('../../config/env');
const BadRequestError = require('../../helpers/errors/400_bad_request');
const jwt = require('jsonwebtoken');
const { CREATED } = require('../../helpers/StatusCode');

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
          console.log(req.body, "req.body");
          const { firstname, email, password, phone, lastname} = req.body;
          if (!firstname || !email || !password) {
            throw new BadRequestError('Tous les champs doivent être rempli.');
          }

          const emailExists = await Patient.findOne({
              where: {
                email: email,
              },
          });
          if(emailExists) {
            throw new BadRequestError('Vous avez deja un compte chez nous. Rendez - vous sur Se connecter.');  
          } else {
            const salt = parseInt(env.salt_rounds);
            const hashedPassword = await bcrypt.hash(password, salt);
            
            const patient = await Patient.create({
              phone,
              lastname,
              firstname,
              email,
              password: hashedPassword,
            });
            console.log(patient,"After create");
            res.status(201).json( patient );
          }
          

        } catch (err) {
          console.log(err,"ERROOR REGISTER PATIENT");
          next(err);
        }
      },

      login: async (req, res, next) => {
        try {
          console.log(req.body, "login");
          const { email, password } = req.body;
          const patient = await Patient.findOne({
            where: { email }
          });
          if (!patient) {
            throw new BadRequestError("Désolé vous n'avez pas encore de compte chez nous.")
          } else {
            console.log("LOGIN req body after veriyemail", patient);
            const verifyPasswordBcrypt = await bcrypt.compare(password, patient.password);
            if(!verifyPasswordBcrypt) {
              throw new BadRequestError("Mauvais mot de passe.");
            } else {
              patient.access_token = jwt.sign({ id: patient.id , email: patient.email }, env.jwt_secret, { expiresIn: '5m' });
              patient.refresh_token = jwt.sign({ id: patient.id }, env.jwt_secret, { expiresIn: '60d' });
              await patient.save();
              res.header( 'authorization',  'Bearer ' +  patient.access_token );
              res.cookie('refresh_token', patient.refresh_token, { expiresIn: '60d', httpOnly: 'true'});
              res.status(CREATED).json('Hello patient ' + patient.firstname);
            }

          }
        } catch (err) { 
          console.error("LOGIN ERROR", err)
            next(err);
        }
    },
};
module.exports = PatientController