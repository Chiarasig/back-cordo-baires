let router = require('express').Router();
let {create, update, read, reactionforuser, deletereactionofuser} = require('../controllers/reactions');
const validator = require('../middlewares/validator');
const schema = require('../schemas/reactions');
const passport = require('../config/passport');
const Reactions = require('../models/Reactions');
const isOwnerReaction = require('../middlewares/isOwnerReaction');

router.route('/').post(passport.authenticate('jwt', { session:false }),validator(schema),create)
router.route('/').put(passport.authenticate('jwt', { session:false }),update)
router.route('/').get(passport.authenticate('jwt', { session:false }),read)
router.route('/reactionsforuser/').get(passport.authenticate('jwt', { session:false }),reactionforuser)
router.route('/:id').put(passport.authenticate('jwt', { session:false }), isOwnerReaction(Reactions), deletereactionofuser)


module.exports = router;