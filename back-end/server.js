var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
var mongoose = require('mongoose');
var auth = require('./controllers/auth');
var annotation = require('./controllers/picoAnnotated');
var cors = require('cors');
var checkAuthenticated = require('./services/checkAuthenticated');

var fs = require('fs');
app.use(bodyParser.json());

//Middleware
app.use(cors());

// les requêtes
// Trouver tous les enregistrements d'annotation et les envoyer vers l'api
app.get('/api/annotation', annotation.get);

// On envoie les phrases ou mots clefs annotés à partir du formulaire d'annotation vers l'api
app.post('/api/annotation', checkAuthenticated, annotation.post);

// Gestion de l'enregistrement des utilisateurs
app.post('/auth/register', auth.register);

//Gestion de login utilisateur
app.post('/auth/login', auth.login);



// Connection à Mongoose
mongoose.connect("mongodb://localhost:27017/picoAnnotation", function (err, db) {
    if (!err) {
        console.log("Connected to mongo!");


    }

})


var server = app.listen(5005, function () {

    console.log('Server listening on port ', server.address().port);
});

//module.exports = app;