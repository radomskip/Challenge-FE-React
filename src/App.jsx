import React, { useState } from "react";
import { transportOptionsFormatted } from "./const";
import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = () => {
    setSelectedOption("");
  };

  return (
    <div className="App">
      <p>
        Tipos de medio de transporte:
        <span>{transportOptionsFormatted.transportType}</span>
      </p>
      <div className="select-container">
        <label>Selecciona un medio de transporte</label>
        <select value={selectedOption} onChange={handleChange}>
          <option value="">Seleccione una opcion</option>
          {transportOptionsFormatted.keys.map((current, idx) => (
            <option key={idx} value={current}>
              {current}
            </option>
          ))}
        </select>

        <button onClick={handleClick}>Limpiar</button>
      </div>
      {selectedOption && (
        <ul>
          {Object.entries(transportOptionsFormatted.data[selectedOption]).map(
            ([key, value], idx) => (
              <li key={idx}>{`${key}: ${value}`}</li>
            )
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
