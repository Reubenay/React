export default function FahrenheitInput({ value, onChange }) {
  return (
    <div className="input-field">
      <label>Fahrenheit: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="temp-input"
      />
    </div>
  );
}
