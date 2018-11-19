var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/', require('./fontEnd/home'));
router.use('/items', require('./backend/item'));
router.use('/dashboard', require('./backend/dashboard'));

 module.exports = router;