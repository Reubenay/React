import React from "react";
import ProductCard from "./ProductCard";

function App() {
  const products = [
    {
      name: "HP Pavilion Laptop",
      price: 450000,
      image: "https://i.pinimg.com/1200x/89/71/17/8971178c96d3d047f6a6c198584c27f3.jpg",
      inStock: true,
    },
    {
      name: "iPhone 16 Pro Max",
      price: 1200000,
      image: "https://i.pinimg.com/736x/20/57/3c/20573c259f071de8bf5af1ec52201828.jpg",
      inStock: false,
    },
    {
      name: "LG Smart TV 55\"",
      price: 385000,
      image: "https://i.pinimg.com/1200x/4e/08/b9/4e08b9140889845e650442c213bb8fdf.jpg",
      inStock: true,
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}> Reuben Shop</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {products.map((p, index) => (
          <ProductCard
            key={index}
            name={p.name}
            price={p.price}
            image={p.image}
            inStock={p.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
