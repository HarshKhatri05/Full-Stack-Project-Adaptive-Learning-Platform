const express = require('express');
const Attempt = require('../models/Attempt');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Submit attempt
router.post('/', authMiddleware('student'), async (req, res) => {
  try {
    const attempt = new Attempt(req.body);
    await attempt.save();
    res.status(201).json({ message: 'Attempt recorded' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid attempt data' });
  }
});

// Get attempts by user (student)
router.get('/me', authMiddleware('student'), async (req, res) => {
  try {
    const attempts = await Attempt.find({ userId: req.user.id }).populate('questionId');
    res.json(attempts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch attempts' });
  }
});

module.exports = router;
