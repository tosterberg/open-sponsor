/*
    Main location for backend messaging
*/
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Request = require('../models/requests');

//  Post chat message
router.post('/connect', (req, res, next) => {
    let newMsg = new Request({
        key: req.body.key,
        username: req.body.username,
        request: req.body.request,
        timestamp: req.body.timestamp,
        datetime: req.body.datetime
    });

    Request.addRequest(newMsg, (err, msg) => {
        if(err){
            res.json({success: false, msg:'Failed to post request'});
        } else {
            res.json({success: true, msg: 'Request was sent'});
        }
    });
});


//  **PROTECTED** Chatroom
router.get('/requests', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;
