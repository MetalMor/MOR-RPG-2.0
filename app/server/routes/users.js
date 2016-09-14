var express = require('express');
var router = express.Router();

/* POST users listing. */
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
