const { GraphQLDate } = require('graphql-iso-date');

const customDateResolver = {
    Date: GraphQLDate
};

export default {

}

module.exports = customDateResolver;