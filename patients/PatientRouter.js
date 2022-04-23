const express = require("express");
const router = express.Router();

const Patient = require("./Patient");
router.route("/").get(Patient.GetPatient);
router.route("/").post(Patient.AddPatient);
router.route("/:id").put(Patient.UpdatePatient);

module.exports = router;
