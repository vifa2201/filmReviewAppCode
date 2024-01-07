const express = require('express')
const app = express();
// Import the authentication middleware

//paket för bilduppladdning
const multer = require('multer')
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },

    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})
const router = express.Router()
const Film = require('../models/films')
module.exports = router


// hämta alla filmer
router.get('/', async (req, res) => {
try{
 const films = await Film.find()
 res.json(films)
}
catch (error){
    res.status(500).json({message: err.message})
}
})

//hämta en film
router.get('/:id', getFilm, (req, res) => {
    res.send(res.film)
})

//Skapa film
router.post('/', upload.single('coverImage'), async (req, res) => {
    try {
        // Kontrollera om en fil har skickats med förfrågan
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        // Skapa en ny film med den skickade filen
        const film = new Film({
            title: req.body.title,
            description: req.body.description,
            coverImage: req.file.path,
            year: req.body.year,
            genre: req.body.genre,
            reviews: req.body.reviews
        });
        // Spara filmen i databasen
        const savedFilm = await film.save();
        // Returnera den sparade filmen som JSON
        res.json(savedFilm);
    } catch (error) {

        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//uppdatera film
router.patch('/:id', getFilm, async (req, res) => {
    //kollar om den requestade kursen är null
    if (req.body.title != null) {
        res.film.title = req.body.title;
    }
    if (req.body.description != null) {
        res.film.description = req.body.description;
    }
    if (req.body.coverImage != null) {
        res.film.coverImage= req.body.coverImage;
    }
    if (req.body.year != null) {
        res.film.year = req.body.year;
    }
    if (req.body.genre != null) {
        res.film.genre = req.body.genre;
    }
    if (req.body.reviews != null) {
        res.film.reviews = req.body.reviews;
    }
    try {
        const updatedFilm = await res.film.save();
        res.json(updatedFilm);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//ta bort film
router.delete('/:id', getFilm, async (req, res) => {
    try{
      await res.film.deleteOne()
      res.json({message: 'film raderad' })
    }catch(err){
      res.status(500).json({ message: err.message})
    }
  })
  
// hämtar alla filmer
async function getFilm(req, res, next){
    let film
    try{
        film= await Film.findById(req.params.id)
        if(film == null){
            return res.status(404).json({ message: 'Hittar inte filmen'})
        }
    }catch(err){
        return res.status(500).json({ message: err.message })
    }

    res.film = film
    next()
}