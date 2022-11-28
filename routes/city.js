let router = require('express').Router();
let {create, read, update, destroy} = require('../controllers/city')
const validator = require('../middlewares/validator')
const schema = require('../schemas/city')
const passport = require('../config/passport')

router.route('/').get(read)
router.route('/').post(passport.authenticate('jwt', { session:false }),validator(schema),create)
router.route('/:id').put(passport.authenticate('jwt', { session:false }),update)
router.route('/:id').delete(passport.authenticate('jwt', { session:false }),destroy)
//declarar el endpoint con el metodo que voy a usar, create, read, update, delete.

module.exports = router;