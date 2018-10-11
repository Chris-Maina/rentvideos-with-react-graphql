const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Genre = require('./Genre');

const videoSchema = new Schema({
  createdAt: { type: Date, default: Date.now() },
  modifiedAt: { type: Date, default: Date.now() },
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  description: {
    type: String,
    default: '',
  },
  price: {
    type: String,
  },
  genre: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
  director: [{ type: Schema.Types.ObjectId, ref: 'Director' }],
});

videoSchema.statics.addGenreToVideo = async (videoId, genreName) => {
  try {
    let genre = await Genre.findOne({ name: genreName });
    if (!genre) {
      genre = new Genre({ name: genreName });
      await genre.save();
    }
    let video = await this.find({ id: videoId, genre: genreName });
    if (!video.length) {
      video = Video.findById(videoId);
      video.genre.push(genre);
      await video.save();
      return video;
    }
  } catch (error) {
    return error;
  }
}

module.exports = mongoose.model('Video', videoSchema);
