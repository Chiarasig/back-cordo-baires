let router = require('express').Router();
let { create, read } = require('../controllers/hotel')

router.route('/').post(create)
router.route('/').get(read)

module.exports = router