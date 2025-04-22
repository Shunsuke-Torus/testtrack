const express = require("express");
const axios = require('axios');
var router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "サーバー動いてるよ"});
});

router.get('/index', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/signin', (req, res) => {
  const { user_id, password } = req.body;
  
  // user_id: 6文字以上20文字以内の半角英数字
  const userIdRegex = /^[A-Za-z0-9]{6,20}$/;
  // password: 8文字以上20文字以内、ASCII記号・数字・英字（空白と制御コードを除く）
  const passwordRegex = /^[!-~]{8,20}$/;

  if (!user_id || !userIdRegex.test(user_id)) {
      return res.status(400).json({ error: "Invalid user_id" });
  }
  if (!password || !passwordRegex.test(password)) {
      return res.status(400).json({ error: "Invalid password" });
  }

  return res.status(200).json({
      message: "Account suceessfully created",
      user: {
          user_id: user_id,
          password: password
      }
  });
});

module.exports = router;