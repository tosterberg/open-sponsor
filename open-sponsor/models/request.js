/*
    Model Message
*/
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//  Message Schema
const RequestSchema = mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    request: {
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
    },
    connect: {
        type: Boolean,
        required: false
    }
});

const Request = module.exports = mongoose.model('Request', RequestSchema);

//  exported functions for use outside of this file
module.exports.getRequestsByID = function(id, callback){
    Request.findById(id, callback);
}

module.exports.getRequestsByUsername = function(username, callback){
    const query = {username: username};
    Request.findOne(query, callback);
}

module.exports.getRequestConv = function(pair, callback){
    const query = {key: pair};
    Request.findOne(query, callback);
}


// Write function to add request to persistant storage
module.exports.addRequest = function(newReq, callback){
    newReq.save(callback);
}
