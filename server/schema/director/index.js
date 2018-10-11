const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: {
    fullName: { type: GraphQLString },
    slug: { type: GraphQLString },
  }
});

module.exports = DirectorType;