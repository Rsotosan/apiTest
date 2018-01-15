var chai = require('chai')
    , expect = chai.expect
    , should = chai.should()
    , assert = chai.assert;
const request = require('supertest');
const app = require('../app');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe("GET /people", function () {
    it("Devuelve todas las personas", async function () {
       let res = await request(app).get('/people');
       res.should.have.status(200);
    });
});

describe("GET /people/name", function () {
    it("Devuelve la persona que tenga el nombre introducido", async function () {
        let res = await request(app).get('/people/Raul')
        res.should.have.status(200);
        res.body.should.be.a('Object');
        res.body.should.have.property('name');
    })
})

describe("POST /people", function () {
    it("Crea un nuevo usuario y devuelve el usuario nuevo", async function () {
        var user = { name: "TestUser", dni: "9819344K" };
        let res = await request(app).post('/people').send(user);
        assert.equal(res.status, 200);
        assert.typeOf(res , 'Object');
        assert.equal(user.name, res.body.name);
    })
})