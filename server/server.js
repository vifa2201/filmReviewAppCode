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
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.on('open', () => console.log('connected to Database'))
app.use("/images", express.static('images'))
app.use(express.json())
app.use(cors()); // Aktivera cors för alla vägar



const filmsRouter = require('./routes/films')
app.use('/films', filmsRouter)


const users = []

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = { name: req.body.name, password: hashedPassword }
    users.push(user)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
})
 
app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if (user == null) {
      return res.status(400).send('Cannot find user')
    }
    try {
        //kollar om lösenordet är samma som försöker logga in
      if(await bcrypt.compare(req.body.password, user.password)) {
        res.send('Success')
      } else {
        res.send('Not Allowed')
      }
    } catch {
      res.status(500).send()
    }
  })
  

app.listen(3000, () => console.log("Server startad"))