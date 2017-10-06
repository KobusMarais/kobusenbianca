var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "./src";

var api = require('./src/api');
app.use('/', api);
app.use(express.static(__dirname + '/src'));



// Initialize the app.
  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
