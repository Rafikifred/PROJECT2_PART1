const express = require('express');
const router = express.Router();
const teachersController = require('../controllers/teachersController');
const { createTeacherSchema, updateTeacherSchema } = require('../validation/teachersValidation');

/**
 * @swagger
 * tags:
 *   name: Teachers
 *   description: Teacher management
 */

/**
 * @swagger
 * /teachers:
 *   get:
 *     summary: Get all teachers
 *     tags: [Teachers]
 *     responses:
 *       200:
 *         description: list of teachers
 */
router.get('/', teachersController.getAll);

/**
 * @swagger
 * /teachers/{id}:
 *   get:
 *     summary: Get teacher by ID
 *     tags: [Teachers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Teacher found
 *       404:
 *         description: Not found
 */
router.get('/:id', teachersController.getById);

/**
 * @swagger
 * /teachers:
 *   post:
 *     summary: Create a teacher
 *     tags: [Teachers]
 *     requestBody:
 *       required: true
 */
router.post('/', (req, res, next) => {
  const { error } = createTeacherSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  teachersController.create(req, res, next);
});

/**
 * @swagger
 * /teachers/{id}:
 *   put:
 *     summary: Update a teacher
 *     tags: [Teachers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 */
router.put('/:id', (req, res, next) => {
  const { error } = updateTeacherSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  teachersController.update(req, res, next);
});

/**
 * @swagger
 * /teachers/{id}:
 *   delete:
 *     summary: Delete a teacher
 *     tags: [Teachers]
 */
router.delete('/:id', teachersController.remove);

module.exports = router;
