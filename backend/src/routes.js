const express = require('express');
const NgosController = require('./controllers/NgosController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// define routes
routes.get('/', (request, response) => {

    //console.log(request)
    console.log(request.query);

    return response.json({
        event: 'omnistack-week-11',
        student: 'fscaetano'
    });
});

routes.post('/session', SessionController.create);

routes.get('/ngos', NgosController.index);
routes.post('/ngos', NgosController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents', IncidentsController.delete);

module.exports = routes;