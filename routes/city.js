let router = require('express').Router();
let {create} = require('../controllers/city')

router.route('/').post(create)

module.exports = router;