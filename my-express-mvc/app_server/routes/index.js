var express = require('express');
var router = express.Router();

var maincontroller = require("../controllers/main");

/* GET home page. */
router.get('/', maincontroller.index);
router.get('/kontak', maincontroller.kontak)
router.get('/profil',maincontroller.profil)

module.exports = router;
