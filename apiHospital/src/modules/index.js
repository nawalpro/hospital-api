const ServiceRouter = require('./Service/ServiceRouter')
const PatientRouter = require('./Patient/PatientRouter')
const DoctorRouter = require('./Doctor/DoctorRouter')

const routes = [ ServiceRouter, PatientRouter, DoctorRouter ];

module.exports = routes;
