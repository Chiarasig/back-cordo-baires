let router = require('express').Router();
let { create, read, update } = require('../controllers/hotel')

router.route('/').post(create)
router.route('/').get(read)
router.route('/:id').patch(update)

module.exports = router