const { readData, writeData } = require("../utils/fileHandler");

function getAllPatients() {
  return readData("patients.json");
}

function addPatient({ name, age, phone }) {
  if (!name || !age || !phone) {
    throw new Error("INVALID_DATA");
  }

  const patients = readData("patients.json");

  const newPatient = {
    id: patients.length + 1,
    name,
    age,
    phone,
  };

  patients.push(newPatient);
  writeData("patients.json", patients);

  return newPatient;
}

module.exports = {
  getAllPatients,
  addPatient,
};
