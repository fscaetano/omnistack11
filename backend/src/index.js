// main application file

// imports
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// instantiating application
const app = express();

// cross origin
app.use(cors());
// app.use(cors({origin: "http://"})); // TODO: for production, configure the allowed origin

// allow jason request/responses
app.use(express.json());

// define routes
app.use(routes)

// set listening port
app.listen(3333);
