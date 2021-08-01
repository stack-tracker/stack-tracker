const { GraphQLDate } = require('graphql-iso-date');
const { Game, Index, User }

const customDateResolver = {
    Date: GraphQLDate
};

export default {

}

module.exports = customDateResolver;