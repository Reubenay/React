export default function ColorDisplay({ rgb, hex }) {
  const { r, g, b } = rgb;

  const copyHex = () => {
    navigator.clipboard.writeText(hex);
    alert(`Copied ${hex} to clipboard!`);
  };

  return (
    <div className="color-display">
      <p>
        <strong>RGB:</strong> ({r}, {g}, {b})
      </p>
      <p>
        <strong>HEX:</strong> {hex}
      </p>

      <div
        className="color-preview"
        style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      ></div>

      <button onClick={copyHex} className="copy-btn">
        Copy Hex
      </button>
    </div>
  );
}
