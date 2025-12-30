const { readData, writeData } = require("../utils/fileHandler");
const { validateAppointment } = require("../validators/appointment.validator");

function getAllAppointments() {
  return readData("appointments.json");
}

function addAppointment({ patientId, doctorId, date, time }) {
  const validationError = validateAppointment({
    patientId,
    doctorId,
    date,
    time,
  });

  if (validationError) {
    throw new Error(validationError);
  }

  if (!patientId || !doctorId || !date || !time) {
    throw new Error("INVALID_DATA");
  }

  patientId = Number(patientId);
  doctorId = Number(doctorId);

  const patients = readData("patients.json");
  const doctors = readData("doctors.json");
  const appointments = readData("appointments.json");

  const patientExists = patients.find((p) => p.id === patientId);
  if (!patientExists) {
    throw new Error("PATIENT_NOT_FOUND");
  }

  const doctorExists = doctors.find((d) => d.id === doctorId);
  if (!doctorExists) {
    throw new Error("DOCTOR_NOT_FOUND");
  }

  //prebent the double booking for the doctor at the same date and time
  const conflict = appointments.find(
    (a) => a.doctorId === doctorId && a.date === date && a.time === time
  );

  if (conflict) {
    throw new Error("DOUBLE_BOOKING");
  }

  const newAppointment = {
    id: appointments.length + 1,
    patientId,
    doctorId,
    date,
    time,
  };

  appointments.push(newAppointment);
  writeData("appointments.json", appointments);

  return newAppointment;
}

function deleteAppointment(id) {
  const appointmentId = Number(id);
  const appointments = readData("appointments.json");

  const filtered = appointments.filter((a) => a.id !== appointmentId);

  if (filtered.length === appointments.length) {
    throw new Error("APPOINTMENT_NOT_FOUND");
  }

  writeData("appointments.json", filtered);
}

module.exports = {
  getAllAppointments,
  addAppointment,
  deleteAppointment,
};
