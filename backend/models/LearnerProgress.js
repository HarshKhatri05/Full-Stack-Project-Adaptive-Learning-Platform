const mongoose = require('mongoose');

const topicProgressSchema = new mongoose.Schema({
  topic: String,
  proficiency: { type: Number, default: 0 },  // e.g. 0 to 1 scale
  attempts: { type: Number, default: 0 },
  correctStreak: { type: Number, default: 0 },
  lastAttemptAt: Date,
  timeSpent: { type: Number, default: 0 }  // in seconds
});

const learnerProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', unique: true },
  progress: [topicProgressSchema],
  masteryScore: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LearnerProgress', learnerProgressSchema);
