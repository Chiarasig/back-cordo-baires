const Hotel = require('../models/Hotel')

const controller = {
    read: async (req,res) => {
        let { id } = req.params
        try {
            let one = await Hotel.findById(id).populate([{path: 'cityId', select: 'name'}, {path: 'userId', select: 'name photo'}])
            one? res.status(200).json({
                response: one,
                success:true,
                message: 'Hotel retrieved successfully'
            }) : res.status(404).json({
                success:false,
                message:'Hotel not found'
            })
        } 
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
}}

module.exports = controller;