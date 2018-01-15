module.exports = function injectToController(models){
    const findUserByName = {
        path:"/people/:name",
        method: "get",
        controller: async function controller(req, res){
            const name = req.params.name;
            const person = await models.person.findByName(name);
            res.json(person);
        }
    }
    return findUserByName;
}