const Student = require('../models/student');

exports.getAll = async (req, res, next) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const s = await Student.findById(req.params.id);
    if (!s) return res.status(404).json({ message: 'Student not found' });
    res.json(s);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const student = new Student(req.body);
    const saved = await student.save();
    res.status(201).json(saved);
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ message: 'Email must be unique' });
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Student not found' });
    res.json(updated);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted' });
  } catch (err) { next(err); }
};
