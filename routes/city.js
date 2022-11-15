let router = require('express').Router();
let {create, read} = require('../controllers/city')

router.route('/').get(read)
router.route('/').post(create)
//declarar el endpoint con el metodo que voy a usar, create, read, update, delete.

module.exports = router;