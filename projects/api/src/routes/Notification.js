const router = require('express').Router()

const NotificationController = require('../controllers/NotificationController')

router.post('/send', NotificationController.send)

module.exports = router
