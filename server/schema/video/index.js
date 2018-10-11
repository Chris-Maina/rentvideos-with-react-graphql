const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');
const GenreType = require('../genre');
const DirectorType = require('../director');

const VideoType = new GraphQLObjectType({
  name: 'Video',
  fields: {
    id: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    modifiedAt: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLString },
    genre: { type: new GraphQLList(GenreType) },
    director: { type: new GraphQLList(DirectorType) },
  }
});

module.exports = VideoType;