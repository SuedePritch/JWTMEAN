const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session')
const config = require('./config/database')

const app= express();
const users = require('./routes/users')
const PORT = 5003;


//Connect to Database
mongoose.connect(config.database,  function(err){
    if(err){
        console.log('ERROR'+err);
    }else{
        console.log(`Connected to MongoDB database`);
    }
});


//CORS
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Passport Config
require('./config/passport')(passport);

//Passport Middleware
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());



app.use('/users', users);


//Index Route
app.get('/', (req,res, next) =>{
    res.send('Invalid Endpoint')
});

app.listen(PORT, ()=>{
    console.log('Server Running on PORT: ' + PORT)
});
