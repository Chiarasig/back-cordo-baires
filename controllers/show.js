const Show = require('../models/Show')

const controller = {
    create: async (req, res) => {
        try {
           let new_show = await Show.create(req.body);
           res.status(201).json({
               id: new_show.id,
               success: true,
               message: "Show created successfully"
           })
       } catch (error){
           res.status(400).json({
               success: false,
               message: error.message
           });
       }
       },
}

module.exports = controller;