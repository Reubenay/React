import Button from "./Components/Button"; // Adjust path if needed

function App() {
  return (
    <div className="p-10">
      
      <h2 className="text-2xl font-bold mb-4">Button Library</h2>
      
      <div className="flex flex-wrap items-start gap-4">
        
        <Button variant="primary">
          Primary
        </Button>
        
        <Button variant="secondary">
          Secondary
        </Button>
        
        <Button variant="danger">
          Danger
        </Button>
        
        <Button variant="success">
          Success
        </Button>
        
        <Button variant="primary" size="lg">
          Large Button
        </Button>
        
        <Button variant="secondary" size="sm">
          Small Button
        </Button>
      </div>

    </div>
  );
}

export default App;