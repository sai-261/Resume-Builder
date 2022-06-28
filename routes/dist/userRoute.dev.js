"use strict";

var express = require('express');

var app = express();

var Usermodel = require('../models/usermodel');

var router = express.Router();
router.post("/loginuser", function _callee(req, res) {
  var result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Usermodel.findOne({
            username: req.body.username,
            password: req.body.password
          }));

        case 3:
          result = _context.sent;

          if (result) {
            res.send(result);
          } else {
            res.status(400).json("Login failed");
          }

          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(400).json(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.post('/registeruser', function (req, res) {
  var newuser = new Usermodel({
    username: req.body.username,
    password: req.body.password
  });
  newuser.save(function (err) {
    if (err) {
      res.status(400).json("something error occured");
    } else {
      res.send("user registration succesful");
    }
  });
});
router.post("/update", function _callee2(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Usermodel.findOneAndUpdate({
            _id: req.body._id
          }, req.body));

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(Usermodel.findOne({
            _id: req.body._id
          }));

        case 5:
          user = _context2.sent;
          res.send(user);
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          res.status(400).json(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
module.exports = router;
//# sourceMappingURL=userRoute.dev.js.map
