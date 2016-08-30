var express = require('express');
var mongoose = require('mongoose');

var app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
//   next();
// });

// connect to mongo database named "skooldb"
mongoose.connect('mongodb://localhost/skooldb');

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.all("/api/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('SKOOL APP izzz listening on port' + port + '!!!');
});

// export our app for testing and flexibility, required by index.js
module.exports = app;
