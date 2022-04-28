const express = require("express");
const router = express.Router();

const Doctor = require("./Doctor");
router.route("/").get(Doctor.GetDoctor);
router.route("/").post(Doctor.AddDoctor);
// router.route("/check").post(Doctor.CheckDoctor);
router.route("/:id").put(Doctor.UpdateDoctor);
router.route("/:id").delete(Doctor.DeleteDoctor);


module.exports = router;
