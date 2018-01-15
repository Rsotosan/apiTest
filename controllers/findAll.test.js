const inject = require('./findAll');
const sinon = require('sinon');
var should = require('chai').should();

describe('findAll', function () {
    it('Devuelve todos los usuarios', async function () {
        const models = {
            person: {
                findAll: function () { }
            }
        };
        const findAll = inject(models);
        const req = {
            query: {}
        };
        const res = {
            json: function () { }
        };
        const person = {
            name: "Paco",
            dni: "5346536x"
        };
        var stub = sinon.stub(models.person, 'findAll');
        stub.returns(person);
        var spy = sinon.spy(res, "json");
        

        await findAll.controller(req, res);
        spy.calledWith(person).should.be.true;
    })
})