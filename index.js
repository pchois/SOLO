// initialize express
const express = require('express');
const app = express();

app.use(express.static("App"));

app.get('/', function (req, res) {
    res.redirect('/');
});

app.listen(8080, 'localhost');
console.log("Solo-web Server is Listening on port 8080");
