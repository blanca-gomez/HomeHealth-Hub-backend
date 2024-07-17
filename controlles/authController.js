const User = require ('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); 
const config = require('../config/config');



const signUp = async (req, res) => {
    const { firstName, lastName, email, password, age, allergies, medicalHistory, emergencyContacts  } = req.body;

    try {
        const registeredUser = await User.findOne({email})
        if(registeredUser){
            return res.status(400).json({message: 'El usuario ya existe'})
        }
        const hashedPassword = await bcrypt.hash(password, 10); 
        const user = new User({ firstName, lastName, email, password: hashedPassword, age, allergies, medicalHistory, emergencyContacts });
        await user.save();
            return res.status(201).json({message: '¡Usuario registrado con éxito!'})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al registrar el usuario'})
    }
};


const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email });

        if (!userFound) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        const matchPassword = await bcrypt.compare(password, userFound.password);
        if (!matchPassword) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
        const token = jwt.sign({ userId: User._id }, config.SECRET, {
            expiresIn: 86400 
        });
        res.cookie('token', token, {httpOnly:true})
        res.status(200).json({ message: 'Se ha iniciado sesión correctamente', token }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al iniciar el usuario'})
    }
};

const signout = (req,res) => {
    res.clearCookie('token')
    res.status(200).json({ message: 'Sesión cerrada exitosamente' });
}


module.exports = { signUp, signIn, signout};
