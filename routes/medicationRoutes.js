// Rutas específicas para medicaciones
const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middlewares/authJwt.js')

const {
    createMedication,
    getAllMedication,
    updateMedication, 
    deleteMedication
} = require ('../controlles/medicationController')

router.post('/', verifyToken, createMedication);
router.get('/', verifyToken, getAllMedication);
router.put('/:id', verifyToken, updateMedication);
router.delete('/:id', verifyToken, deleteMedication)


module.exports = router;