"use client";

export default function BuyNowButton({ product }) {
  const handleBuyNow = () => {
    alert(`Redirecting to checkout for ${product.title}...`);
    // Implement checkout flow
  };

  return (
    <button 
      onClick={handleBuyNow}
      style={{
        padding: "10px 15px",
        backgroundColor: "#4caf50",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      Buy Now
    </button>
  );
}
