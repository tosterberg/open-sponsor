/*
    Main location for backend messaging
*/
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Message = require('../models/message');

//  Post chat message
router.post('/chatmessage', (req, res, next) => {
    let newMsg = new Message({
        key: req.body.key,
        username: req.body.username,
        message: req.body.message,
        timestamp: req.body.timestamp,
        datetime: req.body.datetime
    });

    Message.addMessage(newMsg, (err, msg) => {
        if(err){
            res.json({success: false, msg:'Failed to post message'});
        } else {
            res.json({success: true, msg: 'Message was posted'});
        }
    });
});

//  Get the current conversation from chatroom
router.get('/chatmessage', (req, res, next) => {
    Message.getCurrentConv(req, (err, msg) => {
        if(err){
            res.json({success: false, msg:'Failed to retrieve messages'});
        } else {
            res.json({
                success: true,
                messages: msg.messages
            });
        }
    });
});

//  **PROTECTED** Chatroom

router.get('/chatroom', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;
