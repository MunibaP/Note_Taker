// Defining parameters to create new route object
const router = require('express').Router();
const path = require('path');

// GET request to index.html
router.get('/', (Req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// GET request to notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Export module
module.exports = router;