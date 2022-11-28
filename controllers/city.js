const City = require("../models/City");

const controller = {
  create: async (req, res) => {
    try {
      let new_city = await City.create(req.body);
      res.status(201).json({
        id: new_city.id,
        success: true,
        message: "City created successfully",
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  },
  read: async (req, res) => {
    let { query } = req;
    if (req.query.name) {
      query = { name: { $regex: req.query.name, $options: "i" } };
    }
    if (req.query.continent) {
      query = {
        ...query,
        continent: req.query.continent?.split(","),
      };
    }
    try {
      let todos = await City.find(query);
      if (todos) {
        res.status(200).json({
          response: todos,
          succes: true,
          message: "Cities retrieved successfully",
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
  update: async (req, res) => {
    let { id } = req.params;
    try {
      let updated_city = await City.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.status(200).json({
        response: updated_city,
        success: true,
        message: "City updated successfully",
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let deleted_city = await City.findByIdAndDelete({ _id: id });
      res.status(200).json({
        response: deleted_city,
        success: true,
        message: "City deleted successfully",
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
