let router = require('express').Router();
let {read, create} = require('../controllers/itinerary');


router.route('/').get(read)
router.route('/').post(create)

module.exports = router;
