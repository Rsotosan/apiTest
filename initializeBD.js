
module.exports = function init(models){

    var paco = new models.person({name: "paco", dni:"871237621X"});
    paco.save();

}