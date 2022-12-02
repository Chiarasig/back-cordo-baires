const joi = require("joi")

const schema = joi.object({
    itineraryId: joi
        .string()
        .required()
        .messages({
            "any.required": "This field is required, please enter it",
            "string.base": "Please enter words",
            "string.empty": "You did not enter anything in the itineraryId field",
        }),
    name: joi
        .string()
        .required()
        .messages({
            "any.required": "This field is required, please enter it",
            "string.base": "Please enter words",
            "string.empty": "You did not enter anything in the name field",
        }),
    icon: joi
        .string()
        .required()
        .uri()
        .messages({
            "any.required": "This field is required, please enter it",
            "string.empty": "You did not enter anything in the icon field",
        }),
    iconBack: joi
        .string()
        .required()
        .uri()
        .messages({
            "any.required": "This field is required, please enter it",
            "string.empty": "You did not enter anything in the iconBack field",
        }),
    userId: joi
        .array()

})

module.exports = schema