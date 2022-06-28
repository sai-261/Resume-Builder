"use strict";

var express = require('express');

var app = express();

var Connect = require('./connect');

app.use(express.json());
var port = process.env.PORT || 5000;

var userRoute = require('./routes/userRoute');

var path = require("path");

app.use('/api/user/', userRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express["static"]("frontend/build"));
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
  });
}

app.get('/', function (req, res) {
  res.send('hello world');
});
app.listen(port, function () {
  return console.log("Server started on port  ".concat(port, "!"));
});
//# sourceMappingURL=backend.dev.js.map
