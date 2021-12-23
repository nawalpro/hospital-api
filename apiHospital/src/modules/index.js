const ServiceRouter = require('./Service/ServiceRouter')
const PatientRouter = require('./Patient/PatientRouter')

const routes = [ ServiceRouter, PatientRouter ];

module.exports = routes;
