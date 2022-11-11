let router = require('express').Router();
let {create} = require('../controllers/user')

router.route('/').post(create)

module.exports = router;
