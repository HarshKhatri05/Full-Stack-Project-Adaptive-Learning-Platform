const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  content: { type: String, required: true },
  options: [String],   // for MCQs
  answer: { type: mongoose.Mixed, required: true },
  type: { type: String, enum: ['mcq', 'short_answer', 'coding'], required: true },
  topics: [String],
  bloomLevel: Number,
  difficulty: Number,
  skills: [String],
  hints: [String],
  explanation: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Question', questionSchema);
