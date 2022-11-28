let router = require('express').Router();
const schema = require('../schemas/hotel')
const validator = require('../middlewares/validator')
const passport = require('../config/passport')

let { create, read, update, destroy } = require('../controllers/hotel')

router.route('/').post(passport.authenticate('jwt', { session:false }),validator(schema),create)
router.route('/').get(read)
router.route('/:id').patch(passport.authenticate('jwt', { session:false }),update)
router.route('/:id').delete(passport.authenticate('jwt', { session:false }),destroy)

module.exports = router