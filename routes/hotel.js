let router = require('express').Router();
let { create, read, update, destroy } = require('../controllers/hotel')

router.route('/').post(create)
router.route('/').get(read)
router.route('/:id').patch(update)
router.route('/:id').delete(destroy)

module.exports = router