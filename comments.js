//Create Web Server
const express = require('express');
const app = express();
const port = 3000;

//Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Create a route
app.get('/comments', (req, res) => {
  res.send('This is a page with comments');
});

//Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Run the server: node comments.js
//Open a browser and go to http://localhost:3000/commentsgit a