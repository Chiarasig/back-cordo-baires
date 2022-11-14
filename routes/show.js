let router = require('express').Router();
let { create, update, destroy } = require('../controllers/show')

router.route('/').post(create)
router.route('/:id').patch(update)
router.route('/:id').delete(destroy)

module.exports = router