const Joi = require('joi');

const createStudentSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName:  Joi.string().required(),
  email:     Joi.string().email().required(),
  age:       Joi.number().integer().min(1).required(),
  gender:    Joi.string().valid('Male','Female').required(),
  level:     Joi.string().required(),
  phone:     Joi.string().allow('', null),
  address:   Joi.string().allow('', null)
});

const updateStudentSchema = Joi.object({
  firstName: Joi.string(),
  lastName:  Joi.string(),
  email:     Joi.string().email(),
  age:       Joi.number().integer().min(1),
  gender:    Joi.string().valid('Male','Female'),
  level:     Joi.string(),
  phone:     Joi.string().allow('', null),
  address:   Joi.string().allow('', null)
}).min(1);

module.exports = { createStudentSchema, updateStudentSchema };
