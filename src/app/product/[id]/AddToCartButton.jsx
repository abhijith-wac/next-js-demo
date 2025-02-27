"use client";

import { useState } from "react";

export default function AddToCartButton({ product }) {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    alert(`${product.title} added to cart!`);
    setLoading(false);
  };

  return (
    <button 
      onClick={handleAddToCart} 
      disabled={loading}
      style={{
        padding: "10px 15px",
        backgroundColor: "#ff9800",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      {loading ? "Adding..." : "Add to Cart"}
    </button>
  );
}
