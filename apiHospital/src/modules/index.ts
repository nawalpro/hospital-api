// const ServiceRouter = require('./Service/ServiceRouter')
import { userController } from './User';
import { roleController } from './Role';
// const DoctorRouter = require('./Doctor/DoctorRouter')

const routes = [ userController,
                 roleController ];

export default  routes;
