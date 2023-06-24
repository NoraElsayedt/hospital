const express = require('express')
const gaurd = require('../middleware/is-auth')
const usersController = require('../controllers/reservations')
const router = express.Router()
const {createReservation } = require('../middleware/validator')

router.post('/createReservation',gaurd, usersController.create) 

router.get('/checkout-session/:id',gaurd,usersController.cheeckOutSession)


router.get('/reservation/:id',gaurd,usersController.getSpesficReservation)

router.put('/reservation/:id',gaurd,usersController.updateReservation)

router.delete('/reservation/:id',gaurd,usersController.cancel)

module.exports= router