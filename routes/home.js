const express= require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/doctor',homeController.searchspecialty)

router.get('/searchspecialtyanduserName',homeController.searchspecialtyanduserName)

module.exports = router