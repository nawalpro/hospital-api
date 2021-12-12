const Service = require('./ServiceModel');


const ServiceController = {
    getAll: async (req, res, next) => {
        try {
            const services = await  Service.findAll();
            res.status(OK).json(services);
        } catch (err) {
            console.log(err);
            next(err);
        }
    },

};
module.exports = ServiceController