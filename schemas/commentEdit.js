const joi = require("joi");

const schema = joi.object({
  comment: joi.string().required().min(3).messages({
    "string.base": "Please enter words",
    "any.required": "Comment is required, please enter it",
    "string.empty": "You did not enter anything in the comment field",
    "string.min": "Min requires 3 letters to update this comment",
  }),
})

module.exports = schema
