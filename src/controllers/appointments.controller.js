const appointmentsService = require("../services/appointments.service");

function getAppointments(req, res) {
  const appointments = appointmentsService.getAllAppointments();
  res.json(appointments);
}

function createAppointment(req, res) {
  try {
    const appointment = appointmentsService.addAppointment(req.body);

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (error) {
    switch (error.message) {
      case "INVALID_DATA":
        return res.status(400).json({
          message: "Please provide patientId, doctorId, date, and time",
        });
      case "PATIENT_NOT_FOUND":
        return res.status(404).json({ message: "Patient not found" });
      case "DOCTOR_NOT_FOUND":
        return res.status(404).json({ message: "Doctor not found" });
      case "DOUBLE_BOOKING":
        return res.status(409).json({
          message: "This doctor already has an appointment at this time",
        });
      case "INVALID_PATIENT_ID":
        return res.status(400).json({ message: "Invalid patientId" });

      case "INVALID_DOCTOR_ID":
        return res.status(400).json({ message: "Invalid doctorId" });

      case "INVALID_DATE_FORMAT":
        return res.status(400).json({
          message: "Date must be in YYYY-MM-DD format",
        });

      case "PAST_DATE_NOT_ALLOWED":
        return res.status(400).json({
          message: "Date cannot be in the past",
        });

      case "INVALID_TIME_FORMAT":
        return res.status(400).json({
          message: "Time must be in HH:mm format",
        });

      default:
        return res.status(500).json({ message: "Server error" });
    }
  }
}

function removeAppointment(req, res) {
  try {
    appointmentsService.deleteAppointment(req.params.id);
    res.json({ message: "Appointment deleted successfully" });
  } catch (error) {
    if (error.message === "APPOINTMENT_NOT_FOUND") {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  getAppointments,
  createAppointment,
  removeAppointment,
};
