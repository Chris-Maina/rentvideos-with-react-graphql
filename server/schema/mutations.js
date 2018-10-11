const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const Video = require('../models/Video');
const VideoType = require('./video');
const GenreType = require('./genre');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addVideo: {
      type: VideoType,
      args: { 
        price: { type: new GraphQLNonNull(GraphQLString)},
        description: { type: new GraphQLNonNull(GraphQLString)},
        name: { type: new GraphQLNonNull(GraphQLString)}
      },
      async resolve(parentValue, args) {
        const { name, description, price } = args;
        const video = await Video.create({ name, description, price });
        return video;
      }
    },
    addGenreToVideo: {
      type: VideoType,
      args: {
        id: { type: GraphQLString },
        genre: { type: GraphQLString }
      },
      async resolve (parentValue, args) {
        console.log('parent >>>>>>>>>>>>>>', parentValue);
        const { id, genre } = args;
        const video = Video.addGenreToVideo(id, genre);
        return video;
      }
    }
  }
});

module.exports = mutation;