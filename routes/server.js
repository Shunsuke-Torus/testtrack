const express = require("express");
const axios = require('axios');
var router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "サーバー動いてるよ"});
});

/* GET home page. */
router.get('/signup', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;