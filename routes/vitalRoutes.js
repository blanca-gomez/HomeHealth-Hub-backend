// Rutas específicas para constantes vitales
const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middlewares/authJwt.js');

const {createVital, 
    getAllVital, 
    updateVital,
    deleteVital
} = require ('../controlles/vitalController.js');

router.post('/', verifyToken, createVital);
router.get('/', verifyToken, getAllVital);
router.put('/:id', verifyToken, updateVital);
router.delete('/:id', verifyToken, deleteVital)


module.exports = router;