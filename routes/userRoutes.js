// Rutas específicas para usuarios

const express = require('express');
const router = express.Router();

const {
    createUser, 
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById
} = require ('../controlles/userController')

router.post('/', createUser);

router.get('/:id', getUserById)

router.get('/', getAllUsers);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);


module.exports = router