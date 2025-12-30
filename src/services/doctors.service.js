const { readData, writeData } = require("../utils/fileHandler");

function getAllDoctors() {
  return readData("doctors.json");
}

function addDoctor({ name, specialty, phone }) {
  if (!name || !specialty || !phone) {
    throw new Error("INVALID_DATA");
  }

  const doctors = readData("doctors.json");

  const newDoctor = {
    id: doctors.length + 1,
    name,
    specialty,
    phone,
  };

  doctors.push(newDoctor);
  writeData("doctors.json", doctors);

  return newDoctor;
}

module.exports = {
  getAllDoctors,
  addDoctor,
};
