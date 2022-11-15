const Itinerary = require('../models/Itinerary');
const Show = require('../models/Show');

const controller = {
    read: async (req,res) => {
        let {query} = req
        if (query.name){
            query = {
                ...query,
                name: {$regex: query.name, $options: 'i'} //i es para que sea insensible a mayusculas y minusculas            
            }
        }
        try{
            let todos = await Itinerary.find(query).populate('cityId', 'name')
            if(todos){
                res.status(200).json({
                    response: todos.map((item) => ({
                      cityId: item.cityId,
                      name: item.name,
                      photo: item.photo,
                      description: item.description,
                      price: item.price,
                      duration: item.duration,
                    })),
                    success: true,
                    message: "show found",
                  })    
            }else{
                res.status(404).json({
                    success: false,
                    message : "No cities found"
                })
            }
        }
        catch(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
}
}
module.exports = controller;
