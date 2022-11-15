let router = require('express').Router();
let {read, create, update, destroy} = require('../controllers/itinerary');


router.route('/').get(read)
router.route('/').post(create)
router.route('/:id').put(update)
router.route('/:id').delete(destroy)

module.exports = router;
