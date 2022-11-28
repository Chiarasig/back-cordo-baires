let router = require('express').Router();
let {read, create, update, destroy} = require('../controllers/itinerary');
const passport = require('../config/passport')


router.route('/').get(read)
router.route('/').post(passport.authenticate('jwt', { session:false }),create)
router.route('/:id').put(passport.authenticate('jwt', { session:false }),update)
router.route('/:id').delete(passport.authenticate('jwt', { session:false }),destroy)

module.exports = router;
