let router = require('express').Router();
let {read, create, update, destroy} = require('../controllers/itinerary');
const schema = require('../schemas/itinerary')
const passport = require('../config/passport')
const validator = require('../middlewares/validator')
const isOwner = require('../middlewares/isOwner')
const Itinerary = require('../models/Itinerary')


router.route('/').get(read)
router.route('/').post(passport.authenticate('jwt', { session:false }), validator(schema),create)
router.route('/:id').put(passport.authenticate('jwt', { session:false }),isOwner(Itinerary),update)
router.route('/:id').delete(passport.authenticate('jwt', { session:false }),isOwner(Itinerary),destroy)

module.exports = router;
