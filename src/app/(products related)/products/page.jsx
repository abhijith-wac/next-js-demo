import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "../../lib/getProducts";

export default async function ProductsList() {
  const data = await getProducts();

  console.log(data)
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product List</h1>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "18px",
          justifyContent: "center",
        }}
      >
        {data.products.map((product) => (
          <li
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "center",
              background: "#f9f9f9",
            }}
          >
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={200}
              height={150}
              quality={100}
              priority
              style={{ borderRadius: "8px" }}
            />

            <p>{product.title}</p>
            <Link
              href={`/product/${product.id}`}
              style={{
                textDecoration: "none",
                color: "blue",
                fontWeight: "bold",
              }}
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
