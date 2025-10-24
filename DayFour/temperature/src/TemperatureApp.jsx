import { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";
import "./TemperatureApp.css"; 

export default function TemperatureApp() {
  const [temperature, setTemperature] = useState({ scale: "c", value: "" });

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }


  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function handleCelsiusChange(value) {
    setTemperature({ scale: "c", value });
  }

  function handleFahrenheitChange(value) {
    setTemperature({ scale: "f", value });
  }

  const { scale, value } = temperature;
  const celsius = scale === "f" ? toCelsius(value) : value;
  const fahrenheit = scale === "c" ? toFahrenheit(value) : value;

  return (
    <div className="app-container">
      <h2> Temperature Converter</h2>
      <CelsiusInput value={celsius} onChange={handleCelsiusChange} />
      <FahrenheitInput value={fahrenheit} onChange={handleFahrenheitChange} />
    </div>
  );
}
