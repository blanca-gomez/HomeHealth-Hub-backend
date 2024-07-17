// Rutas específicas para usuarios

const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middlewares/authJwt.js')

const {
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
} = require('../controlles/userController');


router.get('/myprofile', verifyToken, getUserProfile)

router.put('/myprofile', verifyToken, updateUserProfile);

router.delete('/myprofile', verifyToken, deleteUserProfile);


module.exports = router;