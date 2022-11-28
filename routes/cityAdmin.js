let router = require('express').Router();
let {read} = require('../controllers/cityAdmin')
const schema = require('../schemas/city')

router.route('/').get(read)

module.exports = router;