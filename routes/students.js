const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');
const { createStudentSchema, updateStudentSchema } = require('../validation/studentsValidation');

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student management
 */

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: list of students
 */
router.get('/', studentsController.getAll);

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Student found
 *       404:
 *         description: Not found
 */
router.get('/:id', studentsController.getById);

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Create new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [firstName,lastName,email,age,gender,level]
 */
router.post('/', (req, res, next) => {
  const { error } = createStudentSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  studentsController.create(req, res, next);
});

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Update a student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 */
router.put('/:id', (req, res, next) => {
  const { error } = updateStudentSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  studentsController.update(req, res, next);
});

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Delete a student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete('/:id', studentsController.remove);

module.exports = router;
