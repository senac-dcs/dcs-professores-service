const routers = require('express').Router();
const professorController = require('../controllers/professorController');


/**
 * @swagger
 * /professores:
 *   get:
 *     tags:
 *       - Professores
 *     description: Returns all Teachers
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of teachers
 *     500:
 *      description: Internal Server Error
 */
routers.route('/professores')
    .get(professorController.getAll);


/**
 * @swagger
 * /professores:
 *   post:
 *     tags:
 *       - Professores
 *     description: Creates a new teacher
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: professores
 *         description: Teacher object
 *         in: body
 *         required: true
 *     responses:
 *       201:
 *         description: Successfully created
 *     500:
 *      description: Erro, failed to add teacher
 */
routers.route('/professores').post(professorController.add);


/**
 * @swagger
 * /professores/{id}:
 *   put:
 *     tags:
 *       - Professores
 *     description: Updates a teacher
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Teacher's id
 *         in: path
 *         required: true
 *         type: string
 *       - name: professores
 *         description: Teacher object
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully updated
 *     404:
 *      description: Teacher not found
 *     500:
 *      description: Failed to update teacher  
 */
routers.put('/professores/:id',professorController.update);


    /**
 * @swagger
 * /professores/{id}:
 *   get:
 *     tags:
 *       - Professores
 *     description: Returns a single teacher
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Teacher's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Teacher find
 *     404:
 *      description: Teacher not found
 */
routers.get('/professores/:id',professorController.getById);


/**
 * @swagger
 * /professores/{id}:
 *   delete:
 *     tags:
 *       - Professores
 *     description: Deletes a single teacher
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: teacher's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Successfully deleted
 */
routers.delete('/professores/:id',professorController.delete);

module.exports = routers; 