module.exports = function injectToController(models){

    const routes = [];
    

    const findAll = {
        path: "/people",
        method: "get",
        controller: async function controller(req, res){
            const people = await models.person.findAll();
            res.json(people);
        }
    }
    routes.push(findAll);

    const newPerson = {
        path:"/people",
        method: "post",
        controller: async function controller(req, res){
            const person = new models.person({name: req.body.name, dni: req.body.dni});
            person.save();
            res.json(person);   
        }
    }
    routes.push(newPerson);

    const findById = {
        path:"/people/:name",
        method: "get",
        controller: async function controller(req, res){
            const name = req.params.name;
            const person = await models.person.findByName(name);
            res.json(person);
        }
    }
    routes.push(findById);
    return routes;
}