var express = require('express');
var users = require('../database/tables/users');
var router = express.Router();

/* POST users listing. */
router.post('/create', function (req, res, next) {
    var object = JSON.parse(req.body.object);
    users.create(object, function (res) {
        res.sendStatus(200);
    });
});

router.post('/read', function (req, res, next) {
    var object = JSON.parse(req.body.object);
    users.read(object, function (res) {
        res.send({object: JSON.stringify(res)});
    });
});

router.post('/update', function (req, res, next) {
    var object = JSON.parse(req.body.object);
    users.update(object, function (res) {
        res.send(200);
    });
});

router.post('/delete', function (req, res, next) {
    var object = JSON.parse(req.body.object);
    users.delete(object, function (res) {
        res.send(200);
    });
});

module.exports = router;
