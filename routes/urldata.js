var express = require('express');
var router = express.Router();

var dbinfo = require('.././db/mongodb');


router.get('/', function(req, res, next) {
  res.send(JSON.stringify(car));
});

// 
router.post('/insertNewURL',async function(req, res, next) {
  insert_result = await dbinfo.insertNewURL(req.body);
  inserted_data_result = await dbinfo.getItemWithObjectID("urlLink", insert_result.insertedId);
  res.send({insert_result,inserted_data_result});
});

router.get('/getAllURL',async function(req, res, next) {
  get_result = await dbinfo.getAllItem("urlLink");
  res.send({get_result});
});

router.post('/delete',async function(req, res, next) {
  insert_result = await dbinfo.insertNewURL(req.body);
  // inserted_data_result = await dbinfo.getItemWithObjectID("urlLink", insert_result.insertedId);
  // res.send({insert_result,inserted_data_result});
});

router.post('/deleteAllURL',async function(req, res, next) {
  // insert_result = await dbinfo.insertNewURL(req.body);
  // inserted_data_result = await dbinfo.getItemWithObjectID("urlLink", insert_result.insertedId);
  // res.send({insert_result,inserted_data_result});
});

module.exports = router;