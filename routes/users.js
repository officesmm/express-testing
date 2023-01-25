var express = require('express');
var router = express.Router();

var dbinfo = require('.././db/mongodb');

var car =[{
  name: "red car",
  color: "red",
  size: "big",
},{
  name: "blue car",
  color: "blue",
  size: "small",
}]

router.post('/post', function(req, res, next) {
  console.log(req.body.para);
  res.send(JSON.stringify(car));
});

router.get('/', function(req, res, next) {
  console.log(req.query.para);
  res.send(JSON.stringify(car));
});

router.get('/getalluser',async function(req, res, next) {
  reqID = req.query.id;
  data = await dbinfo.getUserData(reqID);
  res.send(data);
});

router.get('/updateUserDecision',async function(req, res, next) {
  update_result = await dbinfo.updateUserDecision("1","1");
  updated_data = await dbinfo.getUserData("1");
  res.send({updated_data,update_result});
});

module.exports = router;
