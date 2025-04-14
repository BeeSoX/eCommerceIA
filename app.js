const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const routes = require('./routes/index');
// Définir EJS comme moteur de template
app.set('view engine', 'ejs');

// Définir le dossier des vues
app.set('views', __dirname + '/views');
app.use('/', routes);

app.listen(port, () => {
    console.log('Serveur lancé sur le port 3000');
});

// Connexion à MongoDB
// mongoose.connect('mongodb://mongo:27017/ma-db', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log('Connecté à MongoDB'))
//     .catch(err => console.error('Erreur MongoDB', err));

