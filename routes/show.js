let router = require('express').Router();
let { create, update, destroy, read } = require('../controllers/show')

router.route('/').post(create)
router.route('/').get(read)
router.route('/:id').patch(update)
router.route('/:id').delete(destroy)

module.exports = router