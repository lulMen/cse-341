const routes = require('express').Router();
const lesson01Controller = require('../controllers/lesson01');

routes.get('/', lesson01Controller.helloRoute);
routes.get('/secret', lesson01Controller.secretRoute);

module.exports = routes;