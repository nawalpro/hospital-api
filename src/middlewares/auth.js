const { jwt_secret } = require("../config/env");
const UnauthorizedError = require("../helpers/errors/401_unauthorized");
const Patient = require("../modules/Patient/PatientModel");


const isAuth = async (req, res, next) => {
    try {
        let access_token = req.headers.authorization.split(' ')[1];
        const refresh_token = req.cookies['refresh_token'];

        if(!refresh_token)
            throw new UnauthorizedError('Access denied. Your session expired.');
        
        let patient = await Patient.findOne({  where: { access_token, refresh_token } });
        
        if(!patient)
            throw new UnauthorizedError('Access denied. Your session expired.');
        
        await jwt_secret.verify( access_token, config.jwt_secret );
        
        req.patient = patient;
        next();

    } catch (e) {
        return res.status(401).json(e.message);
    }
}

const refreshAccess = async (req, res, next) => {
    try {
        const refreshToken = req.cookies['refresh_token']
        if (!refresh_token)
            return res.status(401).json('Access denied. Your session expired');

        const decoded = await jwt.verify(refresh_token, config.jwt_secret);
        const patient = await Patient.findOne({ where: { id: decoded.id } });
        patient.access_token = jwt.sign({ id: patient.id, email: patient.email }, config.jwt_secret, { expiresIn: '5m' });
        await patient.save();
        
        res.status(200).json(patient);
        
    } catch (error) {
        return res.status(401).json(error.message);
    }
}

module.exports = isAuth , refreshAccess;

