/*
    Model Learn
*/
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//  Learning Schema
const LearnSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    sponsee: {
        type: String,
        required: true
    },
    instructions: {
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
    stepwork: {
        type: String,
        required: false
    }
});

const Learn = module.exports = mongoose.model('Learn', LearnSchema);

//  exported functions for use outside of this file
module.exports.getModuleByID = function(id, callback){
    Learn.findById(id, callback);
}

module.exports.getModuleByUsername = function(username, callback){
    const query = {username: username};
    Learn.findOne(query, callback);
}

// Write function to add learning module to persistant storage
module.exports.addModule = function(newModule, callback){
    newModule.save(callback);
}
