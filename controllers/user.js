const User = require('../models/User');

const controller= {
    create: async (req, res) => {
        try {
            let new_user = await User.create(req.body);
            res.status(201).json({
                id: new_user.id,
                success : true,
                message: "User created successfully"
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