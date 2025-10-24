 function Slider({ label, value, onChange, color }) {
  return (
    <div className="slider-container">
      <label>
        {label}: <span>{value}</span>
      </label>
      <input
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`slider ${color}`}
      />
    </div>
  );
}
export default Slider;