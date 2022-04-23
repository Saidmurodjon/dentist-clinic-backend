const express = require("express");
const router = express.Router();

// barcha so'rovlar githubda yozilgan !!!
const Admin = require("./admin/AdminRouter");
const Patient = require("./patients/PatientRouter");
const Service = require("./service-type/ServiceRouter");
const Doctors = require("./doctors/DoctorRouter");


router.use("/admin", Admin);
router.use("/patient", Patient);
router.use("/service", Service);
router.use("/doctors", Doctors);


module.exports = router;
