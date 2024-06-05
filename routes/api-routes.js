//21-Ins_Modular-Routing Modularized

const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

//This route handler reads the contents of a JSON file representing notes from a database and sends it as a JSON response to clients who make GET requests to "/api/notes".
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    res.json(dbJson);
});

//This route handler is responsible for adding new notes or feedback to the database file when a POST request is made to "/api/notes".
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);
});

module.exports = router; 