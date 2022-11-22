let router = require('express').Router();
let {create, read, update, destroy} = require('../controllers/city')
const validator = require('../middlewares/validator')
const schema = require('../schemas/city')

router.route('/').get(read)
router.route('/').post(validator(schema),create)
router.route('/:id').put(update)
router.route('/:id').delete(destroy)
//declarar el endpoint con el metodo que voy a usar, create, read, update, delete.

module.exports = router;