const joi = require('joi')

const schema = joi.object({
    nombre: joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            'any.required': 'NAME_REQUIRED',
            'string.empty': 'NAME_REQUIRED',
            'string.min': 'NAME_TOO_SHORT',
            'string.max': 'NAME_TOO_LARGE',
        }),
    edad: joi.number()
        .required()
        .min(18)
        .messages({
            'any.required': 'AGE_REQUIRED',
            'number.base': 'AGE_REQUIRED',
            'number.min': 'INVALID_AGE',
        }),
    nacimiento: joi.date()
        .required()
        .messages({
            'any.required': 'DATE_REQUIRED',
            'date.base': 'DATE_REQUIRED'
        }),
    foto: joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'IMG_REQUIRED',
            'string.empty': 'IMG_REQUIRED',
            'string.uri':'INVALID_URL'
        }),
    mail: joi.string()
        .required()
        .email({minDomainSegments: 2})
        .messages({
            'any.required': 'MAIL_REQUIRED',
            'string.empty': 'MAIL_REQUIRED',
            'string.email': 'INVALID_MAIL'
        }),
    contraseña: joi.string().required(),
    comidas: joi.any(),
    hobbies: joi.any(),
    disponible: joi.any()
})

module.exports = schema