/**
 * Created by Mor on 10/09/2016.
 */
var express = require('express');
var router = express.Router();

/* POST characters listing. */
router.post('/create', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/read', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/update', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/delete', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
