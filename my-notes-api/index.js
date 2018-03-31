
const express = require('express');
const bodyParser = require('body-parser');

// MongoDB client
const mongodb = require('mongodb');
const mongoose = require('mongoose');

// Models
const Note = require('./model/note');

const ObjectID = mongodb.ObjectID;
const dbClient = mongodb.MongoClient;

const app = express();


app.use(bodyParser.urlencoded({extended: true}));

/**
 * Prepare la connexion à la BD
 */
function prepareDatabase(callback) {
    mongoose.connect('mongodb://localhost:27017/myNotes');
    mongoose.connection.on('error', err => {
        console.log('erreur de connexion', err);
        process.exit(-1);
    });

    mongoose.connection.on('open', () => {
        console.log('Connexion mongoose reussie');
        callback();
    });
}


/**
 * Démarre l'API
 */
function startApplication() {
    // API de création d'une note
    
    app.post('/api/notes', function(request, response) {
        console.log('Tu tentes de créer une note', request.body);
        Note.create(request.body, (err, note) => {
            if(err) {
                console.log('Problème d insertion', err);
                response.status(500).send({'message': 'Problème d insertion'});
            }else {
                response.status(200).send(note);
            }
        });
    });

    // Get all notes
    app.get('/api/notes', function(request, response) {
        Note.find({title: "Mon nouvel objet"}, '-title', (err, results) => {
            if(err) {
                console.log('Problème d listing', err);
                response.status(500).send({'message': 'Problème d liste'});
            }else {
                response.status(200).send(results);
            }
        });
    });

    app.put('/api/notes/:id', function(req, res) {
        console.log('Tu tentes de modifier la note ' + req.params.id, req.body);
        
        Note.findByIdAndUpdate(
            {_id: new ObjectID(req.params.id)}, 
            req.body, 
            function(err,result){
                if (err){
                    console.log('Probleme de mise à jour',err);
                    res.status(500).send({'message': 'Problème lors de la modification'});
                } else{
                    res.status(200).send(result);
                }
        });
    });


    app.listen(8000, function(){
        console.log('Serveur express bien demarré');
    });
}

prepareDatabase(startApplication);