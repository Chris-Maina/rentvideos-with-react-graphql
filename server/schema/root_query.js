const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLString
} = require('graphql');
// const axios = require('axios');

const VideoType = require('./video');
const Video = require('../models/Video');


const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    video: {
      type: VideoType,
      args: { id: { type: GraphQLString }},
      async resolve(parentValue, args) {
        const { id } = args;
        const video = await Video.findById({ id, }).populate('genre', 'name').populate('director', 'fullName');
        return video;
      }
    },
    videos: {
      type: new GraphQLList(VideoType),
      async resolve() {
        const videos = await Video.find({}).populate('genre', 'name').populate('director', 'fullName');
        return videos;
      }
    }
  }
})

module.exports = query;
