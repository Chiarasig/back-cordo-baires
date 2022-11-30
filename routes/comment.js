let router = require('express').Router();
let {read, create} = require('../controllers/comment')
const passport = require('../config/passport')
const schema = require('../schemas/comment')
const validator = require('../middlewares/validator')

router.route('/').get(read)
router.route('/').post(passport.authenticate('jwt', { session:false }), validator(schema), create)

module.exports = router