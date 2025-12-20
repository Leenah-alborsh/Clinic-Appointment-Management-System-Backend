const express = require("express");
const app = express();

app.use(express.json());

// Routes
const patientsRoutes = require("./routes/patients.routes");
const doctorsRoutes = require("./routes/doctors.routes");
const appointmentsRoutes = require("./routes/appointments.routes");

app.use("/patients", patientsRoutes);
app.use("/doctors", doctorsRoutes);
app.use("/appointments", appointmentsRoutes);

app.get("/", (req, res) => {
  res.send("Clinic Appointment API is running 🩺");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
