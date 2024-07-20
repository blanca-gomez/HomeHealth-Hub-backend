// Rutas específicas para usuarios

const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middlewares/authJwt.js')

const {
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
} = require('../controlles/userController');


router.get('/:id', verifyToken, getUserProfile)



module.exports = router;