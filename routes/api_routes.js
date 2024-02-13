// Function to create a new route object
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// Defining GET request to the routes
router.get('/api/notes', async(req, res) => {
    const db_json = await JSON.parse(fs.readFileSync('db/db.json', 'utf8' ));
    res.json(db_json);
});

// Defining POST request to the routes
router.post('/api/notes', (req, res) => {
    const db_json = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    db_json.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db_json));
    res.json(db_json);
});

// Defining DELETE request to the routes
router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync('db/db.json', 'utf8');
    const dataJson = JSON.parse(data);
    const newNotes = dataJson.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSync('db/db.json', JSON.stringify(newNotes));
    res.json('Note is successfully deleted');
});

// Export Module
module.exports = router;