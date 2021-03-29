/*
    Models
*/
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//  Message Schema
const MessageSchema = mongoose.Schema({
    key: {
        type: [{ username: String }]
    },
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const Message = module.exports = mongoose.model('Message', MessageSchema);

//  exported functions for use outside of this file
module.exports.getMessagesByID = function(id, callback){
    Message.findById(id, callback);
}

module.exports.getMessagesByUsername = function(username, callback){
    const query = {username: username};
    Message.findOne(query, callback);
}

module.exports.getCurrentConv = function(msg, callback){
    const query = {timestamp: timestamp};
    Message.slice(query, 25);
}

// Write function to add message to persistant storage
module.exports.addMessage = function(newMsg, callback){
    /*  Scaffold for conversation matching based on users in conversation
        looking for better matching algo than O(n) match against key[]
        key = [arrayOfUsers]
        key = hash(key)
        accessed and tracked by the conversation key
        likely will not be added during the Capstone, but for future development
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newMsg.key, salt, (err, hash) => {
            if(err) throw err;
            newMsg.key = hash;  // Used for retrieval of conversations between people
            newMsg.save(callback);
        })
    });
    */
    newMsg.save(callback);
}
