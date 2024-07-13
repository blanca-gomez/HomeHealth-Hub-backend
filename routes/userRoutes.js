// Rutas específicas para usuarios

const express = require('express');
const router = express.Router();
const {verifyToken} = '../middlewares/authJwt.js'

const {
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
} = require ('../controlles/userController')



router.get('/myprofile', verifyToken, getUserById)

router.put('/myprofile', verifyToken, updateUser);

router.delete('/myprofile', verifyToken, deleteUser);


module.exports = router