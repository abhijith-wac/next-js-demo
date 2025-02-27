"use client";

import { useState } from "react";

export default function AddToWishlistButton({ product }) {
  const [added, setAdded] = useState(false);

  const handleWishlist = () => {
    setAdded(!added);
    alert(`${product.title} ${added ? "removed from" : "added to"} wishlist!`);
  };

  return (
    <button 
      onClick={handleWishlist}
      style={{
        padding: "10px 15px",
        backgroundColor: added ? "#d32f2f" : "#2196f3",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      {added ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  );
}
