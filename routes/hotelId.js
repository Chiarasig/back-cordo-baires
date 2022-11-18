let router = require('express').Router();
let { read } = require('../controllers/hotelId')

router.route('/:id').get(read)


module.exports = router