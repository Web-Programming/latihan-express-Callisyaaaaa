const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllermahasiswa");

router.get("/mahasiswa", mahasiswaController.index);
router.post("/mahasiswa/insert",mahasiswaController.insert);
module.exports = router;