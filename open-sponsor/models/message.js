/*
    Model Message
*/
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
        type: String,
        required: true
    },
    datetime: {
        type: Number,
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

module.exports.getPrivateConv = function(room, callback){
    const query = {key: room};
    Message.findOne(query, callback);
}

module.exports.getCurrentConv = function(req, callback){
    Message.find({key: 'chatroom'}, callback).sort({_id: 'descending'}).limit(10);
}

// Write function to add message to persistant storage
module.exports.addMessage = function(newMsg, callback){
    newMsg.save(callback);
}
