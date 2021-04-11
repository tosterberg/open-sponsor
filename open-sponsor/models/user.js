/*
    User Models
*/
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//  User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lfsponsor: {
        type: Boolean,
        required: true,
        default: false
    },
    sponsoring: {
        type: Boolean,
        required: true,
        default: false
    },
    bio: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    reported: {
        type: [{ _id: String, date: Date }],
        default: []
    },
    sponsor: {
        type: String,
        default: undefined
    },
    sponsee: {
        type: [{ _id: String, username: String }],
        default: []
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

//  exported functions for use outside of this file
module.exports.getUserByID = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username};
    User.findOne(query, callback);
}

//  Make function available for salting and hashing plaintext password
module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        })
    });
}

//  Update individual user profile based on object _id from MongoDB
module.exports.updateUser = function(req, callback){
    User.findByIdAndUpdate(req._id, req, callback);
}

//  Check match between provided password and the stored salted password
module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}

// Return list of users that are online for chatroom
module.exports.getOnlineUsers = function(req, callback) {
    User.find(req, callback)
    .then(data => {
        callback.send(data);
        resolve();
    })
    .catch(err => {
          console.log('error: ', err);
    });
}
