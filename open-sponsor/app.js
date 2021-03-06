/*
    Main Server Entrypoint
    Launch using: node app or ng start
    Author: Tyler Osterberg
    Date: 3/23/2021
*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const http = require('http');
const socketio = require('socket.io');

const server = http.createServer(express);
const io = socketio(server);

//  Use socket.io when a client connects
io.on('connection', socket => {
    console.log('new websockets connection...');
});

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

const users = require('./routes/users');
const messages = require('./routes/messages');
const learnings = require('./routes/learnings');
const requests = require('./routes/requests');

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
app.use('/messages', messages);
app.use('/requests', requests);
app.use('/learnings', learnings);

//  Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//  Display invalid root route on server port
app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
});

//  Re-route all unexpected routes to home
app.get('*', (req, res) => {
    //res.sendFile('http://localhost:4200/');
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//  Start Server
app.listen(port, () => {
    console.log('Server started on port '+port);
});
