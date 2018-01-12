function connectBD(){
    var mongoose = require('mongoose');
    mongoose.connect("mongodb://localhost/api", {useMongoClient: true});
    return mongoose;
}

module.exports = function getModels(){
    var mongoose = connectBD();
    const models = {};
    models.person = mongoose.model('person', new mongoose.Schema({
        name: {type: String},
        dni: {type: String}
    }));
    models.person.findAll = async function(){
        return models.person.find({},function(err, users){
            if(err){ return err}
            return users;
        });
    }

    models.person.newPerson = async function(person){
        person.save();
    }

    models.person.findByName = async function(name){
        return models.person.findOne({'name': name }, function(err, person){
            if(err){return err};
            return person;
        });
    }

    return models;
}