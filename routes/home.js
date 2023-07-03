const express= require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/doctor/:specialty',homeController.searchspecialty)

router.get('/search/:specialty/specialtyanduserName/:userName',homeController.searchspecialtyanduserName)

module.exports = router