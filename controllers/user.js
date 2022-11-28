const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const accountVerificationEmail = require("./accountVerificationEmail");
const {
  userSignedUpResponse,
  userNotFoundResponse,
  invalidCredentialsResponse,
  userSignedOutResponse,
} = require("../config/responses");
const jwt = require("jsonwebtoken");

const controller = {
  register: async (req, res, next) => {
    let { name, lastName, role, photo, age, mail, password } = req.body;
    let verified = false;
    let logged = false;
    let code = crypto.randomBytes(10).toString("hex");
    password = bcryptjs.hashSync(password, 10);
    try {
      await User.create({
        name,
        lastName,
        role,
        photo,
        age,
        mail,
        password,
        verified,
        logged,
        code,
      });
      await accountVerificationEmail(mail, code);
      return userSignedUpResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  verified: async (req, res, next) => {
    const { code } = req.params;
    console.log(code);
    try {
      let user = await User.findOneAndUpdate(
        { code: code },
        { verified: true },
        { new: true }
      );
      if (user) {
        return res.redirect("http://localhost:3000/");
      }
      return userNotFoundResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  enter: async (req, res, next) => {
    const { password } = req.body;
    const { user } = req;
    try {
      const verifiedPassword = bcryptjs.compareSync(password, user.password);
      if (verifiedPassword) {
        const userDb = await User.findOneAndUpdate(
          { _id: user.id },
          { logged: true },
          { new: true }
        );
        const token = jwt.sign(
          {
            id: userDb._id,
            name: userDb.name,
            photo: userDb.photo,
            logged: userDb.logged,
            role: userDb.role,
            lastName: userDb.lastName,
          },
          process.env.KEY_JWT,
          { expiresIn: 60 * 60 * 24 }
        );

        return res.status(200).json({
          response: {
            user: {
              name: userDb.name,
              lastName: userDb.lastName,
              photo: userDb.photo,
              role: userDb.role,
              logged: userDb.logged,
              idUser: userDb._id,
            },
            token,
          },
          success: true,
          message: "Welcome " + user.name,
        });
      }

      return invalidCredentialsResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  enterWithToken: async (req, res, next) => {
    let { user } = req;
    try {
      return res.json({
        response: {
          user: {
            name: user.name,
            lastName: user.lastName,
            photo: user.photo,
            role: user.role,
            logged: user.logged,
            idUser: user.idUser,
          },
        },
        success: true,
        message: "Welcome " + user.name,
      });
    } catch (error) {
      next(error);
    }
  },
  leave: async (req, res, next) => {
    const { id } = req.user;
    try {
      let user = await User.findOneAndUpdate(
        { _id: id },
        { logged: false },
        { new: true }
      );
      console.log(user);
      return userSignedOutResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  read: async (req, res, next) => {
    let id = req.params.id;
    try {
      let user = await User.findById({ _id: id });
      console.log(user);
      if (user                     ) {
        res.status(200).json({
          success: true,
          message: "The user was successfully found",
          response: user,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "There is no user",
        });
      }
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    try {
      let one = await User.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (one) {
        res.status(200).json({
          response: one,
          success: true,
          message: "The user was successfully modified",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "The user was not found",
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
