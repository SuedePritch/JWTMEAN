const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session')



const app= express();

const PORT = 5000;

app.get('/', (req,res) =>{
    res.send('Invalid Endpoint')
})
app.listen(PORT, ()=>{
    console.log('Server Running on PORT: ' + PORT)
})