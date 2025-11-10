const express = require('express');
const Question = require('../models/Question');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Get all questions (secured, for instructors)
router.get('/', authMiddleware(['instructor', 'admin']), async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

// Add a question
router.post('/', authMiddleware(['instructor', 'admin']), async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json({ message: 'Question created' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid question data' });
  }
});

module.exports = router;
