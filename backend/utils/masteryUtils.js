// Calculate rolling mastery score using weighted recent attempts
function calculateMastery(attempts) {
  if (!attempts.length) return 0;
  let scoreSum = 0;
  let weightSum = 0;
  attempts.forEach((attempt, index) => {
    const weight = 1 / (index + 1); // recent attempts weighted more
    scoreSum += (attempt.isCorrect ? 1 : 0) * weight;
    weightSum += weight;
  });
  return scoreSum / weightSum;
}

module.exports = { calculateMastery };
