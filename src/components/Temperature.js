import React, { useState } from "react";

export default function Temperature() {
  const [temperature, setTemperature] = useState("");

  function handleChange(event) {
    const value = event.target.value; // Always a string
    if (value === "") setTemperature("");
    else setTemperature(Number(value));
  }

  function getTemperatureStatement() {
    if (temperature === "") return null;
    if (temperature <= 10)
      return (
        <div style={{ color: "blue" }}>
          It's cold{" "}
          <span role="img" aria-label="snow">
            ❄️
          </span>
        </div>
      );
    if (temperature <= 30)
      return <div style={{ color: "black" }}>It's nice 🌼</div>;
    return <div style={{ color: "red" }}>It's warm ☀️</div>;
  }

  return (
    <div>
      <h1>Temperature</h1>
      <input type="number" value={temperature} onChange={handleChange} />
      {/* <div>{JSON.stringify(temperature)}</div> */}
      {getTemperatureStatement()}
    </div>
  );
}
