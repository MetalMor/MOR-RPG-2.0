/**
 * Created by Mor on 10/09/2016.
 */
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://localhost:27017/vtda';

var connector = {
    connect: function(callback) {
        MongoClient.connect(url, {poolSize: 10}, function(err, db) {
            assert.equal(null, err);
            if(callback) callback(err, db);
        });
    }
};

module.exports = connector;