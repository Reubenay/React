import { useState } from "react";
import Slider from "./Slider";
import ColorDisplay from "./ColorDisplay";
import "./ColorPicker.css";

export default function ColorPicker() {
  const [color, setColor] = useState({ r: 255, g: 100, b: 50 });

  // Update color based on slider change
  function handleChange(channel, value) {
    setColor({ ...color, [channel]: parseInt(value) });
  }

  // Convert RGB to HEX
  function rgbToHex(r, g, b) {
    return (
      "#" +
      [r, g, b]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()
    );
  }

  const hex = rgbToHex(color.r, color.g, color.b);

  return (
    <div className="color-picker">
      <h2> Color Picker</h2>

      <Slider
        label="Red"
        value={color.r}
        onChange={(val) => handleChange("r", val)}
        color="red"
      />
      <Slider
        label="Green"
        value={color.g}
        onChange={(val) => handleChange("g", val)}
        color="green"
      />
      <Slider
        label="Blue"
        value={color.b}
        onChange={(val) => handleChange("b", val)}
        color="blue"
      />

      <ColorDisplay rgb={color} hex={hex} />
    </div>
  );
}
