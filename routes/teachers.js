const express = require('express');
const router = express.Router();
const teachersController = require('../controllers/teachersController');
const { createTeacherSchema, updateTeacherSchema } = require('../validation/teachersValidation');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Teachers
 *   description: Teacher management
 */

// GET all teachers (public)
router.get('/', teachersController.getAll);

// GET teacher by ID (public)
router.get('/:id', teachersController.getById);

// POST create teacher (protected)
router.post('/', authMiddleware, (req, res, next) => {
  const { error } = createTeacherSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  teachersController.create(req, res, next);
});

// PUT update teacher (protected)
router.put('/:id', authMiddleware, (req, res, next) => {
  const { error } = updateTeacherSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  teachersController.update(req, res, next);
});

// DELETE teacher (protected)
router.delete('/:id', authMiddleware, teachersController.remove);

module.exports = router;
