const errorHandler = require("../middlewares/errorHandler");

const Server = (http, middleWares, routes) => {
    const app = http();
    
    const initializeMiddlewares = (middleWares) => {
        for (const key in middleWares) {
            const mware = middleWares[key];
            app.use(mware);
        }
    };

    const initializeAppRouter = (routes) => {
        app.use(routes);
        app.use(errorHandler);
    };
    initializeMiddlewares(middleWares);
    initializeAppRouter(routes);
    return {
        listen: (port) => {
            app.listen(port, async () => {
                console.debug(`Server is listening on port ${port}`);
                console.log('===============================');
                console.log(`server is running on port ${port}`);
                console.log('===============================');
            });
        },
    };
};

module.exports = Server;

