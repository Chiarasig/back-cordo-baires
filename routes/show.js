let router = require('express').Router();
let { create, update } = require('../controllers/show')

router.route('/').post(create)
router.route('/:id').patch(update)
module.exports = router