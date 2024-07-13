const express = require ('express');
const {dbConnection} = require('./config/db');
const authRoutes = require ('./routes/authRoutes.js')
const userRoutes = require('./routes/userRoutes');
const medicationRoutes = require ('./routes/medicationRoutes.js');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));


app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/medication', medicationRoutes )

dbConnection();


app.listen(PORT,() => console.log(`server started in port ${PORT}`))