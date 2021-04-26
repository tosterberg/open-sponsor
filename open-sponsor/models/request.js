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
        index: {unique: true},
        required: true
    },
    toUsername: {
        type: String,
        required: true
    },
    fromUsername: {
        type: String,
        required: true
    },
    request: {
        type: String,
        required: true
    },
    reqType: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: false
    },
    datetime: {
        type: Number,
        required: false
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

module.exports.getMyRequests = function(username, callback){
    const query = {toUsername: username};
    Request.find(query, callback);
}

module.exports.getMyRooms = function(key, callback){
    const query = { $and: [
                {
                    "key": new RegExp(key, 'i'),
                },
                {
                    "reqType": "connected",
                }
            ]
        };
    Request.find(query, callback);
}

module.exports.getRequestConv = function(pair, callback){
    const query = {key: pair};
    Request.findOne(query, callback);
}

module.exports.updateRequest = function(req, callback){
    Request.findByIdAndUpdate(req._id, req, callback);
}

// Write function to add request to persistant storage
module.exports.addRequest = function(newReq, callback){
    newReq.save(callback);
}
