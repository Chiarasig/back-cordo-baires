const cityAdmin = require('../models/City');



const controller = {
    read: async (req, res) => {
        let { query } = req;
        if (query.userId) {
          query = {
            userId : query.userId
          };
        }
        try {
        console.log('estoy antes del find'); 
          let todos = await cityAdmin.find(query);
          console.log('estoy despues del find');
          if (todos) {
            console.log('estoy en el if');
            res.status(200).json({
              response: todos,
              succes: true,
              message: "Cities retrieved successfully",
            });
          } else {
            console.log('estoy en el else');
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
}

module.exports = controller;

