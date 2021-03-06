const express = require("express");
const router = express.Router();

const Service = require("./Service");
router.route("/").get(Service.GetService);
router.route("/").post(Service.AddService);
router.route("/:id").put(Service.UpdateService);
router.route("/:id").delete(Service.DeleteService);

module.exports = router;
