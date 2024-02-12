// Require Express
const express = require('express');

// Require Routes
const apiRoutes = require('./routes/api_routes');
const htmlRoutes = require('./routes/html_routes');

// PORT: 3001
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// API routes
app.use(apiRoutes);
app.use(htmlRoutes);

// App listener through localhost
app.listen(PORT, () => {
    console.log(`Welcome! Server is running on http://localhost:${PORT}`);
});

