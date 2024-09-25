import React from "react";

const Scoreboard = ({ scores }) => {
  return (
    <div>
      <h2>Scoreboard</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            {score.name}: {score.points}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
