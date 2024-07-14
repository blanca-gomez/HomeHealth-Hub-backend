const express = require ('express');
const {dbConnection} = require('./config/db');
const authRoutes = require ('./routes/authRoutes.js')
const userRoutes = require('./routes/userRoutes');
const medicationRoutes = require ('./routes/medicationRoutes.js');
const vitalRoutes = require ('./controlles/vitalController.js');
const appoinmentRoutes = require ('./controlles/appointmentController.js');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));


app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/medications', medicationRoutes );
app.use('/vitals', vitalRoutes);
app.use('/appoinments', appoinmentRoutes)

dbConnection();


app.listen(PORT,() => console.log(`server started in port ${PORT}`))