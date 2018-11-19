var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('pages/dashboard/index', { title: 'Dashboard' });
  });
  module.exports = router;