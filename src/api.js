var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var path = require('path');
  res.sendFile(path.resolve('./src/index.html'));

});

module.exports = router;
