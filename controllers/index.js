module.exports = function injectRoutes(app, models){
    const injectFindAll = require('./findAll');
    const injectNewPerson = require('./newPerson');
    const injectFindUserByName = require('./findUserByName');
    const routes = [];
    routes.push(injectNewPerson(models));
    routes.push(injectFindAll(models));
    routes.push(injectFindUserByName(models));
    routes.forEach(function(elem) {
        app[elem.method](elem.path, elem.controller);
    });
}