const app = require('../app')
const {assert} = require('chai')
const request = require('supertest')

/* describe('GET /cities', () => {
    it('should return an array of objects', done => {
        request(app)
            .get('/api/city')
            .expect(res => {
                let data = res.body.response
                assert.isArray(data, 'it should be an array')
                data.forEach(element => {
                    assert.isObject(element, 'it should be an object')
                });
            })
            .end((err, res) => {
                err ? done(err) : done()
            })
    })
}) */
