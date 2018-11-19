var express = require('express');
var router = express.Router();

/* GET home page. */
var ItemsModel = require('../../schemas/items');


router.get('/list', function (req, res, next) {
  ItemsModel.find({}, (err, items) => {
    res.render('pages/items/list', {
      title: 'Item List',
      items
    });
  })

});
router.get('/add', function (req, res, next) {
  res.render('pages/items/add', { title: 'Item Add' });
});
module.exports = router;