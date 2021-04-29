/*
    Model Learn
*/
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//  Learning Schema
const LearnSchema = mongoose.Schema({
    creator: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    step: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    stepwork: {
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
    username: {
        type: String,
        required: false
    },
    master: {
        type: Boolean,
        required: true
    }
});

const Learn = module.exports = mongoose.model('Learn', LearnSchema);

//  exported functions for use outside of this file
module.exports.getModuleByID = function(id, callback){
    Learn.findById(id, callback);
}

module.exports.makeMyCopyModule = function(id, callback){
    //  Update
    Learn.findById(id, callback);
}

module.exports.getModuleByUsername = function(username, callback){
    const query = {username: username};
    Learn.findOne(query, callback);
}

// Write function to add learning module to persistant storage
module.exports.addModule = function(newModule, callback){
    console.log('addModule', newModule);
    newModule.save(callback);
}
