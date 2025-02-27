import React from "react";

// Fetch product details
const getProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }
  return res.json();
};

export default async function ProductDetails({ params }) {
  const product = await getProduct(params.id);

  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
    </div>
  );
}
