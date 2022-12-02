const joi = require("joi");

const schema = joi.object({
  showId: joi.string().messages({
    "string.empty": "Show ID is required",
    "any.required": "Show ID is required",
  }),
  itineraryId: joi.string().messages({
    "string.base": `Event Id must be a type of 'text'`,
    "any.required": "The Event Id field is required",
    "string.empty": "The itinerary ID field is empty",
  }),
  userId: joi.string().required().messages({
    "string.empty": "User ID is required",
    "any.required": "User ID is required",
  }),
  date: joi.date().required().messages({
    "any.required": "The field 'Date' is required, please enter it",
    "date.base": "The field 'Date' must be a date",
    "date.empty": "The field 'Date' is required, please enter it",
  }),
  comment: joi.string().required().min(3).messages({
    "string.base": "Please enter words",
    "any.required": "comment is required, please enter it",
    "string.empty": "You did not enter anything in the comment field",
    "string.min": "Min requires 3 letters to create this comment",
  }),
});

module.exports = schema;
