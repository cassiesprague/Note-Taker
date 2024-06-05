//Used the following videos and class activities to help with this project
//https://www.youtube.com/watch?v=-UiqzvUe360
//Class activity 11-Express 02-Stu_Setup
//07-Ins_GET-Fetch
//15-Ins_Body-Parsing


const express = require('express');
const html_routes = require('./routes/html-routes');
const api_routes = require('./routes/api-routes');
const PORT = process.env.PORT || 3001:
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes)
app.use(api_routes)

app.listen(PORT, () => {
    console.log(`Express szerver listening on port ${PORT}`)
})