var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    image_source: 'https://smm-image-source.s3.ap-northeast-1.amazonaws.com',
    title: 'Soe Myat Min',
    root: 'localhost:3000/public'
  });
});

module.exports = router;
