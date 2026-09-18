const express = require("express");
const router = express.Router();

// Dummy user storage (temporary)
let users = [];

// Register
router.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    users.push({ name, email, password });

    res.json({ message: "User registered successfully" });
});

// Login
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

module.exports = router;