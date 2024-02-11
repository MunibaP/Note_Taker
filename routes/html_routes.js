// Required parameter to create new route object
const router = require('express').Router;
const path = require('path');

// Route to serve the index.html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// Route to serve the send notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html' ))
});

//Export Module
module.exports = router;