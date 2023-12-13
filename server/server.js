//gör att .env fil kan användas
require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors'); // Lägg till cors-paketet
const mongoose = require('mongoose')

//koppling till databas
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.on('open', () => console.log('connected to Database'))

app.use(express.json())
app.use(cors()); // Aktivera cors för alla vägar

const filmsRouter = require('./routes/films')
app.use('/films', filmsRouter)

app.listen(3000, () => console.log("Server startad"))