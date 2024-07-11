const express = require ('express');
const router = express.Router();
const authController = require('../controlles/authController')

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);

router.get('/signout', authController.signout)

module.exports = router;