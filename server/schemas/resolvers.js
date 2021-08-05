const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById({ _id: context.user._id });
        return user;
      }
      throw new AuthenticationError("Not logged in");
    },

    games: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Game.find(params).sort({ date });
    },

    game: async (parent, { _id }) => {
      return Game.findOne({ _id });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      //check to see if the password the user entered matches the one in the database
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      //add the token to jsonwebtoken
      const token = signToken(user);

      return { token, user };
    },
    addGame: async (parent, { userId, ...args }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: userId },
          { $push: { games: { ...args } } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError(
        "You need to be logged in to add a session!"
      );
    },
  },
};

module.exports = resolvers;
