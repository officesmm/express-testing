var express = require('express');
var router = express.Router();

var car =[{
  name: "red car",
  color: "red",
  size: "big",
},{
  name: "blue car",
  color: "blue",
  size: "small",
}]

/* GET users listing. */
router.post('/post', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  console.log(req.body.para);
  res.send(JSON.stringify(car));
});

router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  console.log(req.query.para);
  res.send(JSON.stringify(car));
});

module.exports = router;
