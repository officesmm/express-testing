var express = require('express');
var router = express.Router();
var dbinfo = require('.././db/mongodb');


// item
router.post('/getAllPDUser',async function(req, res, next) {
  get_result = await dbinfo.getAllItem("PDUser");
  res.send({get_result});
});

router.post('/insertNewPDUser',async function(req, res, next) {
  // တူတဲ့ user name ရှိလား အရင်စစ်ပေးရမယ် 

  insert_result = await dbinfo.insertNewItem(req.body);
  inserted_data_result = await dbinfo.getDataWithObjectID("PDUser", insert_result.insertedId);
  res.send({insert_result,inserted_data_result});
});

router.post('/loginPDUser',async function(req, res, next) {
  // User name, User Access Key ဝင်လာပြီး စစ်ပေးရမယ် 
  // Alive status ကို စစ်ပေးရမယ် 

  // insert_result = await dbinfo.insertNewItem(req.body);
  // inserted_data_result = await dbinfo.getDataWithObjectID("PDUser", insert_result.insertedId);
  // res.send({insert_result,inserted_data_result});
});

router.post('/getOnePDUserLinks',async function(req, res, next) {

  // get all Links where UserID is "req.UserID" ; 

  // get_result = await dbinfo.getAllItem("PDUser");
  // res.send({get_result});
});

router.post('/insertNewPDLinks',async function(req, res, next) {

  // update Links where UserID is "req.UserID" ; 

  // insert_result = await dbinfo.insertNewItem(req.body);
  // inserted_data_result = await dbinfo.getDataWithObjectID("PDUser", insert_result.insertedId);
  // res.send({insert_result,inserted_data_result});
});

////

router.post('/deleteItem', async function(req, res, next) {
  delete_result = await dbinfo.deleteItem(req.body);
  res.send({delete_result});
});

router.post('/deleteAllItem', async function(req, res, next) {
  var dateCode = new Date().getFullYear() + String(new Date().getMonth() + 1).padStart(2, '0') + String(new Date().getDate()).padStart(2, '0');
  if(req.body.deletesure == true && req.body.date == dateCode){
    delete_result = await dbinfo.dropingTable("PDUser");
    res.send({delete_result});
  }else{
    res.send("be sure you are deleting, deletesure to be true and set the date");
  }
});

module.exports = router;