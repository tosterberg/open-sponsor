/*
    Main location for backend user requests
*/
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Message = require('../models/message');

//  Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        lfsponsor: req.body.lfsponsor,
        sponsoring: req.body.sponsoring,
        status: req.body.status,
        sponsor: req.body.sponsor,
        sponsee: req.body.sponsee,
        bio: req.body.bio
    });
    //  Query to create a new user record
    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to register user'});
        } else {
            res.json({success: true, msg:'User registered'});
        }
    });
});

//  Query to edit the logged in users profile
router.put('/edit/:id', (req, res, next) => {
    User.updateUser(req.body, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to update user'});
        } else {
            res.json({success: true, msg:'User updated'});
        }
    });
});

//  Authenticate based on username and password
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'Wrong username or password'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800  // Set Auth for one week
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        _id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        lfsponsor: user.lfsponsor,
                        sponsoring: user.sponsoring,
                        sponsor: user.sponsor,
                        sponsee: user.sponsee,
                        bio: user.bio,
                        status: 'online'
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong username or password'});
            }
        });
    });
});

//  **PROTECTED** Section below requires JWT Auth to access API
//  Will require auth token in header and passport.authenticate
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    //initial test
    res.json({user: req.user});
});

router.get('/chatroom', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    User.getQueryUsers({status: 'online'}, (err, users) => {
        try {
            if(err) throw err;
            if(!users){
                return res.json({success: false, msg: 'Error in retrieving online users'});
            }
            return res.json({
                success: true,
                msg: 'Success in retrieving online users',
                users: users
            });
        } catch (err) {
            console.error('Error: ', err);
            return res.json({success: false, msg: 'Error in retrieving online users'});
        }

    });
});

router.get('/sponsors', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    User.getQueryUsers({sponsoring: true}, (err, users) => {
        try {
            if(err) throw err;
            if(!users){
                return res.json({success: false, msg: 'Error in retrieving users'});
            }
            return res.json({
                success: true,
                msg: 'Success in retrieving search for users',
                users: users
            });
        } catch (err) {
            console.error('Error: ', err);
            return res.json({success: false, msg: 'Error in retrieving users'});
        }

    });
});

router.get('/sponsees', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    User.getQueryUsers({lfsponsor: true}, (err, users) => {
        try {
            if(err) throw err;
            if(!users){
                return res.json({success: false, msg: 'Error in retrieving users'});
            }
            return res.json({
                success: true,
                msg: 'Success in retrieving search for users',
                users: users
            });
        } catch (err) {
            console.error('Error: ', err);
            return res.json({success: false, msg: 'Error in retrieving users'});
        }

    });
});

router.get('/:username', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    User.getQueryUsers({username: req.params.username}, (err, users) => {
        try {
            if(err) throw err;
            if(!users[0]){
                return res.json({success: false, msg: 'Error in retrieving user'});
            }
            return res.json({
                success: true,
                msg: 'Success in retrieving user',
                userId: users[0]._id
            });
        } catch (err) {
            console.error('Error: ', err);
            return res.json({success: false, msg: 'Error in retrieving user'});
        }

    });
});

module.exports = router;
