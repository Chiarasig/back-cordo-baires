let router = require('express').Router();
const schema = require('../schemas/hotel')
const validator = require('../middlewares/validator')

let { create, read, update, destroy } = require('../controllers/hotel')

router.route('/').post(validator(schema),create)
router.route('/').get(read)
router.route('/:id').patch(update)
router.route('/:id').delete(destroy)

module.exports = router