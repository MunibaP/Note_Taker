// Function to create a new router object
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const db = require('../db/db.json');

// Node.js fs-module
const fs = require('fs');

// Define the GET request to the routes end point '/api/notes'
router.get('/api/notes', (req, res) => {
    readFromFile('../db/db.json')
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => res.status(500).json({error: 'Failed to retrieve information from the server'}));
});

// Define the POST request to the routes end point '/api/notes'
router.post('/api/notes', (req, res) => {
    const newNote = req.body;
    readFromFile('../db/db.json')
    .then((data) => {
        const notes = JSON.parse();
        newNote.id = uuid.v4();
        notes.push(newNote);
        return writeToFile('../db/db.json', JSON.stringify(notes, null, 2));
    })
    .then(() => res.json(newNote))
    .catch((err) => res.status(500).json({ error: 'Internal server error: Failed to create note.' }));
});

// Define the delete request to the routes end point
router.delete('/api/notes', (req, res) => {
    const idToDelete = req.params.id;
    readFromFile('../db/db.json')
    .then((data) => {
        const notes = JSON.parse(data);
        notes = notes.filter(note => note.id !== parseInt(idToDelete));
        return writeToFile('../db/db.json', JSON.stringify(notes, null, 2));
    })
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).json({ error: 'Internal server error: Failed to delete the note.' }));
});


module.exports = router;