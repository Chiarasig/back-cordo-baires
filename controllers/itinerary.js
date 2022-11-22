const Itinerary = require("../models/Itinerary");

const controller = {
  read: async (req, res) => {
    let { query } = req;
    if (query.name) {
      query = {
        ...query,
        name: { $regex: query.name, $options: "i" }, //i es para que sea insensible a mayusculas y minusculas
      };
    }
    if(req.query.userId){
      query ={ 
          userId: req.query.userId
      }
  }
    try {
      let todos = await Itinerary.find(query).populate([{path: 'cityId', select: 'name'}, {path: 'userId', select: 'role'}]);
      if (todos) {
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
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No cities found",
        });
      }
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  },
  create: async (req, res) => {
    try {
      let new_itinerary = await Itinerary.create(req.body);
      res.status(201).json({
        id: new_itinerary.id,
        success: true,
        message: "Itinerary created successfully",
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    try {
      let updated_itinerary = await Itinerary.findByIdAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );
      res.status(200).json({
        response: updated_itinerary,
        success: true,
        message: "Itinerary updated successfully",
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }},
    destroy: async (req, res) => {
        let { id } = req.params
        try {
            let deleted_itinerary = await Itinerary.findById({_id: id})
            res.status(200).json({
                response: deleted_itinerary,
                success: true,
                message: "Itinerary deleted successfully"
            })
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    }
};
module.exports = controller;
