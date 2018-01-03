// initialize express
const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.redirect('/');
});

// configure the PORT
app.listen((process.env.PORT || 8080), () => {
  console.log(`Solo-web Server is Listening`);
});
