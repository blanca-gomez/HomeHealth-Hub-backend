const express = require ('express');
const cors= require('cors');
const cookieParser = require('cookie-parser');
const {dbConnection} = require('./config/db');
const authRoutes = require ('./routes/authRoutes.js')
const userRoutes = require('./routes/userRoutes');
const medicationRoutes = require ('./routes/medicationRoutes.js');
const vitalRoutes = require ('./routes/vitalRoutes.js');
const appoinmentRoutes = require ('./routes/appoinmentRoutes.js');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); 
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));


app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/medications', medicationRoutes );
app.use('/vitals', vitalRoutes);
app.use('/appoinments', appoinmentRoutes)

dbConnection();


app.listen(PORT,() => console.log(`server started in port ${PORT}`))