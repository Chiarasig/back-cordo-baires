const User = require('../models/User')
const bcryptjs = require('bcryptjs') //de esta libreria vamos a utilizar el método hashSync para encriptar la contraseña
const crypto = require('crypto')//de este modulo vamos a requerir el método randomBytes
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse } = require('../config/responses')

const controller = {

    register: async(req,res,next) => {
        //método para que un usuario se registre
        //luego de pasar por todas las validaciones:
            //desestructura el cuerpo
            let {name, lastName, role, photo, age, email, password} = req.body
            //define las propiedades "extras" que necesite (online, codigo y verificado)
            let verified = false
            let logged = false
            let code = crypto.randomBytes(10).toString('hex')
            //encripto o hasheo la contraseña
            password = bcryptjs.hashSync(password,10)
            console.log(contraseña)     
        try {
            //crea el usuario
            await User.create({ name, lastName, role, photo, age, email, password,verified,logged,code })
            //envía mail de verificación (con transportador)
            await accountVerificationEmail(email,code)
            return userSignedUpResponse(req,res)
        } catch(error) {
            next(error)
        }
    },

    verificar: async(req,res,next) => {
        //método para que un usuario verifique su cuenta
        //requiere por params el código a verificar
        //busca un usuario que coincida el código
        //y cambia verificado de false a true
            //si tiene éxito debe redirigir a alguna página (home, welcome, login)
            //si no tiene éxito debe responder con el error
        try {

        } catch(error) {
            next(error)
        }
    },

    ingresar: async(req,res,next) => {
        //método para que un usuario inicie sesión
        //luego de pasar por todas las validaciones:
            //desestructura la contraseña y el objeto user que vienen en el req
            //compara las contraseñas
                //si tiene éxito debe generar y retornar un token y debe redirigir a alguna página (home, welcome)
                    //además debe cambiar online de false a true
                //si no tiene éxito debe responder con el error
        try {

        } catch(error) {
            next(error)
        }
    },

    ingresarConToken: async(req,res,next) => {
        //método para que un usuario que ya inicio sesión no la pierda al recargar
        //solo para usuarios registrados en nuestra app (social loguin se maneja en front)
        //luego de pasar por todas las validaciones:
            //debe responder con los datos del usuario
        try {

        } catch(error) {
            next(error)
        }
    },

    salir: async(req,res,next) => {
        //método para que un usuario cierre sesión (cambia online de true a false)
        //solo para usuarios registrados en nuestra app (social logout se maneja en front)
                //si tiene éxito debe debe cambiar online de true a false
                //si no tiene éxito debe responder con el error
        try {

        } catch(error) {
            next(error)
        }
    }

}

module.exports = controller;




// const controller= {
//     create: async (req, res) => {
//         try {
//             let new_user = await User.create(req.body);
//             res.status(201).json({
//                 id: new_user.id,
//                 success : true,
//                 message: "User created successfully"
//             })
//         } catch (err) {
//             res.status(400).json({
//                 success: false,
//                 message: err.message 
//             });
//         }
//     }
// }
