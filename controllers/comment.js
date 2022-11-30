const Comment = require("../models/Comment");

const controller = {
  read: async (req, res) => {
    let query = {};
    if (req.query.hotelId) {
      query = {
        hotelId: req.query.hotelId,
      };
    }
    try {
      let all = await Comment.find(query)
        .sort({ date: 1 })
        .populate([
          { path: "showId", select: "name" },
          { path: "userId", select: "role" },
        ]);
      if (all.length > 0) {
        res.status(200).json({
          response: all,
          success: true,
          message: "Comments retrieved successfully",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No comments found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  create: async (req, res) => {
    try {
      let new_comment = await Comment.create(req.body);
      res.status(201).json({
        id: new_comment.id,
        success: true,
        message: "Comment created successfully",
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
      let one = await Comment.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (one) {
        res.status(200).json({
          id: one._id,
          success: true,
          message: "Successfully modified comment",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No comments found",
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
      let one = await Comment.findOneAndDelete({ _id: id });
      if (one) {
        res.status(200).json({
          id: one._id,
          success: true,
          message: "Successfully deleted comment",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No comments found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};

module.exports = controller;
