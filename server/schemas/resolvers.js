const { AuthenticationError } = require('apollo-server-express');
const { GraphQLDate } = require('graphql-iso-date');
const { Game, Index, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    populate: 'games'
                });

               return user.games.id(_id);
            }
            throw new AuthenticationError('Not logged in');
        },

        games: async (parent, { _id }) => {
            const params = _id ? {  _id } : {};
            return Game.find(params).sort({ date });
        },

        game: async (parent, { _id }) => {
            return Game.findOne({ _id });
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true});
            }

            throw new AuthenticationError('Not logged in');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};


const customDateResolver = {
    Date: GraphQLDate
};

module.exports = { customDateResolver, resolvers} ;