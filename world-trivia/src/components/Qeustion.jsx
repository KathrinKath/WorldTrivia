import React, { useState } from "react";
import ResultFeedback from "./ResultFeedback";

const Question = ({ questionData, moveToNextQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    if (index === questionData.correctAnswer) {
      setFeedback({ isCorrect: true, explanation: questionData.explanation });
    } else {
      setFeedback({ isCorrect: false, explanation: questionData.explanation });
    }
  };

  return (
    <div>
      <h3>{questionData.question}</h3>
      <ul>
        {questionData.options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => handleAnswerClick(index)}
              disabled={feedback}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      {feedback && <ResultFeedback feedback={feedback} />}
      <button onClick={moveToNextQuestion}>Next Question</button>
    </div>
  );
};

export default Question;
