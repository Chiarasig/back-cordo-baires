const City = require('../models/City')

const controller = {
    create: async (req, res) => {
        try {
            let new_city = await City.create(req.body);
            res.status(201).json({
                id: new_city.id,
                success : true,
                message: "City created successfully"
            })
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message 
            });
        }
    }
}

module.exports = controller;