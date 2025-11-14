const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName:  { type: String, required: true, trim: true },
  email:     { type: String, required: true, unique: true, lowercase: true },
  age:       { type: Number, required: true },
  gender:    { type: String, enum: ['Male','Female','Other'], default: 'Other' },
  level:     { type: String, required: true }, // e.g., "Undergraduate", "High School"
  phone:     { type: String },
  address:   { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
