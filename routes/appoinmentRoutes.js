// Rutas específicas para citas médicas
const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middlewares/authJwt.js');

const {createAppoinment,
    getAllAppoinment,
    getAppoinmentById,
    updateAppoinment,
    deleteAppoinment
} = require ('../controlles/appointmentController')

router.post('/', verifyToken, createAppoinment);
router.get('/', verifyToken, getAllAppoinment);
router.get('/:id', verifyToken, getAppoinmentById); 
router.put('/:id', verifyToken, updateAppoinment);
router.delete('/:id', verifyToken, deleteAppoinment)


module.exports = router;