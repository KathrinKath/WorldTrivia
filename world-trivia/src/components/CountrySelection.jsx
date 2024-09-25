import React from "react";

const CountrySelection = ({ countries, selectCountry }) => {
  return (
    <div>
      <h2>Select a Country</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <button onClick={() => selectCountry(country)}>
              {country.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountrySelection;
