
function init(){
    const express = require('express'),
    app = express(),
    getModels = require('./models'),
    bodyparser = require('body-parser');
    app.use(bodyparser.json(), bodyparser.urlencoded({extended:true}));
    models = getModels();
    /**
    initialize = require('./initializeBD');
    initialize(models);
    */
    const injectRoutes = require("./controllers");
    injectRoutes(app, models);
    app.listen(9000);
    return app;
}

const app = init();
module.exports = app;