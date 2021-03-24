/*
    Main Server Entrypoint
    Launch using: node app
    Author: Tyler Osterberg
    Date: 3/23/2021
*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

//  Use mongoose middleware as API for database
mongoose.connect(config.database);

//  On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
})

mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
});

//  Intialize app variable
const app = express();

const users = require('./routes/users')

//  Port Number
const port = 3000;

//  Use CORS middleware
app.use(cors());

//  bodyParser middleware
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

//  Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//  Display invalid root route on server port
app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
})

//  Start Server
app.listen(port, () => {
    console.log('Server started on port '+port);
});
