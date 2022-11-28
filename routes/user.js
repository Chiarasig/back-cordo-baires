let router = require('express').Router();
const schema = require("../schemas/signUp")
const schemaSignIn = require("../schemas/userSignIn")
let validator = require('../middlewares/validator');
const accountExistsSignUp = require("../middlewares/accountExistsSignUp")
const accountExistsSignIn = require('../middlewares/accountExistsSignIn')
const accountHasBeenVerified = require('../middlewares/accountHasBeenVerified')
const mustSignIn = require('../middlewares/mustSignIn')
const passport = require('../config/passport')
let {register, verified, enter, enterWithToken, leave, read, update } = require('../controllers/user')

router.post('/sign-up', validator(schema), accountExistsSignUp, register)
router.get('/verify/:code', verified)
router.post('/sign-in', validator(schemaSignIn),accountExistsSignIn, accountHasBeenVerified, enter)
router.post('/token', passport.authenticate('jwt', { session:false }), mustSignIn, enterWithToken)
router.post('/sign-out', passport.authenticate('jwt', { session:false }), leave)
router.get('/me/:id', read)
router.patch("/me/:id", update)


module.exports = router;

