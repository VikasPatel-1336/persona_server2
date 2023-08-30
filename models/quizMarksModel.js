const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  userTrueAns: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('quizmark', quizSchema);

