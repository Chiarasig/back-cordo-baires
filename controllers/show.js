const { query } = require("express");
const Show = require("../models/Show");

const controller = {
  create: async (req, res) => {
    try {
      let new_show = await Show.create(req.body);
      res.status(201).json({
        id: new_show.id,
        success: true,
        message: "Show created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    try {
      let one = await Show.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (one) {
        res.status(200).json({
          id: one._id,
          success: true,
          message: "Successfully modified show",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No shows found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let one = await Show.findOneAndDelete({ _id: id });
      if (one) {
        res.status(200).json({
          id: one._id,
          success: true,
          message: "Successfully deleted show",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No shows found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  read: async (req, res) => {
    let query = {}
    if(req.query.hotelId){
      query ={ 
        hotelId: req.query.hotelId
      }
    }
    if(req.query.userId){
      query = {
        userId: req.query.userId
      }
  }
    try {
      let show = await Show.find(query)
      show
        ? res.status(200).json({
            response: show,
            success: true,
            message: "show found",
          })
        : res.status(404).json({
            success: false,
            message: "show not found",
          });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  },
  readById: async (req, res) => {
    let { id } = req.params;
    let query={};
    if(id){
      query ={ 
       _id: id
      }
    }
    try {
      let show = await Show.find(query).populate([{path: 'hotelId', select: 'name'}, {path: 'userId', select: 'role'}])
      show
        ? res.status(200).json({
            response: show,
            success: true,
            message: "show found",
          })
        : res.status(404).json({
            success: false,
            message: "show not found",
          });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  },
};

module.exports = controller;
