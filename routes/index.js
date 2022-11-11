let router = require('express').Router();


let user = require('./user')
router.use('/user', user)

let city = require('./city')
router.use('/city', city)


module.exports = router;
