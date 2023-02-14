const express = require("express");

const router = express.Router();

const scrambleCtrl = require("../controllers/scramble");

router.get("/scramble",  scrambleCtrl.scramble_get);

module.exports = router;