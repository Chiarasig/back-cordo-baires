const City = require('../models/City');

const controller = {
    read: async (req, res) => {
        let {id} = req.params;
        try{
            let one = await City.findById(id).populate([{path: 'userId', select: 'name photo'}])
            if(one){
                res.status(200).json({
                    response: one,
                    success: true,
                    message: 'City found'
                })
            }else{
                res.status(404).json({
                    response: null,
                    success: false,
                    message: 'City not found'
                })
            }
        }
        catch(error){
            res.status(404).json({
                success:false,
                message: error.message,
            })
        }
    }
}

module.exports = controller;