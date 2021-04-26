/*
    Main location for backend messaging
*/
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Request = require('../models/request');

//  Post chat message
router.post('/connect', (req, res, next) => {
    let newReq = new Request({
        key: req.body.key,
        toUsername: req.body.toUsername,
        fromUsername: req.body.fromUsername,
        reqType: req.body.reqType,
        request: req.body.request
    });

    Request.addRequest(newReq, (err, msg) => {
        if(err){
            res.json({success: false, msg:'Failed to post request'});
        } else {
            res.json({success: true, msg: 'Request was sent'});
        }
    });
});

router.put('/edit/:id', (req, res, next) => {
    Request.updateRequest(req.body, (err, req) => {
        if(err){
            res.json({success: false, msg:'Failed to update request'});
        } else {
            res.json({success: true, msg:'Request updated', reqs: req});
        }
    });
});

//  **PROTECTED**
router.get('/connections/:key', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    Request.getMyRooms(req.params.key, (err, reqs) => {
        if(err){
            res.json({success: false, msg:'Failed to retrieve messages'});
        } else {
            res.json(reqs);
        }
    });
});

router.get('/myRequests/:username', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    Request.getMyRequests(req.params.username, (err, reqs) => {
        if(err){
            res.json({success: false, msg:'Failed to retrieve messages'});
        } else {
            res.json(reqs);
        }
    });
});

module.exports = router;
