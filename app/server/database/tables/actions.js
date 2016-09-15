/**
 * Created by Mor on 10/09/2016.
 */
var connector = require('../connector'),
    assert = require('assert');

var actions = {
    collection: 'actions',
    connect: function(callback) {
        var self = this;
        connector.connect(function (err, db) {
            assert.equal(null, err);
            callback(db.collection(self.collection));
        });
    },
    create: function(object, callback) {
        this.connect(function(col) {
            col.insertOne(object, function(err, result) {
                assert.equal(null, err);
                callback(result);
            });
        });
    },
    read: function(object, callback) {
        this.connect(function(col) {
            col.findOne({id: object.id}, function(err, document) {
                assert.equal(null, err);
                callback(document);
            });
        });
    },
    update: function(object, callback) {
        this.connect(function(col) {
            col.updateOne({id: object.id}, object, function(err, document) {
                assert.equal(null, err);
                callback(document);
            });
        });
    },
    delete: function(object, callback) {
        this.connect(function(col) {
            col.deleteOne({id: object.id}, function(err, result) {
                assert.equal(null, err);
                callback(result);
            });
        });
    }
};

module.exports = actions;
