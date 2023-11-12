var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let payload = {
    chave: "valor"
  }
  
  res.send(payload);
});

module.exports = router;
