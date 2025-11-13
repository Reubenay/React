function ColorPalette() {
  const colors = [
    { name: "Nigerian Green", hex: "#008751", class: "bg-[#008751]" },
    { name: "Nigerian White", hex: "#FFFFFF", class: "bg-white" },
    { name: "Green-50", hex: "#ecfdf5", class: "bg-green-50" },
    { name: "Green-100", hex: "#d1fae5", class: "bg-green-100" },
    { name: "Green-200", hex: "#a7f3d0", class: "bg-green-200" },
    { name: "Green-300", hex: "#6ee7b7", class: "bg-green-300" },
    { name: "Green-400", hex: "#34d399", class: "bg-green-400" },
    { name: "Green-500", hex: "#10b981", class: "bg-green-500" },
    { name: "Green-600", hex: "#059669", class: "bg-green-600" },
    { name: "Green-700", hex: "#047857", class: "bg-green-700" },
    { name: "Green-800", hex: "#065f46", class: "bg-green-800" },
    { name: "Green-900", hex: "#064e3b", class: "bg-green-900" },
    { name: "Green-950", hex: "#022c22", class: "bg-green-950" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {colors.map((col, index) => (
        <div key={index} className="text-center">
          <div
            className={`w-20 h-20 rounded shadow ${col.class} ${
              col.hex === "#FFFFFF" ? "border border-green-600" : ""
            }`}
          ></div>
          <p className="mt-1 text-sm font-medium">{col.name}</p>
          <p className="text-xs text-gray-500">{col.hex}</p>
        </div>
      ))}
    </div>
  );
}

export default ColorPalette;