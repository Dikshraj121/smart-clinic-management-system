let appointments = [];

// ADD
exports.addAppointment = (req, res) => {
    const { name, date, time, ampm } = req.body;
    const id = Date.now();

    appointments.push({ id, name, date, time, ampm });
    res.json({ message: "Appointment booked" });
};

// GET
exports.getAppointments = (req, res) => {
    res.json(appointments);
};

// DELETE
exports.deleteAppointment = (req, res) => {
    const id = parseInt(req.params.id);
    appointments = appointments.filter(a => a.id !== id);
    res.json({ message: "Appointment deleted" });
};