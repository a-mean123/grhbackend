const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./config/connection');

// routes

const adminApi = require('./routes/admin');
const departementApi = require('./routes/departement');
const clientApi = require('./routes/client');
const projetApi = require('./routes/projet');
const employeeApi = require('./routes/employee');


// admin signup function
const { signup } = require('./controllers/admin');

const port = 3000;


const app = express();
app.use(express.json());
app.use(cors());



app.use('/admin', adminApi);
app.use('/departement', departementApi);
app.use('/client', clientApi);
app.use('/projet', projetApi);
app.use('/employee', employeeApi);


app.use('/image' , express.static('./uploads'));

app.listen(port, () => {
    console.log(`server lister on http://127.0.0.1:${port}`);
    signup();
})