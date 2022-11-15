const Itinerary = require('../models/Itinerary');

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
            let todos = await Itinerary.find(query) ; 
            if(todos){
                res.status(200).json({
                    response: todos,
                    succes:true,
                    message: "Cities retrieved successfully"
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
