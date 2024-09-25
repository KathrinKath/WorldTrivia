// src/App.jsx
import React, { useState } from "react";
import { countriesData } from "./Data/countriesData";
import CountrySelection from "./components/CountrySelection";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setScore(0); // Reset score for new country
    setCurrentQuestionIndex(0); // Reset question index for new country
  };

  const handleAnswerClick = (option) => {
    const currentQuestion =
      selectedCountry.data.questions[currentQuestionIndex];
    if (option === currentQuestion.answer) {
      setScore(score + 1); // Increment score if the answer is correct
    }
    // Move to the next question after clicking an answer
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < selectedCountry.data.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Here, you can handle what happens after the last question
      alert(
        `Quiz completed! Your score: ${
          score + (option === currentQuestion.answer ? 1 : 0)
        }/${selectedCountry.data.questions.length}`
      );
      setSelectedCountry(null); // Reset selection after quiz completion
    }
  };

  const countries = Object.keys(countriesData).map((country) => ({
    name: country,
    data: countriesData[country]
  }));

  return (
    <div>
      <h1>World Trivia Game</h1>
      {selectedCountry ? (
        <div>
          <h2>You selected: {selectedCountry.name}</h2>
          <h3>Questions:</h3>
          <div>
            <p>
              {selectedCountry.data.questions[currentQuestionIndex].question}
            </p>
            <ul>
              {selectedCountry.data.questions[currentQuestionIndex].options.map(
                (option, idx) => (
                  <li key={idx}>
                    <button onClick={() => handleAnswerClick(option)}>
                      {option}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      ) : (
        <CountrySelection countries={countries} selectCountry={selectCountry} />
      )}
    </div>
  );
};

export default App;
