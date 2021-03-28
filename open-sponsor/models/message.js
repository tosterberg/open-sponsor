/*
    Models
*/
const mongoose = require('mongoose');
const config = require('../config/database');

//  Message Schema
const MessageSchema = mongoose.Schema({
    key: {
        type: String,
        required: true
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
        required: true
    }
});

const Message = module.exports = mongoose.model('Message', MessageSchema);

//  exported functions for use outside of this file
module.exports.getMessagesByID = function(id, callback){
    Message.findById(id, callback);
}

module.exports.getMessagesByUsername = function(username, callback){
    const query = {username: username}
    Message.findOne(query, callback);
}

// Write function to add message to persistant storage
module.exports.addMessage = function(msg, callback){

}

module.exports.getLastConv = function(key, callback){

}
