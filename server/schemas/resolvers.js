const { AuthenticationError } = require("apollo-server-express");
const { Game, Index, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user.games.id(_id);
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
      console.log(user);

      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const correctPw = await user.isCorrectPassword(password);
      console.log(correctPw);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addGame: async (parent, args, context) => {
      if (context.user) {
        const game = await Game.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { games: game._id } },
          { new: true }
        );

        return game;
      }

      throw new AuthenticationError(
        "You need to be logged in to add a session!"
      );
    },
  },
};

module.exports = resolvers;
