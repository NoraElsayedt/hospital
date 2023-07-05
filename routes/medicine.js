const express = require('express')
const routes = express.Router()
const Medicines = require('../controllers/medicine')

routes.post('/createMedicines/:userId',Medicines.addMedicines)

routes.get('/Medicines/:userId',Medicines.getMedicinesUser)

routes.delete('/Medicines/:MedicineId',Medicines.deleteMedicinesUser)

module.exports = routes