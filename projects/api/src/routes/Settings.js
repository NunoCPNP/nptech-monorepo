const router = require('express').Router()

const SettingsController = require('../controllers/SettingsController')

router.get('/', SettingsController.get)
router.put('/', SettingsController.put)

// router.post('/', SettingsController.post)

module.exports = router
