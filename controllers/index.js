module.exports = function injectRoutes(app, models){
    const injectToPaths = require('./controller');
    const routes = injectToPaths(models);
    routes.forEach(function(elem) {
        app[elem.method](elem.path, elem.controller);
    });
}