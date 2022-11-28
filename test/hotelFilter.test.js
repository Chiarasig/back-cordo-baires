const app = require('../app');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

/* 
describe('Check status 404', function(){
    // it -test cases
    it('Check status 404', function(done){

        request(app)
            .get('/api/hotel?name=city')
            .end(function(err, res){
                console.log(res.body)
                expect(res.status).to.equal(404);
                if(err){
                    return done(err)
                }
                done()
            })
    })
}) 

 */
