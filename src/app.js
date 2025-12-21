const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
const patientsRoutes = require("./routes/patients.routes");
const doctorsRoutes = require("./routes/doctors.routes");
const appointmentsRoutes = require("./routes/appointments.routes");

app.use("/patients", patientsRoutes);
app.use("/doctors", doctorsRoutes);
app.use("/appointments", appointmentsRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.status(200).send("Clinic Appointment API is running 🩺");
});

// Health check endpoint (Bonus D)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
