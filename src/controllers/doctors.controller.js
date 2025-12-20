const doctorsService = require("../services/doctors.service");

function getDoctors(req, res) {
  const doctors = doctorsService.getAllDoctors();
  res.json(doctors);
}

function createDoctor(req, res) {
  try {
    const doctor = doctorsService.addDoctor(req.body);

    res.status(201).json({
      message: "Doctor added successfully",
      doctor,
    });
  } catch (error) {
    if (error.message === "INVALID_DATA") {
      return res.status(400).json({
        message: "Please provide name, specialty, and phone",
      });
    }

    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  getDoctors,
  createDoctor,
};
