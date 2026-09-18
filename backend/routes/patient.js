let patients = [];

// ADD
exports.addPatient = (req, res) => {
    const { name, age, disease } = req.body;
    const id = Date.now();

    patients.push({ id, name, age, disease });
    res.json({ message: "Patient added" });
};

// GET
exports.getPatients = (req, res) => {
    res.json(patients);
};

// DELETE
exports.deletePatient = (req, res) => {
    const id = parseInt(req.params.id);
    patients = patients.filter(p => p.id !== id);
    res.json({ message: "Patient deleted" });
};