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
router.post('/', (req, res, next) => {
    let newModule = new Learn({
        creator: req.body.creator,
        title: req.body.title,
        step: req.body.step,
        content: req.body.content,
        stepwork: req.body.stepwork,
        username: req.body.username,
        master: req.body.master
    });

    Learn.addModule(newModule, (err, msg) => {
        if(err){
            console.error(err);
            res.json({success: false, msg:'Failed to post learning'});
        } else {
            res.json({success: true, msg: 'Learning was posted'});
        }
    });
});

//  Get the current conversation from chatroom
router.get('/:id', (req, res, next) => {
    Learn.getUsersModules(req.params.id, (err, data) => {
        if(err){
            res.json({success: false, msg:'Failed to retrieve learning modules'});
        } else {
            res.json({
                success: true,
                learnings: data
            });
        }
    });
});

router.get('/stepwork/:username', (req, res, next) => {
    Learn.getUsersStepwork(req.params.username, (err, data) => {
        if(err){
            res.json({success: false, msg:'Failed to retrieve learning modules'});
        } else {
            res.json({
                success: true,
                learnings: data
            });
        }
    });
});

router.delete('/stepwork/:id', (req, res, next) => {
    Learn.deleteMyStepwork(req.params.id, (err, data) => {
        if(err){
            res.json({success: false, msg:'Failed to delete learning modules'});
        } else {
            res.json({
                success: true,
                msg: 'Deleted learning module'
            });
        }
    });
});

router.get('/search/:query', (req, res, next) => {
    Learn.getMasterByQuery(req.params.query, (err, data) => {
        if(err){
            res.json({success: false, msg:'Failed to retrieve learning modules'});
        } else {
            res.json({
                success: true,
                learnings: data
            });
        }
    });
});

router.put('/edit', (req, res, next) => {
    Learn.updateLearning(req.body, (err, data) => {
        if(err){
            res.json({success: false, msg: err});
        } else {
            res.json({
                success: true,
                learning: data
            });
        }
    });
});

router.put('/sponsees', (req, res, next) => {
    Learn.getSponseeStepwork(req.body, (err, data) => {
        if(err){
            res.json({success: false, msg:'Failed to retrieve learning modules'});
        } else {
            res.json({
                success: true,
                learnings: data
            });
        }
    });
});

//  **PROTECTED** stepwork

router.get('/stepwork', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;
