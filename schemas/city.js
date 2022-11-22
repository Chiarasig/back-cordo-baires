const Joi = require("joi")

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(3)
        .max(30)
        .messages({
            "string.base": "Please enter words",
            "any.required": "This field is required, please enter it",
            "string.empty": "You did not enter anything in the name field",
            "string.min": "min require 3 letters",
            "string.max": "max require 30 letters"
        }),
    continent: Joi
        .string()
        .required()
        .min(3)
        .max(30)
        .messages({
            "string.base": "Please enter words",
            "any.required": "This field is required, please enter it",
            "string.empty": "You did not enter anything in the continent field",
            "string.min": "min require 3 letters",
            "string.max": "max require 30 letters"
        }),
    photo: Joi
        .string()
        .required()
        .uri()
        .messages({
            "any.required": "complete this input, please",
            "string.empty": "You did not enter anything in the photo field",
        }),
    population: Joi
        .number()
        .required()
        .messages({
            "number.base": "Please enter numbers",
            "number.empty": "Enter the number of the population please",
        }),
    userId: Joi
    .string()
    .required()
    .messages({
        "any.required": "This field is required, please enter it",
        "string.base": "Please enter words",
        "string.empty": "You did not enter anything in the photo field",
    })
})

module.exports = schema