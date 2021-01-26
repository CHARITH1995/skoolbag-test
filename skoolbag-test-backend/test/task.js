const chai = require("chai");
const server = require('../index');
const chaihttp = require("chai-http");
const { response } = require("../index");
const config = require('../config');
const { object, array } = require("joi");

chai.should();  
chai.use(chaihttp);   

describe('Task Api', () => {

    // Test get schools
    describe(`GET ${config.TEST_SCHOOL_URL}get`, () => {
        it("It should get all schools", (done) => {
            chai.request(server)
                .get(`${config.TEST_URL}get`)
                .end((err, response) => {
                    if (err) return done(err)
                    response.should.have.status(200);
                })
            done();
        });
    });

    // Text a school by is
    describe(`GET ${config.TEST_SCHOOL_URL}get/:id`, () => {
        it("It should get a school for id", (done) => {
            const id = 1;
            chai.request(server)
                .get(`${config.TEST_SCHOOL_URL}get/${id}`)
                .end((err, response) => {
                    if (err) return done(err)
                    response.body.should.be.a('array');
                    response.should.have.status(200);
                })
            done();
        })
    })

    //get recently added schools

    describe(`GET ${config.TEST_SCHOOL_URL}gets/recent`, () => {
        it("It should get all recently add schools", (done) => {
            chai.request(server)
                .get(`${config.TEST_SCHOOL_URL}gets/recent`)
                .end((err, response) => {
                    if (err) return done(err)
                    response.body.should.be.a('array')
                    response.should.have.status(200);

                })
            done();
        })
    })
 
})
