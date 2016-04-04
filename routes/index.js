'use strict';
var express = require('express');
var router = express.Router();

// GET: /
router.get('/', function(req, res) {
  res.render('index/index', {
    title: 'Hello, World!'
  });
});

module.exports = router;
