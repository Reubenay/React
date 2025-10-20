import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, image, inStock }) {
  return (
    <div className="product-container">
      <div className="product-thumb">
        <img src={image} alt={name} className={!inStock ? "dimmed" : ""} />
        {!inStock && <div className="sold-overlay">Out of Stock</div>}
      </div>

      <div className="product-details">
        <h2 className="product-title">{name}</h2>
        <p className="product-price">₦{price.toLocaleString()}</p>

        <p className={`stock-badge ${inStock ? "available" : "unavailable"}`}>
          {inStock ? " Available" : " Not Available"}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
