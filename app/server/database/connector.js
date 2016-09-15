/**
 * Created by Mor on 10/09/2016.
 */
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// typescript+mongoose https://gist.github.com/masahirompp/3c012c8721b70821fa45
// typescript+mongoDB https://github.com/Microsoft/TypeScriptSamples/blob/master/imageboard/db.ts

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