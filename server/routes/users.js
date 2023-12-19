const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcrypt');

router.post("/register", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Kontrollera om användaren redan finns
        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hasha lösenordet med bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Skapa en ny användare med det hashade lösenordet
        const user = new User({
            email: email,
            password: hashedPassword
        });

        // Spara användaren i databasen
        const savedUser = await user.save();

        // Returnera den sparade användaren som JSON
        res.json(savedUser);
    } catch (error) {
        // Om något går fel, returnera ett felmeddelande
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Hitta användaren baserat på e-postadress
        const user = await User.findOne({ email: email });

        if (!user) {
            // Användaren finns inte
            return res.status(404).json({ error: 'User not found' });
        }

        // Jämför lösenordet med det hashade lösenordet i databasen
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Lösenorden matchar, användaren är inloggad
            res.json({ message: 'Login successful' });
        } else {
            // Lösenorden matchar inte
            res.status(401).json({ error: 'Invalid password' });
        }
    } catch (error) {
        // Om något går fel, returnera ett felmeddelande
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;