const express = require("express");

const router = express.Router();

const boxCtrl = require("../controllers/box");

router.get("/box",  boxCtrl.box_get);

module.exports = router;