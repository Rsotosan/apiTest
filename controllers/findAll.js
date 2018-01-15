module.exports = function injectToController(models) {

    const findAll = {
        path: "/people",
        method: "get",
        controller: async function controller(req, res) {
            let filter = req.query.filter;
            const people = await models.person.findAll(filter);

            return res.json(people);
        }
    }
    return findAll;
}