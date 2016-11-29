var mongoose = require('mongoose');

// Create the MovieSchema.
var GameSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  points: {
    type: String,
    required: true
  }
});

// Export the model schema.
module.exports = GameSchema;