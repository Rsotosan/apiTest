module.exports = function injectToController(models){
    const newPerson = {
        path:"/people",
        method: "post",
        controller: async function controller(req, res){
            const person = new models.person({name: req.body.name, dni: req.body.dni});
            person.save();
            res.json(person);   
        }
    }
    return newPerson;
}