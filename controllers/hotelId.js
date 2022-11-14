const Hotel = require('../models/Hotel')

const controller = {
    read: async (req,res) => {
        let { id } = req.params
        try {
            let one = await Hotel.findOne({_id: id}).populate('userId', ['name, photo'])
            if (one){
                res.status(200).json({
                response: one,
                success: true,
                message: "Hotels retrieved successfully"
                })
            } else {
                res.status(404).json({
                success: false,
                message: "No hotels found"
                })
            }
        } 
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
}}

module.exports = controller;