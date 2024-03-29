//gör att .env fil kan användas
require('dotenv').config()


const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors'); // Lägg till cors-paketet
const mongoose = require('mongoose')
const path = require('path'); // Lägg till detta för att använda path-modulen
const bcrypt = require('bcrypt')

//koppling till databas
// Koppla upp mot databasen
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.on('open', () => console.log('connected to Database'))
app.use("/images", express.static('images'))
app.use(express.json())
app.use(cors()); // Aktivera cors för alla vägar



const filmsRouter = require('./routes/films')
app.use('/films', filmsRouter)

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(3000, () => console.log("Server startad"))