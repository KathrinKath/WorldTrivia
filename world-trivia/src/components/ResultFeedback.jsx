import React from "react";

const ResultFeedback = ({ feedback }) => {
  return (
    <div>
      {feedback.isCorrect ? <p>Correct!</p> : <p>Wrong!</p>}
      <p>{feedback.explanation}</p>
    </div>
  );
};

export default ResultFeedback;
