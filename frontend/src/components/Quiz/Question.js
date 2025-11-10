import React, { useState } from 'react';

export default function Question({ question, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const submitAnswer = () => {
    if (selected === null) return;
    setSubmitted(true);
    const isCorrect = question.type === 'mcq' ? question.answer === selected : selected === question.answer;
    onAnswer(isCorrect, selected);
  };

  return (
    <div>
      <h3>{question.content}</h3>
      {question.type === 'mcq' && (
        <ul>
          {question.options.map((opt, i) => (
            <li key={i}>
              <button disabled={submitted} onClick={() => setSelected(opt)}>{opt}</button>
            </li>
          ))}
        </ul>
      )}
      {question.type !== 'mcq' && (
        <input disabled={submitted} value={selected || ''} onChange={e => setSelected(e.target.value)} />
      )}
      {!submitted && <button onClick={submitAnswer}>Submit</button>}
      {submitted && (
        <div>
          {selected === question.answer ? (
            <p style={{ color: 'green' }}>Correct!</p>
          ) : (
            <p style={{ color: 'red' }}>Incorrect. Explanation: {question.explanation}</p>
          )}
        </div>
      )}
    </div>
  );
}
