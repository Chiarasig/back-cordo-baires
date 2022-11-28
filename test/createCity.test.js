const app = require('../app');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const { assert } = require('chai');


/* describe('Verify create city', function(){
    // it -test cases
    it('Verify that the user sends a string', function(done){
          let user =  {
            name: 'Tokio',
            continent: 'Asia',
            photo: 'https://thumbs.dreamstime.com/b/tokio-jap%C3%B3n-templo-de-asakusa-65916641.jpg',
            population:1500000,
            userId: '636d5a9512a6c5227df1ef0d'}
            expect(user.name).to.be.a('string')
            done()
    }),
    it('Check status 400', function(done){
        request(app)
            .post('/api/city')
            .send({name: 'tokio', photo:'https://thumbs.dreamstime.com/b/tokio-jap%C3%B3n-templo-de-asakusa-65916641.jpg', userId: '636d5a9512a6c5227df1ef0d'})
            .end(function(err, res){
                expect(res.status).to.equal(400);
                if(err){
                    return done(err)
                }
                done()
            })
    })
}) */