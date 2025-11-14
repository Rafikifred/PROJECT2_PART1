const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName:  { type: String, required: true, trim: true },
  email:     { type: String, required: true, unique: true, lowercase: true },
  department:{ type: String },
  hireDate:  { type: Date },
  phone:     { type: String },
  office:    { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema);
