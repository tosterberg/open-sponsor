/*

*/
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

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
        sponsee: req.body.sponsee
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to register user'});
        } else {
            res.json({success: true, msg:'User registered'});
        }
    });
});

router.put('/edit/:id', (req, res, next) => {
    User.updateUser(req.body, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to update user'});
        } else {
            res.json({success: true, msg:'User updated'});
        }
    });
});

//  Authenticate
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

//  **PROTECTED** Profile
//  Will require auth token in header of get request to retrieve profile data
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    //initial test
    res.json({user: req.user});
});

module.exports = router;
