var mongoose = require('mongoose')
var user = require('../models/user');
module.exports.controller = function(app) {

/**
 * a new register/signup route
 */
  app.post('/account/signup', function(req, res) {
      // any logic goes here
      res.end('registration successfull')
  });

/**
 * About login route
 */
  app.get('/account/token', function(req, res) {
      // any logic goes here,
      res.end('Get token by passing the username/password in header')
  });

  /**
 * About validate token
 */
  app.get('/account/validate', function(req, res) {
      // any logic goes here,
      res.end('Login token')
  });

}
