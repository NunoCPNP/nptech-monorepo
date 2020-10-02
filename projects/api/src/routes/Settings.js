const router = require('express').Router()

const SettingsController = require('../controllers/SettingsController')

router.get('/', SettingsController.get)
router.post('/', SettingsController.post)

module.exports = router
