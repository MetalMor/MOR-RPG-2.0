/**
 * Created by becari on 16/09/2016.
 */
var express = require('express'),
    router = express.Router();
var resources = require('./resources'),
    callbacks = require('./callbacks');

/* POST CRUD rest service. */
router.post('/:resource/:action', function (req, res, next) {
    var object = JSON.parse(req.body.object),
        resource = req.params.resource,
        action = req.params.action;
    resources[resource].create(object, callbacks[action]);
});

module.exports = router;