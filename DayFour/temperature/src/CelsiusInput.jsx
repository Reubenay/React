export default function CelsiusInput({ value, onChange }) {
  return (
    <div className="input-field">
      <label>Celsius: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="temp-input"
      />
    </div>
  );
}
