const Hotel = require('../models/Hotel');
const { all } = require('../routes/hotelId');

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
        let query = {}
        let order = {}
        let name
        if(req.query.userId){
            query ={ 
                userId: req.query.userId
            }
        }
        try {
            req.query.name?
                name= req.query.name.toLowerCase() : ''
                name ? query.name = { $regex : name, $options: 'i' } : ''
                req.query.order?
                order = {name:req.query.order} : ''
            let all = await Hotel.find(query).sort(order).populate([{path: 'cityId', select: 'name'}, {path: 'userId', select: 'role'}])
            if (all.length > 0) {
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
}, update: async (req, res) => {
    let { id } = req.params
    try {
        let one = await Hotel.findOneAndUpdate({_id: id}, req.body, {new: true})
        if (one){
            res.status(200).json({
            id: one._id,
            success: true,
            message: "Successfully modified hotel"

            })
        } else {
            res.status(404).json({
            success: false,
            message: "No hotels found"
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
     }
}, destroy: async(req,res) => {
    let { id } = req.params
    try {
        let one = await Hotel.findOneAndDelete({_id: id})
        if (one){
            res.status(200).json({
            id: one._id,
            success: true,
            message: "Successfully deleted hotel"

            })
        } else {
            res.status(404).json({
            success: false,
            message: "No hotels found"
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
}

module.exports = controller;