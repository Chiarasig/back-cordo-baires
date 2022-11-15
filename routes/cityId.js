let router = require('express').Router();
let {read} = require('../controllers/cityId')

router.route('/:id').get(read)

module.exports = router;