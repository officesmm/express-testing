var express = require('express');
var router = express.Router();

var dbinfo = require('.././db/mongodb');

var item = {
  name: "car small",
  rating: 5,
  price: "400Ks",
  longDesc: "sar ashay kyi yayy pay lite pr",
  color: {
    colorID: 1,
    color: "blue"
  },
  coupon: [
    {
      couponID: 1,
      couponCode: "7xe83b",
      type: "percentage",
      value: 20
    },
    {
      couponID: 2,
      couponCode: "3fc8q3",
      type: "flat",
      value: 100
    }
  ]
};

// item
router.post('/insertNewItem',async function(req, res, next) {
  insert_result = await dbinfo.insertNewItem(req.body);
  inserted_data_result = await dbinfo.getItemWithObjectID("item", insert_result.insertedId);
  res.send({insert_result,inserted_data_result});
});

router.get('/getAllItem',async function(req, res, next) {
  get_result = await dbinfo.getAllItem();
  res.send({get_result});
  // res.send("return to testing");
});

router.get('/updateItem',async function(req, res, next) {
  update_result = await dbinfo.updateItem(req);
  res.send({update_result});
});

module.exports = router;