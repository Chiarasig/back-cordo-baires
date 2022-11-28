let router = require('express').Router();
const passport = require('../config/passport')
let { create, update, destroy, read, readById } = require('../controllers/show')

router.route('/').post(passport.authenticate('jwt', { session:false }),create)
router.route('/').get(read)
router.route('/:id').get(readById)
router.route('/:id').patch(passport.authenticate('jwt', { session:false }),update)
router.route('/:id').delete(passport.authenticate('jwt', { session:false }),destroy)

module.exports = router