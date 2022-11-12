let router = require('express').Router();
let {create, read} = require('../controllers/city')

router.route('/').post(create)
//declarar el endpoint con el metodo que voy a usar, create, read, update, delete.
router.route('/').get(read)

module.exports = router;