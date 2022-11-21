const joi = require('joi')

const schema = joi.object({
    name: joi
        .string()
        .required()
        .min(3)
        .max(50)
        .messages({
            "string.base": "Please enter words",
            "any.required": "This field is required, please enter it",
            "string.empty": "You did not enter anything in the name field",
            "string.min": "min require 3 letters",
            "string.max": "max require 50 letters"
        }),
    photo: joi
        .array()
        .min(3)
        .items(joi.string().required().uri()
        .messages({
        "any.required": "complete this input, please",
        "string.empty": "complete the URL photo, please",
      })),
      capacity: joi
        .number()
        .required()
        .min(500)
        .messages({
        "number.empty": "enter the number of the capacity please",
        "number.base": "enter the number of the capacity please",
        }),
    cityId: joi
        .string()
        .required()
        .messages({
            "any.required": "This field is required, please enter it",
            "string.base": "Please enter words",
            "string.empty": "You did not enter anything in the cityId field",
        }),
    userId:  joi
        .string()
        .required()
        .messages({
            "any.required": "This field is required, please enter it",
            "string.base": "Please enter words",
            "string.empty": "You did not enter anything in the photo field",
        })
})

module.exports = schema