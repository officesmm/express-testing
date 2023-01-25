var express = require('express');
var router = express.Router();

// function taber(){
//   $("#sidemenu_" + table).css("display", "block");
//   $("#sidemenu_" + table + "_" + table).addClass("active");
// }

taber = () => {
  $("#sidemenu_" + table).css("display", "block");
  $("#sidemenu_" + table + "_" + table).addClass("active");
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/admin', { 
    title: 'Login',
    tab: 'table',
    selection: 'allitem'
  });
});

module.exports = router;