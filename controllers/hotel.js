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
    },
    read: async (req,res) => {
        let {query} = req
        let {order} = req
        if (query.name){
            query = {
                ...query,
                name: {$regex: query.name, $options: 'i'}
            }
        }
        if (req.query.order){
            order = {name: req.query.order}
        }
        try {
            let all = await Hotel.find(query).sort(order);
            if (all){
                res.status(200).json({
                response: all,
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