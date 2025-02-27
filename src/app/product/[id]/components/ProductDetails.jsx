import React from "react";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import AddToWishlistButton from "./AddToWishlistButton";
import BuyNowButton from "./BuyNowButton";

export default function ProductDetails({ product }) {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h1>{product.title}</h1>

      {/* Image Wrapper */}
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          quality={100}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
          style={{
            objectFit: "contain",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
          priority
        />
      </div>

      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>

      {/* Interactive Buttons */}
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>
        <AddToCartButton product={product} />
        <AddToWishlistButton product={product} />
        <BuyNowButton product={product} />
      </div>
    </div>
  );
}
