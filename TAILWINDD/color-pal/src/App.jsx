import ColorPalette from "./ColorPalette";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow rounded-xl p-6 w-full max-w-5xl">
        <h1 className="text-2xl font-bold text-center mb-6">
          Nigerian Color Palette
        </h1>
        <ColorPalette />
      </div>
    </div>
  );
}

export default App;