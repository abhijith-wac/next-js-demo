import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "../lib/getProducts";

export default async function ProductsList() {
  const data = await getProducts();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product List</h1>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: "18px",
          justifyContent: "center",
        }}
      >
        {data.products.map((product) => (
          <li
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
              width: "200px",
              textAlign: "center",
              background: "#f9f9f9",
            }}
          >
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={200}
              height={150}
              quality={100} // Ensures high-quality image
              style={{
                borderRadius: "8px",
                objectFit: "cover",
              }}
              priority
            />

            <p>{product.title}</p>
            <Link href={`/product/${product.id}`} legacyBehavior>
              <a
                style={{
                  textDecoration: "none",
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                View Details
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
