// Require Express
const express = require('express');
const app = express();

// PORT:3001
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// API routes
const api_routes = require('./routes/api_routes');
app.use('/api', api_routes);

// HTML routes
const html_routes = require('./routes/html_routes');
app.use('/', html_routes);

//App Listener through localhost//
app.listen(PORT,() => {
    console.log(`Welcome! Server is running on http://localhost:${PORT}`);
});

