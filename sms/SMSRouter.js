const express = require("express");
const router = express.Router();

const SMS = require("./SMS");
router.route("/").post(SMS.SMS);



module.exports = router;
