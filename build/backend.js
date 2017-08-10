require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var express = __webpack_require__(2);
	var http = __webpack_require__(3);
	var path = __webpack_require__(4);
	var fs = __webpack_require__(5);
	var app = express();
	
	// database connection
	//var mongoose = require('mongoose');
	//mongoose.connect('mongodb://localhost/mydb');
	
	// some environment variables
	app.set('port', process.env.PORT || 3000);
	
	// dynamically include routes (Controller)
	fs.readdirSync('./src/controllers').forEach(function (file) {
	  if (file.substr(-3) == '.js') {
	    var route = __webpack_require__(6)("./" + file);
	    route.controller(app);
	  }
	});
	
	http.createServer(app).listen(app.get('port'), function () {
	  console.log('Express server listening on port ' + app.get('port'));
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./account": 7,
		"./account.js": 7
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 6;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mongoose = __webpack_require__(8);
	var user = __webpack_require__(9);
	module.exports.controller = function (app) {
	
	  /**
	   * a new register/signup route
	   */
	
	  app.post('/account/signup', function (req, res) {
	    // any logic goes here
	    res.end('Signup');
	  });
	
	  /**
	   * About login route
	   */
	  app.get('/account/login', function (req, res) {
	    // any logic goes here
	    res.end('Login');
	  });
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mongoose = __webpack_require__(8),
	    Schema = mongoose.Schema;
	var userSchema = new Schema({
	      username: String,
	      password: String
	}),
	    User = mongoose.model('user', userSchema);
	
	module.exports = User;

/***/ }
/******/ ]);
//# sourceMappingURL=backend.js.map