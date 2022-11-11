let router = require('express').Router();
let { create } = require('../controllers/hotel')

router.route('/').post(create)

module.exports = router