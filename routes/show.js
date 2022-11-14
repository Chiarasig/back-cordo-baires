let router = require('express').Router();
let { create } = require('../controllers/show')

router.route('/').post(create)
module.exports = router