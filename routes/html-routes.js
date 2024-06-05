const router = require('express').Router();
const path = require('path');

//When a user accesses the root URL of the application, this route handler responds by sending the "index.html" file from the "public" directory to the client's browser, effectively rendering the main page of the web application.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//When a user accesses the "/notes" endpoint of the application, this route handler responds by sending the "notes.html" file from the "public" directory to the client's browser, effectively rendering the notes page of the web application.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;