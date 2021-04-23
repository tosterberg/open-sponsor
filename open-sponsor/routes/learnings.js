/*
    Main location for backend learning modules
*/
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Learn = require('../models/learn');

//  Post chat message
router.post('/learnings', (req, res, next) => {
    let newModule = new Learn({
        creator: req.body.creator,
        name: req.body.name,
        step: req.body.step,
        timestamp: req.body.timestamp,
        datetime: req.body.datetime
    });

    Learn.addModule(newModule, (err, msg) => {
        if(err){
            res.json({success: false, msg:'Failed to post message'});
        } else {
            res.json({success: true, msg: 'Message was posted'});
        }
    });
});

//  Get the current conversation from chatroom
router.get('/learnings/:id', (req, res, next) => {
    Learn.getCurrentConv(req, (err, data) => {
        if(err){
            res.json({success: false, msg:'Failed to retrieve learning module'});
        } else {
            res.json({
                success: true
            });
        }
    });
});

//  **PROTECTED** stepwork

router.get('/stepwork', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;
