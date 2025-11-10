const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const Question = require('../models/Question');
const router = express.Router();

// Edit existing question
router.put('/question/:id', authMiddleware(['instructor', 'admin']), async (req, res) => {
  try {
    const updated = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Question not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
});

// Delete a question
router.delete('/question/:id', authMiddleware(['instructor', 'admin']), async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: 'Question deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Delete failed' });
  }
});

// Fetch basic analytics - mastery by topics (example)
router.get('/analytics/mastery', authMiddleware(['instructor', 'admin']), async (req, res) => {
  // Placeholder - implement aggregation in actual project
  res.json({ message: 'Analytics endpoint - implement data aggregation' });
});

module.exports = router;
