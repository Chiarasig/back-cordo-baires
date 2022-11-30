const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(3).max(50).messages({
    "string.base": "Please enter words",
    "any.required": "Name is required, please enter it",
    "string.empty": "You did not enter anything in the name field",
    "string.min": "min require 3 letters",
    "string.max": "max require 50 letters",
  }),
  lastName: joi.string().required().min(3).max(50).messages({
    "string.base": "Please enter words",
    "any.required": "Last name is required, please enter it",
    "string.empty": "You did not enter anything in the name field",
    "string.min": "min require 3 letters",
    "string.max": "max require 50 letters",
  }),
  role: joi.string().required().valid('user', 'admin').messages({
    "string.base": "Please enter words",
    "any.required": "Role is required, please enter it",
    "string.empty": "You did not enter anything in the name field",
  }),
  photo: joi.string().required().uri().messages({
    "any.required": "complete this input, please",
    "string.empty": "You did not enter anything in the photo field",
    "string.uri": "The field 'URL photo' must be an url",
  }),
  age: joi.number().required().min(18).messages({
    "number.empty": "enter the number of the capacity please",
        "number.base": "enter the number of the capacity please",
        'number.min': "You must to be older than 18 years old"
  }),
  mail: joi.string().required().email({ minDomainSegments: 2 }).messages({
    'any.required': 'Enter your email, please',
            'string.empty': 'Enter your email, please',
            'string.email': 'Email invalid'
  }),
  password: joi.string().required().messages({
    'any.required': 'Enter your password, please',
    'string.empty': 'Enter your password, please',
}),
});

module.exports = schema;
