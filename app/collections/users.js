// NOTE: this file is not needed when using MongoDB
var db = require('../config');
var User = require('../models/user');
var mongoose = require('mongoose');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;
