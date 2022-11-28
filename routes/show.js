let router = require('express').Router();
let { create, update, destroy, read, readById } = require('../controllers/show')

router.route('/').post(create)
router.route('/').get(read)
router.route('/:id').get(readById)
router.route('/:id').patch(update)
router.route('/:id').delete(destroy)

module.exports = router