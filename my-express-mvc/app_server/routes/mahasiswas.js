const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllermahasiswa");

router.get("/mahasiswa", mahasiswaController.index);
module.exports = router;