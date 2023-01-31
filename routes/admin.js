var express = require('express');
var router = express.Router();
var dbinfo = require('.././db/mongodb');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('admin/login', { 
    image_source: 'https://smm-image-source.s3.ap-northeast-1.amazonaws.com',
    title: 'Login',
    tab: 'login',
    selection: ''
  });
});

router.get('/home', function(req, res, next) {
  res.render('admin/home', { 
    image_source: 'https://smm-image-source.s3.ap-northeast-1.amazonaws.com',
    title: 'Main',
    tab: 'Home',
    selection: ''
  });
});

router.get('/all_item', function(req, res, next) {
  res.render('admin/all_item', { 
    image_source: 'https://smm-image-source.s3.ap-northeast-1.amazonaws.com',
    title: 'All Item',
    tab: 'table',
    selection: 'allitem'
  });
});

router.get('/insert_item', function(req, res, next) {
  res.render('admin/insert_item', { 
    image_source: 'https://smm-image-source.s3.ap-northeast-1.amazonaws.com',
    title: 'Insert New Item',
    tab: 'table',
    selection: 'newitem'
  });
});

module.exports = router;