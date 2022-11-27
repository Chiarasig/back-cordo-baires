const app = require('../app')
const {expect}  = require('chai')
const request = require('supertest')

describe('GET /api/cities', () => {
    it('Deberia devolver un array de ciudades', async () => {
        const res = await request(app).get('/api/city')
        expect(res.statusCode).to.equal(200)
        expect(res.body.response).to.be.an('array')

    })
    })
