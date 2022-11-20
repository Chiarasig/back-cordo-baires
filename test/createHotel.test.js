const app = require('../app');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const { assert } = require('chai');


describe('Verify create hotel', function(){
    // it -test cases
    it('Verify that the user sends a number', function(done){
          let user =  {name: 'sheraton',
            photo: 'https://www.reportur.com/wp-content/uploads/2021/05/sheraton-cordoba.jpg',
            capacity: 300,
            cityId: '636e6153cfa52d3ec3cf7bcd',
            userId: '636d5a9512a6c5227df1ef0b'}
            expect(user.capacity).to.be.a('number')
            done()
    }),
    it('Check status 201', function(done){
        request(app)
            .post('/api/hotel/')
            .send({name: 'sheraton', photo: ['https://www.reportur.com/wp-content/uploads/2021/05/sheraton-cordoba.jpg'], capacity: 300, cityId: '636e6153cfa52d3ec3cf7bcd', userId: '636d5a9512a6c5227df1ef0b'})
            .end(function(err, res){
                expect(res.status).to.equal(201);
                if(err){
                    return done(err)
                }
                done()
            })
    })
})  