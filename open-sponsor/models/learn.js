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
    },
    disabled: {
        type: Boolean,
        required: false
    }
});

const Learn = module.exports = mongoose.model('Learn', LearnSchema);

//  exported functions for use outside of this file
module.exports.getModuleByID = function(id, callback){
    Learn.findById(id, callback);
}

module.exports.updateLearning = function(req, callback){
    Learn.findByIdAndUpdate(req._id, req, callback);
}

module.exports.deleteMyStepwork = function(id, callback){
    Learn.findOneAndDelete({_id: id}, callback);
}

module.exports.getUsersModules = function(creator, callback){
    const query = { $and: [
            {
                "creator": creator,
            },
            {
                "master" : true
            }
        ]
    };
    Learn.find(query, callback);
}

module.exports.getUsersStepwork = function(username, callback){
    const query = { $and: [
            {
                "username": username,
            },
            {
                "master" : false,
            }
        ]
    };
    Learn.find(query, callback);
}

module.exports.getMasterByQuery = function(search, callback){
    const query =
            { $and: [
                {
                    "master": true,
                },
                { $or: [
                    {
                        "title": new RegExp(search, 'i'),
                    },
                    {
                        "creator": new RegExp(search, 'i'),
                    },
                    {
                        "step": new RegExp(search, 'i'),
                    }
                    ]
                }
            ]
        };

    Learn.find(query, callback);
}

module.exports.getSponseeStepwork = function(usernames, callback){
    let query = [];

    for(let i in usernames){
        query.push({ "username": usernames[i].username })
    }

    query = query.length > 0 ? { $or: query } : {};

    Learn.find(query, callback);
}

// Write function to add learning module to persistant storage
module.exports.addModule = function(newModule, callback){
    newModule.save(callback);
}
