// Rutas específicas para constantes vitales
const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middlewares/authJwt.js');

const {createVital, 
    getAllVital, 
    getVitalById,
    updateVital,
    deleteVital
} = require ('../controlles/vitalController.js');

router.post('/', verifyToken, createVital);
router.get('/', verifyToken, getAllVital);
router.get('/', verifyToken, getVitalById)
router.put('/:id', verifyToken, updateVital);
router.delete('/:id', verifyToken, deleteVital)


module.exports = router;