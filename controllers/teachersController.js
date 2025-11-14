const Teacher = require('../models/teacher');

exports.getAll = async (req, res, next) => {
  try {
    const teachers = await Teacher.find().sort({ createdAt: -1 });
    res.json(teachers);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const t = await Teacher.findById(req.params.id);
    if (!t) return res.status(404).json({ message: 'Teacher not found' });
    res.json(t);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const teacher = new Teacher(req.body);
    const saved = await teacher.save();
    res.status(201).json(saved);
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ message: 'Email must be unique' });
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const updated = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Teacher not found' });
    res.json(updated);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const deleted = await Teacher.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Teacher not found' });
    res.json({ message: 'Teacher deleted' });
  } catch (err) { next(err); }
};
