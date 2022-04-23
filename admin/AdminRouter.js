const express = require("express");
const router = express.Router();
const Admin = require("./Admin");
router.route("/").post(Admin.PostAdmin);

module.exports = router;
