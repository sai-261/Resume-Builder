"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sai:sai02@cluster0.kk12ows.mongodb.net/Resume-builder', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (err) {
  if (err) {
    console.log("error occured");
  } else {
    console.log("Mongodb connection success");
  }
});
//# sourceMappingURL=connect.dev.js.map
