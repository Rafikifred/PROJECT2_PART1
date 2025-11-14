const Joi = require('joi');

const createTeacherSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName:  Joi.string().required(),
  email:     Joi.string().email().required(),
  department:Joi.string().allow('', null),
  hireDate:  Joi.date().iso().allow(null),
  phone:     Joi.string().allow('', null),
  office:    Joi.string().allow('', null)
});

const updateTeacherSchema = Joi.object({
  firstName: Joi.string(),
  lastName:  Joi.string(),
  email:     Joi.string().email(),
  department:Joi.string().allow('', null),
  hireDate:  Joi.date().iso().allow(null),
  phone:     Joi.string().allow('', null),
  office:    Joi.string().allow('', null)
}).min(1);

module.exports = { createTeacherSchema, updateTeacherSchema };
