const Reactions = require("../models/Reactions");

const controller = {
  create: async (req, res) => {
    try {
      let new_reaction = await Reactions.create(req.body);
      res.status(201).json({
        id: new_reaction._id,
        success: true,
        message: "Reaction created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  update: async (req, res) => {
    let query = {};
    let Id = req.user.idUser;

    if (req.query.itineraryId) {
      query = {
        itineraryId: req.query.itineraryId,
      };
    }

    if (req.query.name) {
      query = {
        ...query,
        name: req.query.name,
      };
    }

    try {
      let reaction = await Reactions.findOne(query);
      if (reaction) {
        if (reaction.userId.includes(Id)) {
          await Reactions.findOneAndUpdate(
            { _id: reaction._id },
            { $pull: { userId: Id } },
            { new: true }
          );
          res.status(200).json({
            name: reaction.name,
            message: `Event dis${reaction.name}`,
            success: true,
          });
          console.log("estoy en el pull");
        } else {
          await Reactions.findOneAndUpdate(
            { _id: reaction._id },
            { $push: { userId: Id } },
            { new: true }
          );
          res.status(200).json({
            name: reaction.name,
            message: `Event ${reaction.name}`,
            success: true,
          });
          console.log("estoy en el push");
          console.log(reaction);
        }
      } else {
        res.status(404).json({
          message: `The reaction dont exist in the itinerary`,
          success: false,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: error.message,
        success: false,
      });
    }
  },
  read: async (req, res) => {
    let query = {};
    if (req.query.itineraryId) {
      query = { itineraryId: req.query.itineraryId };
    }
    if (req.query.userId) {
      query = { userId: req.query.userId };
    }

    try {
      let reactions = await Reactions.find(query).populate({
        path: "userId",
        select: "name lastName photo ",
      });
      if (reactions.length > 0) {
        let lengthOfReactions = [];
        reactions.forEach((reaction) => {
          lengthOfReactions.push({
            name: reaction.name,
            count: reaction.userId.length,
            icon: reaction.icon,
            iconBack: reaction.iconBack,
          });
        });

        res.status(200).json({
          reactions: lengthOfReactions,
          id: req.query.itineraryId,
          // data: reactions,
          success: true,
          message: `The reactions of the itinerary are  ${req.query.itineraryId}`,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No reactions found",
          data: [],
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        data: error,
      });
    }
  },
  reactionforuser: async (req, res) => {
    let query = {};
    if (req.query.itineraryId) {
      query = { itineraryId: req.query.itineraryId };
    }
    if (req.query.userId) {
      query = { userId: req.query.userId };
    }
    console.log(query);

    try {
      let reactions = await Reactions.find(query).populate({
        path: "userId",
        select: "name lastName photo ",
      })    
      .populate({path: "itineraryId", select: "name -_id photo"})
      ;
      if (reactions.length > 0) {
        let lengthOfReactions = [];
        reactions.forEach((reaction) => {
          lengthOfReactions.push({
            name: reaction.name,
            count: reaction.userId.length,
            icon: reaction.icon,
            iconBack: reaction.iconBack,
          });
        });
        res.status(200).json({
          id: req.query.itineraryId,
          reactions:lengthOfReactions,
          data: reactions,
          success: true,
          message: `The reactions of the itinerary are  ${req.query.itineraryId}`,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No reactions found",
          data: [],
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        data: error,
      });
    }
  },
  reactionsForUser: async (req, res) => {
    let query = {};
    if (req.query.userId) {
      query = { userId: req.query.userId };
    }
    console.log(query);

    try {
      let reactions = await Reactions.find(query).populate({
        path: "userId",
        select: "name lastName photo ",
      });
      if (reactions.length > 0) {
        let lengthOfReactions = [];
        reactions.forEach((reaction) => {
          lengthOfReactions.push({
            name: reaction.name,
            count: reaction.userId.length,
            icon: reaction.icon,
            iconBack: reaction.iconBack,
          });
        });
        res.status(200).json({
          id: req.query.itineraryId,
          reactions:lengthOfReactions,
          data: reactions,
          success: true,
          message: `The reactions of the itinerary are  ${req.query.itineraryId}`,
        });
        console.log(lengthOfReactions);
        console.log('soy el lenght of reactions');

      } else {
        res.status(404).json({
          success: false,
          message: "No reactions found",
          data: [],
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        data: error,
      });
    }
  },
  deletereactionofuser: async (req, res) => {
    let { id } = req.params;

    try {

      let reactions = await Reactions.findOneAndUpdate(
        { _id: id },
        { $pull: { userId: req.user.idUser}},
        { new: true }
      );
      res.status(200).json({
        success: true,
        message: `The reaction was deleted`,
        data: reactions,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        data: error,
      });
    }
  },
};
module.exports = controller;
