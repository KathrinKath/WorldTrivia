import React, { useState, useEffect } from "react";

const Timer = ({ onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  return <div>Time Left: {timeLeft} seconds</div>;
};

export default Timer;
