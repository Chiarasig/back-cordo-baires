const Hotel = require('../models/Hotel')

const controller = {
    create: async (req, res) => {
     try {
        let new_hotel = await Hotel.create(req.body);
        res.status(201).json({
            id: new_hotel.id,
            success: true,
            message: "Hotel created successfully"
        })
    } catch (error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}}

module.exports = controller;