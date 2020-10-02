const router = require('express').Router()

const SlotController = require('../controllers/SlotController')

router.get('/', SlotController.get)
router.post('/', SlotController.post)

module.exports = router
