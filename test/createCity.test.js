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

describe ('Verify delete city', function (donde){
    it("Delete a city successfully", function (done) {
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODNmYjMzZTc3OWRkNzJiYjE5MTExNyIsIm5hbWUiOiJtYXRpYXMgIiwicGhvdG8iOiJodHRwczovL3BzLncub3JnL3VzZXItYXZhdGFyLXJlbG9hZGVkL2Fzc2V0cy9pY29uLTEyOHgxMjgucG5nP3Jldj0yNTQwNzQ1IiwibG9nZ2VkIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJsYXN0TmFtZSI6InJvZHJpZ3VleiIsImlhdCI6MTY2OTYxNjEwMCwiZXhwIjoxNjY5NzAyNTAwfQ.4xQUCi6OQkwwriSpQkKKaXF1jIIIOaDT3FRdRj5v3mw'
        idCity = '636e6153cfa52d3ec3cf7bc5'
        request(app)
            .delete(`/api/city/${idCity}`)
            .auth(token, { type: "bearer" })
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
})