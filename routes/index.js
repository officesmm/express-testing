var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    image_source: 'https://smm-image-source.s3.ap-northeast-1.amazonaws.com',
    title: 'Soe Myat Min' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { 
    image_source: 'https://smm-image-source.s3.ap-northeast-1.amazonaws.com',
    title: 'Soe Myat Min' });
});

router.get('/todaydate', async function(req, res, next) {  
  var dateCode = new Date().getFullYear() + String(new Date().getMonth() + 1).padStart(2, '0') + String(new Date().getDate()).padStart(2, '0');
  res.send(dateCode);
});
module.exports = router;
