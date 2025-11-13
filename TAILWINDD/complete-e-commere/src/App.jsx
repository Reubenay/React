import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <Hero />
      <Categories />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
