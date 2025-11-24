const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
const studentsController = require('../controllers/studentsController');
const { createStudentSchema, updateStudentSchema } = require('../validation/studentsValidation');

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student management
 */

// GET all students (public)
router.get('/', studentsController.getAll);

// GET student by ID (public)
router.get('/:id', studentsController.getById);

// POST create student (protected)
router.post('/', authMiddleware, (req, res, next) => {
  const { error } = createStudentSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  studentsController.create(req, res, next);
});

// PUT update student (protected)
router.put('/:id', authMiddleware, (req, res, next) => {
  const { error } = updateStudentSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  studentsController.update(req, res, next);
});

// DELETE student (protected)
router.delete('/:id', authMiddleware, studentsController.remove);

module.exports = router;
