/*

*/
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');



//  Post chat message
router.post('/chatmessage', (req, res, next) => {
    let newMsg = new Message({
        key: req.body.key,
        username: req.body.username,
        message: req.body.message,
        timestamp: req.body.timestamp
    });

    Message.addMessage(newMsg, (err, msg) => {
        if(err){
            res.json({success: false, msg:'Failed to post message'});
        } else {
            res.json({success: true, msg: 'Message was posted'});
        }
    });
});

//  **PROTECTED** Chatroom

router.get('/chatroom', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;
