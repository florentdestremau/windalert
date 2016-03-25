var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {res.render('index');});
router.get('/cayeux-sur-mer', function(req, res, next) {res.render('cayeux');});
router.get('/le-crotoy', function(req, res, next) {res.render('le-crotoy');});
router.get('/le-touquet', function(req, res, next) {res.render('le-touquet');});
router.get('/franceville', function(req, res, next) {res.render('franceville');});

module.exports = router;
