const router = require('express').Router()

const DataController = require('../controllers/DataController')

router.get('/', DataController.get)
router.post('/', DataController.post)

module.exports = router
