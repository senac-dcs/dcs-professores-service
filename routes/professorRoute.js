const routers = require('express').Router();
const professorController = require('../controllers/professorController');

routers.route('/professores')
    .get(professorController.getAll)
    .post(professorController.add);

routers.route('/professores/:id')
    .get(professorController.getById)
    .put(professorController.update)
    .delete(professorController.delete);

module.exports = routers; 