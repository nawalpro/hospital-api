const Doctor = require("./DoctorModel");
const bcrypt = require("bcrypt");
const env = require("../../config/env");
const BadRequestError = require("../../helpers/errors/400_bad_request");
const jwt = require("jsonwebtoken");

const DoctorController = {


	register: async (req, res, next) => {
		try {
			const {
				firstname,
				lastname,
				phone,
				email,
				password,
				officeAdress,
				priceConsultation,
				practiceHospital,
			} = req.body;

			const datas = req.body;
      
			for( let data in datas) {
        		let item = datas[data]
		  		if (Object.values(item).every((item) => item === null || item === "")) {
			    	throw new BadRequestError(`Missing parameters ${data}`);
			 	}
			}
	
			const emailExists = await Doctor.findOne({
				where: {
					email: email,
				},
			});

			if (emailExists) {
				throw new BadRequestError("This is Doctor already exist");
			} else {
				const salt = parseInt(env.salt_rounds);
				const hashedPassword = await bcrypt.hash(password, salt);
				const doctor = await Doctor.create({
					firstname,
					lastname,
					phone,
					email,
					password: hashedPassword,
					officeAdress,
					priceConsultation,
					practiceHospital,
				});
				console.log(doctor, "After create");
				res.status(201).json(doctor);
			}
		} catch (err) {
			console.log(err, "ERROOR REGISTER Doctor");
			next(err);
		}
	},

	getAll: async (req, res, next) => {
        try {
            const doctors = await Doctor.findAll();
            res.status(201).json(doctors);
        } catch (err) {
            console.log(err, "GET ALL Doctor");
            next(err);
            console.log(err);
        }
    },

	login: async (req, res, next) => {
        try {
          console.log(req.body, "login");
          const { email, password } = req.body;
          const doctor = await Doctor.findOne({
            where: { email }
          });
          if (!doctor) {
            throw new BadRequestError("Sorry! Account does not exists .")
          } else {
            console.log("LOGIN req body after veriyemail", doctor);
            const verifyPasswordBcrypt = await bcrypt.compare(password, doctor.password);
            if(!verifyPasswordBcrypt) {
              throw new BadRequestError("Your password is false .");
            } else {
              doctor.access_token = jwt.sign({ id: doctor.id , email: doctor.email }, env.jwt_secret, { expiresIn: '5m' });
            //   doctor.refresh_token = jwt.sign({ id: doctor.id }, env.jwt_secret, { expiresIn: '60d' });
              await doctor.save();
              res.header( 'authorization',  'Bearer ' +  doctor.access_token );
              res.cookie('refresh_token', doctor.refresh_token, { expiresIn: '60d', httpOnly: 'true'});
              res.status(CREATED).json('Hello doctor ' + doctor.firstname);

            }

          }
        } catch (err) { 
          console.error("LOGIN ERROR", err)
            next(err);
        }
	}
};
module.exports = DoctorController;
