// main application file

// imports
const express = require('express');

// instantiating application
const app = express();

// define routes
app.get('/', (request, response) => {
    return response.json({
        event: 'omnistack-week-11',
        student: 'fscatano'
    });
})

// set listening port
app.listen(3333);
