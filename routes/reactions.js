let router = require('express').Router();
let {create, update, read} = require('../controllers/reactions');
const validator = require('../middlewares/validator');
const schema = require('../schemas/reactions');
const passport = require('../config/passport');

router.route('/').post(passport.authenticate('jwt', { session:false }),validator(schema),create)
router.route('/').put(passport.authenticate('jwt', { session:false }),update)
router.route('/').get(passport.authenticate('jwt', { session:false }),read)

module.exports = router;