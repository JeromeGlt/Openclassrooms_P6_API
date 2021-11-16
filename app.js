const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')

const sauceRoutes = require('./routes/sauces')
const userRoutes = require('./routes/user')
const likeRoutes = require('./routes/likes')

mongoose.connect('mongodb+srv://jeromegallot:gallot@cluster0.wd2vi.mongodb.net/Cluster0?retryWrites=true&w=majority',
    {useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))

const app = express()

app.use(cors())

app.use(express.json())

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/api/sauces', sauceRoutes)
app.use('/api/auth', userRoutes)
app.use('/api/sauces', likeRoutes)

app.use(helmet())

module.exports = app