const express = require('express');                                     // import express library
const app = express();

const port = 3000;                                                      // on 3000 port server will listen

// Middleware function to log details of each request
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();                                                              // It passes control to the next handler
});

// Defining route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Define a route for the about page
app.get('/about', (req, res) => {
  res.send('Welcome to the About Page!');
});

// Define a route for the contact page
app.get('/contact', (req, res) => {
  res.send('Welcome to the Contact Page!');
});                                                                   // Similarly can create many-more route for different pages


// Start the server and listen on the specified port which is 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



/**
    Steps how we solved this task : 
        Initialize a Node.js project
        Install Express.js
        Create the server
        Implement routes and middleware
 */