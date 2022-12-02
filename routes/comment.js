let router = require('express').Router();
let {read, create, update, destroy} = require('../controllers/comment')
const passport = require('../config/passport')
const schema = require('../schemas/comment')
const validator = require('../middlewares/validator')
const isOwner = require('../middlewares/isOwner')
const Comment = require('../models/Comment')
const schemaEdit = require('../schemas/commentEdit')

router.route('/').get(read)
router.route('/').post(passport.authenticate('jwt', { session:false }), validator(schema), create)
router.route('/:id').put(passport.authenticate('jwt', { session:false }),  isOwner(Comment), validator(schemaEdit),update)
router.route('/:id').delete(passport.authenticate('jwt', { session:false }), isOwner(Comment), destroy)


module.exports = router