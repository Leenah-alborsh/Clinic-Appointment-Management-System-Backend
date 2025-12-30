const patientsService = require("../services/patients.service");

function getPatients(req, res) {
  const patients = patientsService.getAllPatients();
  res.json(patients);
}

function createPatient(req, res) {
  try {
    const patient = patientsService.addPatient(req.body);

    res.status(201).json({
      message: "Patient added successfully",
      patient,
    });
  } catch (error) {
    if (error.message === "INVALID_DATA") {
      return res.status(400).json({
        message: "Please provide name, age, and phone",
      });
    }

    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  getPatients,
  createPatient,
};
