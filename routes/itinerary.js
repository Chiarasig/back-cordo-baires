let router = require('express').Router();
let {read} = require('../controllers/itinerary')

router.route('/').get(read)

module.exports = router;
