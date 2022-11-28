const app = require("../app");
const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const { assert } = require("chai");

/* 
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
            .send({name: 'sheraton', photo: ['https://www.reportur.com/wp-content/uploads/2021/05/sheraton-cordoba.jpg','https://www.reportur.com/wp-content/uploads/2021/05/sheraton-cordoba.jpg','https://www.reportur.com/wp-content/uploads/2021/05/sheraton-cordoba.jpg'], capacity: 600, cityId: '636e6153cfa52d3ec3cf7bcd', userId: '636d5a9512a6c5227df1ef0b'})
            .end(function(err, res){
                expect(res.status).to.equal(201);
                if(error){
                    return done(error)
                }
                done()
            })
    })
})   */

describe("DELETE  a hotel successfully", function (done) {
  it("Delete a hotel successfully", function (done) {
    token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODNmNjQ0NGRlZmNhNWZkYTlmM2RjZSIsIm5hbWUiOiJDaGlhcmEiLCJwaG90byI6Imh0dHBzOi8vZTcucG5nZWdnLmNvbS9wbmdpbWFnZXMvNDMvOTI2L3BuZy1jbGlwYXJ0LWNvbXB1dGVyLWljb25zLWF2YXRhci11c2VyLWF2YXRhci1oZXJvZXMtd29tYW4ucG5nIiwibG9nZ2VkIjp0cnVlLCJyb2xlIjoidXNlciIsImxhc3ROYW1lIjoiU2lnbm9yaSIsImlhdCI6MTY2OTYxMjUwNSwiZXhwIjoxNjY5Njk4OTA1fQ.E226glH93rG4pBjtBKRJ6yW9ikvFkbEq6QyuysdVvTI";
    idHotel = "637c0e943d92e7597ef66541";
    request(app)
      .delete(`/api/hotel/${idHotel}`)
      .auth(token, { type: "bearer" })
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
