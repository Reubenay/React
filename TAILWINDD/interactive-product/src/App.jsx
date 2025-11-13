import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-gray-300 p-4 ">
      <h1 className="text-3xl font-bold mb-8 text-blue-900">Interactive <span className="text-blue-900  ">Product</span> Card</h1>
      <ProductCard
        image="https://th.bing.com/th/id/R.0ce12aabd2b88d4a201f46b0804be8a5?rik=izWrwWy5ESJu1g&pid=ImgRaw&r=0"
        name="Framework Laptop 13"
        price="900,000"
      />
    </div>
  );
}

export default App;