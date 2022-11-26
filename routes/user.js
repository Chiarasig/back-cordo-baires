let router = require('express').Router();
const schema = require("../schemas/signUp")
let validator = require('../middlewares/validator');
const accountExistsSignUp = require("../middlewares/accountExistsSignUp")
let {register, verified} = require('../controllers/user')

router.post('/sign-up', validator(schema), accountExistsSignUp, register)
router.get('/verify/:code', verified)


module.exports = router;

