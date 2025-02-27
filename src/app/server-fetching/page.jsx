import React from "react";
import Link from "next/link";

// Fetch products outside the component
const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

export default async function ProductsList() {
  const data = await getProducts();
          
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product List</h1>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {data.products.map((product) => (
          <li key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px", width: "200px", textAlign: "center" }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
            <p>{product.title}</p>
            {/* Add Link to View Details */}
            <Link href={`/product/${product.id}`} style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
