function isPositiveInteger(value) {
  return Number.isInteger(value) && value > 0;
}

function isValidDate(date) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) return false;

  const d = new Date(date);
  return !isNaN(d.getTime());
}

function isValidTime(time) {
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return regex.test(time);
}

function isFutureOrToday(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const inputDate = new Date(date);
  return inputDate >= today;
}

function validateAppointment({ patientId, doctorId, date, time }) {
  if (!isPositiveInteger(patientId)) {
    return "INVALID_PATIENT_ID";
  }

  if (!isPositiveInteger(doctorId)) {
    return "INVALID_DOCTOR_ID";
  }

  if (!isValidDate(date)) {
    return "INVALID_DATE_FORMAT";
  }

  if (!isFutureOrToday(date)) {
    return "PAST_DATE_NOT_ALLOWED";
  }

  if (!isValidTime(time)) {
    return "INVALID_TIME_FORMAT";
  }

  return null; 
}

module.exports = {
  validateAppointment,
};
