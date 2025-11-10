import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function StudentDashboard({ token }) {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchQuestions() {
      const res = await axios.get('http://localhost:5000/api/questions', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setQuestions(res.data);
    }
    fetchQuestions();
  }, [token]);

  const handleAnswer = (isCorrect, answer) => {
    // TODO: send attempt to backend, update mastery, etc.
    setCurrent(current + 1);
  };

  if (!questions.length) return <p>Loading questions...</p>;
  if (current >= questions.length) return <p>Quiz Completed!</p>;

  return (
    <div>
      <h2>Student Quiz</h2>
      <QuizQuestion question={questions[current]} onAnswer={handleAnswer} />
    </div>
  );
}

function QuizQuestion(props) {
  return <Question {...props} />;
}
