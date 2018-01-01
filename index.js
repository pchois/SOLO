// initialize express
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// configure the PORT
app.listen((process.env.PORT || 5000), () => {
  console.log(`Node app is listening`);
});
