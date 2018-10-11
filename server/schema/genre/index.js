const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const GenreType = new GraphQLObjectType({
  name: 'Genre',
  fields: {
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
  }
});

module.exports = GenreType;
