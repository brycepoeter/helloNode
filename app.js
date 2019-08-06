const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const Trip = require('./classes')

app.use(express.urlencoded())
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine','mustache')

let trip1 = new Trip("Rabat", "https://media.gettyimages.com/photos/morocco-rabat-kasbah-of-the-udayas-at-dusk-picture-id133982985?s=2048x2048", 
"August 5", "August 18")
let trips = []
trips.push(trip1)
console.log(trips)

app.get('/add-trip', (req,res) => {
    res.render('add-trip')
})

app.post('/delete-trip', (req, res) => {
    let tripName = req.body.tripName
    trips = trips.filter(trip => {
       return trip.destination != tripName
    })
    res.redirect('/confirm')
})

app.get('/current-trips', (req,res) => {
    res.render('current-trips', {trips: trips})
})

app.post('/add-trip', (req,res) => {
    let destination = req.body.destination
    let imageUrl = req.body.imageUrl
    let departureDate = req.body.departureDate
    let returnDate = req.body.returnDate
    let trip = new Trip(destination, imageUrl, departureDate, returnDate)
    trips.push(trip)
    console.log(trips)
    res.redirect('/confirm')
})

app.get('/confirm', (req,res) => {
    res.render('confirm')
})

app.get('/', (req,res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log("Server running...")
})