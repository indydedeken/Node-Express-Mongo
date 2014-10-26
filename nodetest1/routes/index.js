var express = require('express');
var router = express.Router();

/* GET home page.*/
router.get('/', function(req, res) {
  res.render('index', { title: 'Hello page!' });
});

/* GET home page.*/
router.get('/hello', function(req, res) {
  res.render('hello', { title: 'Hello page!' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

module.exports = router;
