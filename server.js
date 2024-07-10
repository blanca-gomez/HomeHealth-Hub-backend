const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3000;
const {dbConnection} = require('./config/db');


app.get('/',(req,res)=>  {
    res.send('prueba')
})

dbConnection();


app.listen(PORT,() => console.log(`server started in port ${PORT}`))