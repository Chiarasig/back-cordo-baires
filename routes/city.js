let router = require('express').Router();
let {create, read, update} = require('../controllers/city')

router.route('/').get(read)
router.route('/').post(create)
router.route('/:id').put(update)
//declarar el endpoint con el metodo que voy a usar, create, read, update, delete.

module.exports = router;