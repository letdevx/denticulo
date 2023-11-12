var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users = [
    { nome: "Jacus", email: "jacus@ladosombrio.com" },
    { nome: "Lenticia", email: "lenticia@rebeldes.com" }
  ];
  
  res.send(users);
});

module.exports = router;
