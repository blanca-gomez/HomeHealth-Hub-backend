// Rutas específicas para medicaciones
const express = require('express');
const router = express.Router();

const {
    createMedication
} = require ('../controlles/medicationController')

router.post('/', createMedication);

module.exports = router;