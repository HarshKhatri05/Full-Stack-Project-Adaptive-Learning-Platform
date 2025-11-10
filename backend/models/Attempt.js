const mongoose = require('mongoose');

const attemptSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User' },
  questionId: { type: mongoose.Types.ObjectId, ref: 'Question' },
  isCorrect: Boolean,
  timeTaken: Number,  // in seconds
  usedHint: Boolean,
  submittedAnswer: mongoose.Mixed,
  attemptAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Attempt', attemptSchema);
