const express = require('express');

const routes = express.Router();

//ONGS
const ongController = require('./controllers/OngController');
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

//INCIDENTS
const incidentController = require('./controllers/IncidentController');
routes.get('/incidents', incidentController.index );
routes.get('/incidents/:ong_id', incidentController.show );
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

//SESSIONS
const sessionController = require('./controllers/SessionController');
routes.post('/sessions', sessionController.create)

module.exports = routes;