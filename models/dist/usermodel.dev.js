"use strict";

var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    "default": ""
  },
  lastName: {
    type: String,
    "default": ""
  },
  email: {
    type: String,
    "default": ""
  },
  mobileNumber: {
    type: String,
    "default": ''
  },
  portfolio: {
    type: String,
    "default": ""
  },
  address: {
    type: String,
    "default": ""
  },
  objective: {
    type: String,
    "default": ""
  },
  Education: {
    type: Array,
    "default": []
  },
  Skills: {
    type: Array,
    "default": []
  },
  experience: {
    type: Array,
    "default": []
  },
  projects: {
    type: Array,
    "default": []
  },
  achievements: {
    type: Array,
    "default": []
  }
}, {
  timestamps: true
});
var Usermodel = mongoose.model('Resume', profileSchema);
module.exports = Usermodel;
//# sourceMappingURL=usermodel.dev.js.map
