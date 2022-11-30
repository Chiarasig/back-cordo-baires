let router = require('express').Router();
const passport = require('../config/passport')
const schema = require('../schemas/show')
const validator = require('../middlewares/validator')
let { create, update, destroy, read, readById } = require('../controllers/show')
const isOwner = require('../middlewares/isOwner')
const Show = require('../models/Show')


router.route('/').post(passport.authenticate('jwt', { session:false }), validator(schema),create)
router.route('/').get(read)
router.route('/:id').get(readById)
router.route('/:id').patch(passport.authenticate('jwt', { session:false }), isOwner(Show),update)
router.route('/:id').delete(passport.authenticate('jwt', { session:false }), isOwner(Show), destroy)

module.exports = router