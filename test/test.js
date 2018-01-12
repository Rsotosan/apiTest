var chai = require('chai')
    , expect = chai.expect
    , should = chai.should()
    , assert = chai.assert;
const request = require('supertest');
const app = require('../app');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
describe("GET /people", function () {
    it("Devuelve todas las personas", function (done) {
        request(app)
            .get('/people')
            .expect(200)
            .end(function (err, res) {
                if (err) { return done(err) };
                done();
            });

    });
});

describe("GET /people/name", function () {
    it("Devuelve la persona que tenga el nombre introducido", function (done) {
        request(app).get('/people/Raul')
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('Object');
                res.body.should.have.property('name');
                done();
            })
    })
})

describe("POST /people", function () {
    it("Crea un nuevo usuario y devuelve el usuario nuevo", function (done) {
        var user = { name: "TestUser", dni: "9819344K" };
        request(app)
            .post('/people')
            .send(user)
            .end(function (err, res) {
                assert.typeOf(res , 'Object');
                assert.equal(user, res.body);
                done();
            })
    })
})