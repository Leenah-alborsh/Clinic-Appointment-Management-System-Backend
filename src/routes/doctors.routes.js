const express = require("express");
const router = express.Router();
const doctorsController = require("../controllers/doctors.controller");

router.get("/", doctorsController.getDoctors);
router.post("/", doctorsController.createDoctor);

module.exports = router;
