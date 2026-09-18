const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const patient = require("./routes/patient");
const appointment = require("./routes/appointment");

// ✅ ROOT ROUTE (error fix)
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// ---------------- PATIENT ----------------

// Add Patient
app.post("/api/patients/add", patient.addPatient);

// Get Patients
app.get("/api/patients", patient.getPatients);

// Delete Patient
app.delete("/api/patients/:id", patient.deletePatient);


// ---------------- APPOINTMENT ----------------

// Add Appointment
app.post("/api/appointments/add", appointment.addAppointment);

// Get Appointments
app.get("/api/appointments", appointment.getAppointments);

// Delete Appointment
app.delete("/api/appointments/:id", appointment.deleteAppointment);


// ---------------- START SERVER ----------------

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});