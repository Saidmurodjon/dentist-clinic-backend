const express = require("express");
const router = express.Router();

const Doctor = require("./Doctor");
router.route("/").get(Doctor.GetDoctor);
router.route("/").post(Doctor.AddDoctor);
router.route("/:id").put(Doctor.UpdateDoctor);

module.exports = router;
