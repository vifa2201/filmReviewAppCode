const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true, 
        unique: true
    }, 
    password: {
        type: String, 
        required: true
    }
});

// Skapa en modell och anslut den till databasen
const User = mongoose.model("User", usersSchema);

module.exports = User;