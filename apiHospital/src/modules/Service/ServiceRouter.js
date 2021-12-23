const  Router  = require ('express');
const ServiceController = require( './ServiceController');
const ServiceModel = require( './ServiceModel');

const ServiceRouter = Router();
const entrypoint = '/services';

ServiceRouter.route(`${entrypoint}`).get(ServiceController.getAll);


module.exports = ServiceRouter;